"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from "lucide-react";
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

const formSchema = z.object({
   name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
   }),
   email: z.string().email({
      message: "Please enter a valid email address.",
   }),
   userType: z.enum(["patient", "doctor", "lab", "pharmacy", "other"], {
      required_error: "Please select your role.",
   }),
   subject: z.string().min(5, {
      message: "Subject must be at least 5 characters.",
   }),
   message: z.string().min(10, {
      message: "Message must be at least 10 characters.",
   }),
});

const ContactUsComponent = () => {
   const [isSubmitted, setIsSubmitted] = useState(false);

   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: "",
         email: "",
         userType: "",
         subject: "",
         message: "",
      },
   });

   const onSubmit = async (values) => {
      try {
         // Simulate API call
         await new Promise((resolve) => setTimeout(resolve, 2000));

         console.log("Form submitted:", values);
         setIsSubmitted(true);

         // Reset form after 3 seconds
         setTimeout(() => {
            setIsSubmitted(false);
            form.reset();
         }, 3000);
      } catch (error) {
         console.error("Error submitting form:", error);
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
      {
         icon: <Phone className="w-6 h-6" />,
         title: "Phone",
         details: "+1 (555) 123-4567",
         //  subDetails: "Mon-Fri, 8am-6pm EST",
         color: "from-green-500 to-green-600",
      },
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
         <PageHeader
            title="Get in"
            styledTitle="Touch"
            subtitle="Have questions about our healthcare platform? We're here to help you navigate your healthcare journey."
         />

         <div className="max-w-[1100px] mx-auto px-4 py-12 lg:py-20">
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
                        Fill out the form below and we'll get back to you as soon as possible.
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
                                    name="name"
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
                                          <FormMessage />
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
                                          <FormMessage />
                                       </FormItem>
                                    )}
                                 />
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                 <FormField
                                    control={form.control}
                                    name="userType"
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
                                             <SelectContent>
                                                <SelectItem value="patient">Patient</SelectItem>
                                                <SelectItem value="doctor">Doctor</SelectItem>
                                                <SelectItem value="lab">Laboratory</SelectItem>
                                                <SelectItem value="pharmacy">Pharmacy</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                             </SelectContent>
                                          </Select>
                                          <FormMessage />
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
                                          <FormMessage />
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
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />

                              <Button
                                 type="submit"
                                 className="w-full bg-[#272EA7] hover:bg-[#1f2495] text-white rounded-xl py-6 font-semibold"
                                 disabled={form.formState.isSubmitting}
                              >
                                 {form.formState.isSubmitting ? (
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
                           </form>
                        </Form>
                     )}
                  </CardContent>
               </Card>

               {/* Contact Information */}
               <div className="space-y-8">
                  {/* Contact Cards */}
                  <div
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
                                    <p className="text-gray-700 font-medium mb-1">{info.details}</p>
                                    <p className="text-sm text-gray-500">{info.subDetails}</p>
                                 </div>
                              </div>
                           </CardContent>
                        </Card>
                     ))}
                  </div>

                  {/* Emergency Notice */}
                  <Alert
                     className="border-red-200 bg-red-50"
                     data-aos="fade-up"
                     data-aos-duration="600"
                     data-aos-delay="700"
                  >
                     <Phone className="h-4 w-4 text-red-600" />
                     <AlertDescription className="text-red-700">
                        <div className="space-y-2">
                           <h3 className="font-semibold text-red-900">Medical Emergency?</h3>
                           <p className="text-sm">
                              If you're experiencing a medical emergency, please don't use this
                              contact form. Instead:
                           </p>
                           <div className="space-y-1 text-sm">
                              <p>• Call emergency services: 911</p>
                              <p>• Visit your nearest emergency room</p>
                              <p>• Contact your primary care physician</p>
                           </div>
                        </div>
                     </AlertDescription>
                  </Alert>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactUsComponent;
