"use client";

import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import PageHeader from "@/components/shared/Pageheader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { contactFormSchema } from "@/app/schema/contactFrom";
import Image from "next/image";

const ContactUsComponent = ({ isHomeScreen }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState();
  const [submitStatus, setSubmitStatus] = useState(
    "idle" | "success" | "error"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      role: "",
      subject: "",
      message: "",
    },
  });

  // return error to default state (false)
  useEffect(() => {
    isError && setTimeout(() => setIsError(false), 5000);
  }, [isError]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitStatus("success");
        setIsSubmitted(true);
        setStatusMessage("Your message has been sent successfully.");
        form.reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.log(error);
      setSubmitStatus("error");
      setIsError(true);
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "support@cosmicforge-healthnet.com",
      subDetails: "We'll respond within 24 hours",
      color: "from-blue-500 to-blue-600",
    },
    // {
    //   icon: <Phone className="w-6 h-6" />,
    //   title: "Phone",
    //   details: "+1 (555) 123-4567",
    //   //  subDetails: "Mon-Fri, 8am-6pm EST",
    //   color: "from-green-500 to-green-600",
    // },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "Plot 8, Providence Street, Lekki Phase 1",
      subDetails: "Lagos State, Nigeria.",
      color: "from-purple-500 to-purple-600",
    },
    // {
    //    icon: <Clock className="w-6 h-6" />,
    //    title: "Support Hours",
    //    details: "24/7 Emergency Support",
    //    subDetails: "Live chat available",
    //    color: "from-orange-500 to-orange-600",
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-4 py-12 lg:py-20">
        {/* Header */}
        {/* Display header is component is used in the homeScreen */}
        {isHomeScreen && (
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Get In <span className="text-primary">Touch</span>
            </h2>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <Card
            className=" border-gray-100"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">
                Send us a message
              </CardTitle>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </CardHeader>

            <CardContent>
              {isSubmitted ? (
                <div
                  className="text-center py-12"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your full name"
                                {...field}
                                className="rounded-xl border-gray-200 focus:border-[#272EA7] focus:ring-[#272EA7]/20"
                              />
                            </FormControl>
                            <FormMessage className={"text-red-500"} />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Enter your email"
                                {...field}
                                className="rounded-xl border-gray-200 focus:border-[#272EA7] focus:ring-[#272EA7]/20"
                              />
                            </FormControl>
                            <FormMessage className={"text-red-500"} />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>I am a *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="rounded-xl border-gray-200 focus:border-[#272EA7] focus:ring-[#272EA7]/20">
                                  <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-white">
                                <SelectItem value="Patient">Patient</SelectItem>
                                <SelectItem value="Doctor">Doctor</SelectItem>
                                <SelectItem value="Laboratory">
                                  Laboratory
                                </SelectItem>
                                <SelectItem value="Pharmacy">
                                  Pharmacy
                                </SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className={"text-red-500"} />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="What's this about?"
                                {...field}
                                className="rounded-xl border-gray-200 focus:border-[#272EA7] focus:ring-[#272EA7]/20"
                              />
                            </FormControl>
                            <FormMessage className={"text-red-500"} />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us more about your inquiry..."
                              className="rounded-xl border-gray-200 focus:border-[#272EA7] focus:ring-[#272EA7]/20 resize-none"
                              rows={6}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className={"text-red-500"} />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-[#272EA7] hover:bg-[#1f2495] text-white rounded-xl py-6 font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {/* Error Message */}
                    {isError && (
                      <div className="inline-flex w-full items-center gap-2 bg-red-50 text-red-600 border-red-200 border-1 rounded-md px-4 py-1.5 text-sm font-medium mb-4">
                        {/* <span className="w-2 h-2 bg-red-600 rounded-full"></span> */}
                        There was an error while trying to submit. <br /> Please
                        try again later
                      </div>
                    )}
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="mx-auto w-full"></div>
            <Image
              quality={80}
              loading="lazy"
              src={"/contactUs/doctor.png"}
              width={600}
              height={400}
              className="max-w-[600px] w-[400px] md:w-[600px]"
            />

            {/* <div
              className="space-y-6"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className=" border-gray-100 hover:border-[#272EA7] transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={300 + index * 100}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-[#272EA7] flex items-center justify-center text-white `}
                      >
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-700 font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-gray-500">
                          {info.subDetails}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div> */}
          </div>
        </div>
        {/* Emergency Notice */}
        <Alert
          className="border-red-200 bg-red-50 w-full mt-10"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="700"
        >
          <Phone className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-700">
            <div className="space-y-2">
              <h3 className="font-semibold text-red-900">Medical Emergency?</h3>
              <p className="text-sm">
                If you're experiencing a medical emergency, please don't use
                this contact form. Instead:
              </p>
              <div className="space-y-1 text-sm">
                <p>• Call emergency services</p>
                <p>• Visit your nearest emergency room</p>
                <p>• Contact your primary care physician</p>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default ContactUsComponent;
