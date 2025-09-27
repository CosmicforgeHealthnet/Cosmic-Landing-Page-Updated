"use client"
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { CheckCircle, Loader2, X } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const WaitListComponent = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        facilityName: "",
        role: "",
        phone: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    // Validation functions
    const validateField = (name, value) => {
        const newErrors = { ...errors };

        switch (name) {
            case "fullName":
                if (!value.trim()) {
                    newErrors.fullName = "Full name is required";
                } else if (value.trim().length < 2) {
                    newErrors.fullName = "Full name must be at least 2 characters";
                } else if (!/^[a-zA-Z\s\-']+$/.test(value.trim())) {
                    newErrors.fullName = "Full name can only contain letters, spaces, hyphens, and apostrophes";
                } else if (value.trim().length > 50) {
                    newErrors.fullName = "Full name must be less than 50 characters";
                } else {
                    delete newErrors.fullName;
                }
                break;

            case "email":
                if (!value.trim()) {
                    newErrors.email = "Email is required";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    newErrors.email = "Please enter a valid email address";
                } else if (!value.toLowerCase().includes("@")) {
                    newErrors.email = "Email must contain @ symbol";
                } else if (value.length > 100) {
                    newErrors.email = "Email must be less than 100 characters";
                } else {
                    delete newErrors.email;
                }
                break;

            case "facilityName":
                if (!value.trim()) {
                    newErrors.facilityName = "Facility name is required";
                } else if (value.trim().length < 2) {
                    newErrors.facilityName = "Facility name must be at least 2 characters";
                } else if (value.trim().length > 100) {
                    newErrors.facilityName = "Facility name must be less than 100 characters";
                } else {
                    delete newErrors.facilityName;
                }
                break;

            case "role":
                if (!value) {
                    newErrors.role = "Please select your role";
                } else {
                    delete newErrors.role;
                }
                break;

            case "phone":
                if (value && value.length > 20) {
                    newErrors.phone = "Phone number must be less than 20 characters";
                } else {
                    delete newErrors.phone;
                }
                break;

            default:
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Validate field on change
        validateField(name, value);

        // Clear submit error when user starts typing
        if (submitError) setSubmitError("");
    };

    const handlePhoneChange = (value) => {
        setFormData(prev => ({
            ...prev,
            phone: value || ""
        }));

        // Validate phone field
        validateField("phone", value || "");

        if (submitError) setSubmitError("");
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const validateForm = () => {
        const requiredFields = ["fullName", "email", "facilityName", "role"];
        const newErrors = {};

        // Validate required fields
        requiredFields.forEach(field => {
            if (!formData[field].trim()) {
                newErrors[field] = `${field === "fullName" ? "Full name" :
                    field === "facilityName" ? "Facility name" :
                        field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            }
        });

        // Validate email format if provided
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Validate name lengths
        if (formData.fullName.trim().length > 50) {
            newErrors.fullName = "Full name must be less than 50 characters";
        }

        if (formData.facilityName.trim().length > 100) {
            newErrors.facilityName = "Facility name must be less than 100 characters";
        }

        if (formData.email.length > 100) {
            newErrors.email = "Email must be less than 100 characters";
        }

        if (formData.phone && formData.phone.length > 20) {
            newErrors.phone = "Phone number must be less than 20 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError("");

        // Validate all fields
        if (!validateForm()) {
            setSubmitError("Please fix the errors above");
            return;
        }

        setIsSubmitting(true);

        // Role mapping - try correct spelling first
        const roleMapping = {
            "pharmacy": "pharmacy",
            "lab": "lab"
        };

        const alternativeRoleMapping = {
            "pharmacy": "pharmarcy",
            "lab": "lab"
        };

        try {
            // First try with correct spelling
            let payload = {
                fullName: formData.fullName.trim(),
                email: formData.email.trim().toLowerCase(),
                facilityName: formData.facilityName.trim(),
                role: roleMapping[formData.role],
                ...(formData.phone && { phone: formData.phone })
            };

            console.log("Trying payload with role:", payload.role);

            const response = await fetch('https://backend-health-19nr.onrender.com/lab_pharm/waitlist/join', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            console.log("Server response:", data);

            // If validation failed due to role, try the alternative
            if (!data.success && data.details && data.details.some(detail => detail.field === "role")) {
                console.log("Role validation failed, trying alternative...");

                // Try with the typo version
                payload.role = alternativeRoleMapping[formData.role];
                console.log("Trying alternative payload with role:", payload.role);

                const retryResponse = await fetch('https://backend-health-19nr.onrender.com/lab_pharm/waitlist/join', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                const retryData = await retryResponse.json();
                console.log("Retry response:", retryData);

                if (retryData.success) {
                    setShowSuccess(true);
                    setFormData({
                        fullName: "",
                        email: "",
                        facilityName: "",
                        role: "",
                        phone: ""
                    });
                    setErrors({});
                } else {
                    setSubmitError(retryData.error || "Invalid role value. Please contact support.");
                }
            } else if (data.success) {
                setShowSuccess(true);
                setFormData({
                    fullName: "",
                    email: "",
                    facilityName: "",
                    role: "",
                    phone: ""
                });
                setErrors({});
            } else {
                setSubmitError(data.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setSubmitError("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeSuccess = () => {
        setShowSuccess(false);
    };

    // Check if form is valid for submit button
    const isFormValid = () => {
        return formData.fullName.trim() &&
            formData.email.trim() &&
            formData.facilityName.trim() &&
            formData.role &&
            Object.keys(errors).length === 0;
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 relative"
            style={{
                background: "radial-gradient(47.91% 47.91% at 25.26% 52.09%, #FFFFFF 0%, #CBD5FF 100%)",
            }}
        >
            <style jsx global>{`
                .react-tel-input {
                    font-family: "Poppins", sans-serif;
                    width: 100% !important;
                }

                .react-tel-input .form-control {
                    width: 100% !important;
                    background: rgba(39, 46, 167, 0.15) !important;
                    backdrop-filter: blur(10px) !important;
                    border: 1px solid rgba(39, 46, 167, 0.15) !important;
                    border-radius: 0.5rem !important;
                    height: 3rem !important;
                    font-size: 0.875rem !important;
                    color: #272EA7 !important;
                    padding-left: 56px !important;
                }

                .react-tel-input .form-control::placeholder {
                    color: rgba(39, 46, 167, 0.6) !important;
                    opacity: 1 !important;
                }

                .react-tel-input .form-control:focus {
                    border-color: #272EA7 !important;
                    box-shadow: 0 0 0 1px #272EA7 !important;
                }

                .react-tel-input .flag-dropdown {
                    background-color: transparent !important;
                    border: none !important;
                    border-radius: 0.5rem 0 0 0.5rem !important;
                    height: 3rem !important;
                }

                .react-tel-input .selected-flag {
                    border-radius: 0.5rem 0 0 0.5rem !important;
                    padding: 0 0 0 12px !important;
                    height: 100% !important;
                    display: flex !important;
                    align-items: center !important;
                }

                .react-tel-input .selected-flag:hover,
                .react-tel-input .selected-flag:focus {
                    background-color: rgba(39, 46, 167, 0.1) !important;
                }

                .react-tel-input .country-list {
                    border-radius: 0.5rem !important;
                    font-size: 0.875rem !important;
                    background: rgba(39, 46, 167, 0.08) !important;
                    backdrop-filter: blur(10px) !important;
                    border: 1px solid rgba(39, 46, 167, 0.15) !important;
                    box-shadow: 0 10px 25px -5px rgba(39, 46, 167, 0.1), 0 10px 10px -5px rgba(39, 46, 167, 0.05) !important;
                    max-height: 200px !important;
                    overflow-y: auto !important;
                    z-index: 50 !important;
                }

                .react-tel-input .country-list .country {
                    padding: 0.5rem 0.75rem !important;
                    display: flex !important;
                    align-items: center !important;
                    gap: 0.5rem !important;
                    color: #272EA7 !important;
                    transition: background-color 0.15s ease !important;
                }

                .react-tel-input .country-list .country:hover {
                    background: rgba(39, 46, 167, 0.1) !important;
                    color: #272EA7 !important;
                }

                .react-tel-input .country-list .country.highlight {
                    background: rgba(39, 46, 167, 0.15) !important;
                    color: #272EA7 !important;
                }

                .react-tel-input .country-list .country .dial-code {
                    color: rgba(39, 46, 167, 0.7) !important;
                    font-size: 0.8rem !important;
                }

                .react-tel-input .country-list .country .country-name {
                    color: #272EA7 !important;
                    font-size: 0.875rem !important;
                }

                .react-tel-input--error .form-control {
                    border-color: #ef4444 !important;
                    box-shadow: 0 0 0 1px #ef4444 !important;
                }
            `}</style>

            {/* Success Notification */}
            {showSuccess && (
                <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-500">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 max-w-sm w-full">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                    Welcome to the Waitlist!
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    You're now part of our exclusive healthcare network. We'll notify you when registration opens.
                                </p>
                                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                                    <div className="w-1.5 h-1.5 bg-[#272EA7] rounded-full animate-pulse"></div>
                                    <span>Priority access secured</span>
                                </div>
                            </div>
                            <button
                                onClick={closeSuccess}
                                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Left Side - Phone Images */}
                <div className="flex justify-center lg:justify-end relative lg:col-span-1">
                    <div className="relative transform -rotate-12 z-10">
                        <Image
                            src="/2Black.png"
                            alt="Phone mockup"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-8 lg:pl-8 w-full lg:col-span-2">
                    {/* Coming Soon Badge */}
                    <div className="flex justify-center lg:justify-start">
                        <span className="bg-[#272EA7] text-white px-6 py-2 rounded-full text-sm font-medium">
                            Coming Soon
                        </span>
                    </div>

                    {/* Main Heading */}
                    <div className="text-center lg:text-left space-y-4">
                        <h1
                            className="font-[Geist] font-extrabold text-[24px] leading-[1.1] tracking-[0]"
                            style={{
                                fontFamily: "Geist, sans-serif",
                                fontWeight: 800,
                                fontStyle: "normal",
                                fontSize: "24px",
                                lineHeight: "1.1",
                                letterSpacing: "0",
                                color: "#0A13B5",
                            }}
                        >
                            <div className="text-center">
                                Digitize Your Facility. Grow With Us. Strengthen Your Impact.
                            </div>
                            <div className="text-center mt-2">
                                Let's Build the Future of Healthcare Together!
                            </div>
                        </h1>

                        <p
                            className="font-[Geist] font-light text-[16px] leading-[1.25] tracking-[0] text-center"
                            style={{
                                fontFamily: "Geist, sans-serif",
                                fontWeight: 300,
                                fontStyle: "normal",
                                fontSize: "16px",
                                lineHeight: "1.25",
                                letterSpacing: "0",
                                textAlign: "center",
                                color: "#000000",
                                maxWidth: "48rem",
                                margin: "0 auto",
                            }}
                        >
                            Join the first wave of forward-thinking pharmacists and labs shaping the future
                            of connected healthcare, <br className="hidden sm:block" />
                            where your facility becomes part of a trusted network designed to reach more patients.
                        </p>
                    </div>

                    {/* Profile Images */}
                    <div className="flex justify-center">
                        <Image
                            src="/Group-1000006043.png"
                            alt="Group of healthcare professionals"
                            width={200}
                            height={48}
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 w-full mx-auto">
                        {submitError && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                {submitError}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <Input
                                    type="text"
                                    name="fullName"
                                    placeholder="Your Full Name *"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    className={`bg-[#272EA726] text-[#272EA7] backdrop-blur-sm border-[#272EA726] rounded-lg h-12 w-full placeholder:text-[#272EA799] ${
                                        errors.fullName ? "border-red-500 ring-red-500" : ""
                                    }`}
                                    disabled={isSubmitting}
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                                )}
                            </div>

                            <div className="space-y-1">
                                <Input
                                    type="text"
                                    name="facilityName"
                                    placeholder="Facility Name *"
                                    value={formData.facilityName}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    className={`bg-[#272EA726] text-[#272EA7] backdrop-blur-sm border-[#272EA726] rounded-lg h-12 w-full placeholder:text-[#272EA799] ${
                                        errors.facilityName ? "border-red-500 ring-red-500" : ""
                                    }`}
                                    disabled={isSubmitting}
                                />
                                {errors.facilityName && (
                                    <p className="text-red-500 text-xs mt-1">{errors.facilityName}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Professional Email *"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    className={`bg-[#272EA726] text-[#272EA7] backdrop-blur-sm border-[#272EA726] rounded-lg h-12 w-full placeholder:text-[#272EA799] ${
                                        errors.email ? "border-red-500 ring-red-500" : ""
                                    }`}
                                    disabled={isSubmitting}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div className="space-y-1">
                                <div className={`${errors.phone ? 'react-tel-input--error' : ''}`}>
                                    <PhoneInput
                                        country="us"
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        placeholder="Phone Number (Optional)"
                                        disabled={isSubmitting}
                                        containerClass="w-full react-tel-input"
                                        inputClass="w-full"
                                        buttonClass="react-tel-input__flag-dropdown"
                                        dropdownClass="font-poppins text-sm"
                                    />
                                </div>
                                {errors.phone && (
                                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-1">
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                className={`bg-[#272EA726] text-[#272EA7] backdrop-blur-sm border-[#272EA726] rounded-lg h-12 w-full px-3 appearance-none cursor-pointer disabled:opacity-50 ${
                                    errors.role ? "border-red-500 ring-red-500" : ""
                                }`}
                                disabled={isSubmitting}
                            >
                                <option value="">Select Your Role *</option>
                                <option value="pharmacy">Pharmacy</option>
                                <option value="lab">Laboratory</option>
                            </select>
                            {errors.role && (
                                <p className="text-red-500 text-xs mt-1">{errors.role}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || !isFormValid()}
                            className="bg-[#272EA7] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 mx-auto w-full max-w-[400px] hover:bg-[#1e2495] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Joining Waitlist...
                                </>
                            ) : (
                                "Join the Waitlist"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WaitListComponent;