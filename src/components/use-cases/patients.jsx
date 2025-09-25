// @ts-nocheck

import React from "react";
import PageHeader from "../shared/Pageheader";
import Link from "next/link";

const ForPatients = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="For Patients"
        gradient="from-teal-400 via-sky-400 to-indigo-400"
      />

      <section className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 py-10 md:py-14">
        <p className="text-gray-700 text-lg leading-7 mb-6">
          As a patient, we connect you to trusted healthcare providers remotely.
          Appointments are booked with a few clicks, and consultations take
          place securely. Every patient profile is comprehensive and includes
          history, hospitalizations, vaccinations, and prescriptions. This means
          your doctor always has the right information for your care.
        </p>

        <p className="text-gray-700 text-lg leading-7 mb-6">
          We have all your test results and prescriptions available for you in
          one place to minimize confusion and cases of missed treatments. You
          can also directly interact with labs and doctors at any given time.
        </p>

        <p className="text-gray-700 text-lg leading-7 mb-6">
          Your safety is a top priority. We use advanced encryption and strict
          compliance measures to protect sensitive information. Patients
          traveling for medical procedures are also supported through our
          partnership with tour guides. Your full journey, from departure to
          recovery, is tracked for clarity and peace of mind.
        </p>

        <p className="text-gray-700 text-lg leading-7">
          With Cosmicforge HealthNet, you can experience healthcare that is
          accessible, organized, and reliable.
        </p>
        <div className="text-center">
          <Link
            target="_blank"
            href="https://dashboard.cosmicforge-healthnet.com/auth/register?user_type=patient"
            className="inline-block px-6 py-3 bg-primary text-white font-Supreme-Medium rounded-full shadow-md hover:bg-primary/90 transition-colors duration-300"
          >
            Join as a Patient
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ForPatients;
