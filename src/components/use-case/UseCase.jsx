import React from "react";
import {
  BulletCategoryLabel,
  DashedCategoryLabel,
  Description,
  Header,
} from "../shared/LegalDocument";
import {
  howWeSecureData,
  userResponsibilities,
  whatWeProtect,
} from "@/data/TermsAndConditions";
import { LegalDocumentContainer } from "../shared/LegalDocumentContainer";

const UseCasesData = [
  {
    id: "introduction",
    header: "Platform Overview",
    description:
      "Cosmicforge HealthNet connects every part of the healthcare process. Patients, doctors, labs, pharmacies, and medical tour partners work on one secure platform. Each role has tools designed for efficiency, trust, and better outcomes. We focus on practical workflows that make care accessible and reliable.",
  },
  {
    id: "doctors",
    header: "For Doctors",
    subDescription: [
      {
        description:
          "As a doctor, you can use our platform to manage patients with less administrative work. Every patient has a comprehensive profile with medical history, lab results, and prescriptions. This reduces repeated questions and shortens consultation times.",
      },
      {
        description:
          "You can consult from anywhere using either video, audio, or chat while maintaining full visibility of patient information. You can order lab tests and prescriptions directly through the system, and your patients get to receive their results without delay, and share updates with you as a doctor instantly.",
      },
      {
        description:
          "Our platform's AI-driven features assist with identifying patterns, improving diagnostic accuracy, and reducing errors. We designed our platform to support efficiency without losing the human side of care.",
      },
    ],
  },
  {
    id: "patients",
    header: "For Patients",
    subDescription: [
      {
        description:
          "As a patient, we connect you to trusted healthcare providers remotely. Appointments are booked with a few clicks, and consultations take place securely. Every patient profile is comprehensive and includes history, hospitalizations, vaccinations, and prescriptions. This means your doctor always has the right information for your care.",
      },
      {
        description:
          "We have all your test results and prescriptions available for you in one place to minimize confusion and cases of missed treatments. You can also directly interact with labs and doctors at any given time.",
      },
      {
        description:
          "Your safety is a top priority. We use advanced encryption and strict compliance measures to protect sensitive information. Patients traveling for medical procedures are also supported through our partnership with tour guides. Your full journey, from departure to recovery, is tracked for clarity and peace of mind.",
      },
      {
        description:
          "With Cosmicforge HealthNet, you can experience healthcare that is accessible, organized, and reliable.",
      },
    ],
  },
  {
    id: "labs",
    header: "For Labs",
    subDescription: [
      {
        description:
          "Lab facilities get connected to patients through our seamless workflows. Doctors can send test requests digitally to patients, and patients can send them to labs without delay. The result entry is straightforward, and different roles are defined for accuracy and accountability.",
      },
      {
        description:
          "Once results are reviewed, you can securely upload them to the patient's profile, where they will be easily accessible to the patient and doctors. This helps to reduce the turnaround time and prevent communication errors.",
      },
      {
        description:
          "With Cosmicforge HealthNet, you gain a clear structure for managing requests, results, and reporting, all while maintaining data security.",
      },
    ],
  },
  {
    id: "pharmacies",
    header: "For Pharmacies",
    subDescription: [
      {
        description:
          "We help process prescriptions from patients who share or upload them through our platform. The orders are clear and can be easily tracked from start to finish. When medications are ready, you can notify the patients and offer delivery or pickup options where necessary.",
      },
      {
        description:
          "At Cosmicforge HealthNet, we aim to improve the synergy between healthcare providers and users in one system.",
      },
    ],
  },
  {
    id: "ai-systems",
    header: "AI Systems",
    subDescription: [
      {
        description:
          "We leverage AI technology to improve healthcare outcomes. Our AI supports doctors with clinical decision-making by highlighting possible conditions based on the patients' history and current symptoms.",
      },
      {
        description:
          "Its predictive models identify health risks earlier, which allows for timely interventions. The remote monitoring tools provide real-time updates on vital signs, helping doctors track chronic conditions and/or post-surgery recovery.",
      },
      {
        description:
          "For patients, our AI systems power a smart symptom checker to help pre-diagnose conditions and offer referrals to doctors on our platform. We designed our AI to support doctors, not replace them.",
      },
      {
        description:
          "Every feature respects the clinical judgment of healthcare delivery. Data security and compliance guide all implementations, and AI is used to reduce errors, improve efficiency, and give both patients and doctors confidence in every interaction.",
      },
    ],
  },
  {
    id: "tour-guides",
    header: "Partner Tour Guides",
    subDescription: [
      {
        description:
          "We are partnered with tour guides to support patients seeking specialized care overseas. Our partners help secure hospital appointments, coordinate travel, and manage clinical procedures abroad.",
      },
      {
        description:
          "They monitor recovery progress and provide updates to our patients. This ensures patients receive consistent support from their departure to their return.",
      },
      {
        description:
          "Our Partners make international healthcare journeys less stressful and more transparent.",
      },
    ],
  },
  {
    id: "shop",
    header: "Shop (eCommerce Stores)",
    subDescription: [
      {
        description:
          "As a vendor, you are not left out. All you need to do is register and list your healthcare-related products and services. Our patients and healthcare professionals can access items directly through our platform.",
      },
      {
        description:
          "The listable products range from medical devices and wellness tools to pharmacy essentials. Our shop functions like a standard e-commerce marketplace, with secure payments and reliable vendor verification.",
      },
      {
        description:
          "We ensure a trusted space for patients and healthcare professionals to find products that support treatment and recovery. As a vendor, you benefit from the visibility within our healthcare-focused audience, while patients gain access to quality products.",
      },
    ],
  },
];
function UseCaseComponent() {
  const HeaderStyle = "mt-5 text-2xl font-bold pb-2";

  return (
    <section className="max-w-[1100px] mx-auto py-10 px-4 xl:px-0">
      <div>
        {/* Refund Policy */}
        <LegalDocumentContainer title="Use Case" sections={UseCasesData} />
      </div>
    </section>
  );
}

export default UseCaseComponent;
