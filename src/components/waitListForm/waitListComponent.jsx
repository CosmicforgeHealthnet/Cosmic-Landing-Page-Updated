"use client"
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { CheckCircle, Loader2, X } from "lucide-react";

const WaitListComponent = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        facilityName: "",
        role: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (error) setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        // Basic validation
        if (!formData.fullName || !formData.email || !formData.facilityName) {
            setError("Please fill in all required fields");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('https://backend-health-19nr.onrender.com/lab/waitlist/join', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    facilityName: formData.facilityName
                }),
            });

            const data = await response.json();

            if (data.success) {
                setShowSuccess(true);
                // Reset form
                setFormData({
                    fullName: "",
                    email: "",
                    facilityName: "",
                    role: ""
                });
            } else {
                setError(data.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeSuccess = () => {
        setShowSuccess(false);
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 relative"
            style={{
                background:
                    "radial-gradient(47.91% 47.91% at 25.26% 52.09%, #FFFFFF 0%, #CBD5FF 100%)",
            }}
        >
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
                            <div className="text-center whitespace-nowrap">
                                Digitize Your Facility. Grow With Us. Strengthen Your Impact.
                            </div>
                            <div className="flex justify-center">
                                <span className="whitespace-nowrap translate-x-20">
                                    Let's Build the Future of Healthcare Together!
                                </span>
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
                            of connected healthcare, <br />
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
                    <div className="space-y-4 w-full mx-auto">
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                type="text"
                                name="fullName"
                                placeholder="Your Full Name *"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="bg-[#272EA726] text-[#272EA7] backdrop-blur-sm border-[#272EA726] rounded-lg h-12 w-full placeholder:text-[#272EA799]"
                                disabled={isSubmitting}
                            />
                            <Input
                                type="text"
                                name="facilityName"
                                placeholder="Facility Name *"
                                value={formData.facilityName}
                                onChange={handleInputChange}
                                className="bg-[#272EA726] text-[#272EA7] backdrop-blur-sm border-[#272EA726] rounded-lg h-12 w-full placeholder:text-[#272EA799]"
                                disabled={isSubmitting}
                            />
                        </div>

                        <Input
                            type="email"
                            name="email"
                            placeholder="Professional Email *"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-[#272EA726] text-[#272EA7] backdrop-blur-sm border-[#272EA726] rounded-lg h-12 w-full placeholder:text-[#272EA799]"
                            disabled={isSubmitting}
                        />

                        {/*<select*/}
                        {/*    name="role"*/}
                        {/*    value={formData.role}*/}
                        {/*    onChange={handleInputChange}*/}
                        {/*    className="bg-[#272EA726] text-[#272EA7] backdrop-blur-sm border-[#272EA726] rounded-lg h-12 w-full px-3 appearance-none cursor-pointer disabled:opacity-50"*/}
                        {/*    disabled={isSubmitting}*/}
                        {/*>*/}
                        {/*    <option value="">Select Your Role</option>*/}
                        {/*    <option value="pharmacist">Pharmacist</option>*/}
                        {/*    <option value="lab-technician">Lab Technician</option>*/}
                        {/*    <option value="facility-manager">Facility Manager</option>*/}
                        {/*    <option value="healthcare-admin">Healthcare Administrator</option>*/}
                        {/*    <option value="other">Other Healthcare Professional</option>*/}
                        {/*</select>*/}

                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitListComponent;