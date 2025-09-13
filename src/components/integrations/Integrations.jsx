import React from "react";
import { BulletCategoryLabel, Description } from "../shared/LegalDocument";
import { LegalDocumentContainer } from "../shared/LegalDocumentContainer";

// Data for current integrations
const CurrentIntegrationsPoints = [
  {
    id: 1,
    title: "Google Calendar",
    description:
      "syncs with your appointments so you never miss a consultation. Patients receive reminders, and doctors manage availability in one place.",
  },
  {
    id: 2,
    title: "Google Meet",
    description:
      "supports video consultations and follow-ups. You meet your doctor in a secure environment without needing extra software.",
  },
  {
    id: 3,
    title: "WhatsApp",
    description:
      "supports direct messaging for updates, reminders, and quick communication.",
  },
  {
    id: 4,
    title: "Zoom",
    description:
      "supports video sessions for group consultations, multidisciplinary meetings, and extended care discussions.",
  },
  {
    id: 5,
    description:
      "We also have integrations with HMOs, eCommerce stores, and hospitals.",
  },
];

const IntegrationsData = [
  {
    id: "overview",
    header: "Integration Overview",
    subDescription: [
      {
        description:
          "Cosmicforge HealthNet connects you with trusted tools to keep your healthcare journey simple and organized. We integrate directly with platforms you already use, and every connection is secure, reliable, and designed to support better operations.",
      },
      {
        description:
          "Our goal is to remove friction from healthcare workflows. Patients can stay on track with their care, while doctors and other healthcare providers manage their schedules with precision. Our process is secure and compliant with healthcare standards.",
      },
    ],
  },
  {
    id: "current-integrations",
    header: "Our Current Integrations",
    isList: true,
    List: (
      <BulletCategoryLabel
        points={CurrentIntegrationsPoints}
        className="flex flex-col gap-5"
      />
    ),
  },
  {
    id: "commitment",
    header: "Our Integration Philosophy",
    description:
      "We select integrations that support both patient care and professional efficiency, and we continue to expand them to match the changing needs and demands of users. Each connection has been tested for security and ease of use to make healthcare accessible, reliable, and efficient for everyone.",
  },
];

function IntegrationsContent() {
  return (
    <section className="max-w-[1100px] mx-auto py-10 px-4 xl:px-0">
      <div>
        <LegalDocumentContainer
          title="Integrations"
          sections={IntegrationsData}
        />
      </div>
    </section>
  );
}

export default IntegrationsContent;
