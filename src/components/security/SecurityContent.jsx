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

const SecurityData = [
  {
    id: "p1",
    header: "Introduction",
    isHeader: false,
    description:
      "Protecting patients and providing information is central to our mission. We work with sensitive health data, so security is built into every layer of our platform. Our goal is simple. You should always feel confident that your information is safe with us.",
  },
  {
    id: "p2",
    isHeader: true,
    header: "What we Protect",
    isList: true,
    List: (
      <BulletCategoryLabel
        points={whatWeProtect}
        className="flex flex-col gap-5"
      />
    ),
  },
  {
    id: "p3",
    isHeader: true,
    header: "How we Secure Data",
    description:
      "We store files encrypted with unique digital keys. Keys are rotated regularly to strengthen protection. Sensitive database fields such as names and phone numbers are encrypted.",
    isList: true,
    List: (
      <DashedCategoryLabel
        points={howWeSecureData}
        className="flex flex-col gap-5 mb-4"
      />
    ),
  },
  {
    id: "p4",
    isHeader: true,
    header: "Conclusion",
    description:
      "At Cosmicforge HealthNet, your health data stays encrypted, restricted to the right people, and tracked at every step. Security is not an option. It is a commitment.",
  },
];

function SecurityContent() {
  const HeaderStyle = "mt-5 text-2xl font-bold pb-2";

  return (
    <section className="max-w-[1100px] mx-auto py-10 px-4 xl:px-0">
      <div>
        {/* Refund Policy */}
        <LegalDocumentContainer
          title="Security Policy"
          sections={SecurityData}
        />
      </div>
    </section>
  );
}

export default SecurityContent;
