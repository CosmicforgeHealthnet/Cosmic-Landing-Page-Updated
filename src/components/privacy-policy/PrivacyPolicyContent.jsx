import React from "react";
import {
  AlphaCategoryLabel,
  BulletCategoryLabel,
  DashedCategoryLabel,
  DecimalCategoryLabel,
  Description,
  Header,
} from "../shared/LegalDocument";
import {
  BreachNotificationContent,
  DataBreachSteps,
  DataUsePoints,
  HowWeUseSurveyInformation,
  InformationWeCollectPoints,
  PersonalDataDisclosure,
  TechUsedForAutoDataCollection,
  ThirdPartyUndertakings,
} from "@/data/privacyPolicy";
import { LegalDocumentContainer } from "../shared/LegalDocumentContainer";

const PrivacyPolicyData = [
  {
    id: "data-collection",
    header: "How we use your data",
    description:
      "The information we collect or that you provide on or through our Sites or by using our services includes:",
    isList: false,
    // List: (
    //   <BulletCategoryLabel
    // points={DataUsePoints}
    //     className="flex flex-col gap-5"
    //   />
    // ),
    subDescription: [
      {
        description: `Data that may personally identify you, including your name, postal address, billing address, shipping address, e-mail address, home, work and mobile telephone numbers, age, date of birth, social security number, insurance policy number, physical characteristics that may personally identify you, sexual orientation, IP address, bank account number, credit or debit card number (for payment purposes only), national origin, ancestry, veteran or military status, medical conditions, race, citizenship, information about any physical or mental disabilities you may have, information related to your religious or philosophical beliefs, political opinions, information regarding your gender at birth and how you currently express your gender identity, information related to your sex life, such as pregnancy, child birth and related medical conditions, any history of criminal convictions, biometric information (such as fingerprints, exercise data, psychological characteristics, face prints, gait patterns, genetics, behavioral characteristics, voice, sleep data, and iris/retina scans), and genetic information (including familial genetic information) (collectively, “Personal Data”);`,
      },
      {
        description: `Information that you provide by filling in forms on our Sites, such as appointment request forms or product ordering forms. It also includes information you provide when you register to use our Sites, purchase products, or use services available through the Sites or facilities. We may also ask you for information when you report a problem with our Sites. Some forms collect sensitive information, such as health information, necessary for us to provide our services to you;.`,
      },
      {
        description: `Records and copies of your correspondence (including email addresses), if you contact us;`,
      },
      {
        description: `Your responses to surveys that we might ask you to complete for research, development, and marketing purposes; and`,
      },
      {
        description: `Details of transactions you carry out through our Sites and of the fulfillment of your orders. You may be required to provide financial information before placing an order through our Sites.`,
      },
      {
        description: `You also may provide information to be published or displayed (hereinafter, "Posted") on public areas of the Sites or transmitted to other users of the Sites or third parties (collectively, "User Contributions"). Your User Contributions are Posted on and transmitted to others at your own risk. Although we limit access to certain pages, please be aware that no security measures are perfect or impenetrable. Additionally, we cannot control the actions of other users of the Sites with whom you may choose to share your User Contributions. Therefore, we cannot and do not guarantee that your User Contributions will not be viewed by unauthorized persons.`,
      },
    ],
  },
  {
    id: "automatic-collection",
    header: "Information we collect automatically",
    subDescription: [
      {
        description:
          "We collect information about you automatically as you navigate through or use our Sites. Information collected automatically may include usage details, IP addresses, session replay and recording technology (recording your movements, clicks, etc. on our Sites), and information collected through cookies, web beacons, pixels tags, and other tracking technologies",
      },
      {
        description:
          "As you navigate through and interact with our Sites, we may use automatic data collection technologies (such as session replay and tracking technologies referred to above) to collect certain information about your equipment, browsing actions, and patterns, specifically:",
      },
    ],
    isList: true,
    List: (
      <BulletCategoryLabel
        points={InformationWeCollectPoints}
        className="flex flex-col gap-5"
      />
    ),
  },
  {
    id: "data-collection-tech",
    header: "Technologies we use for automatic data collection",
    isList: true,
    List: (
      <>
        <BulletCategoryLabel
          points={TechUsedForAutoDataCollection}
          className="flex flex-col gap-5"
        />
        <Description
          description="Do Not Track Signals. Some web browsers permit you to broadcast a signal to websites and online services indicating a preference that they 'do not track' your online activities. At this time, we do not honor such signals. However, we do not track your online activities on or across third party websites or other online services for any purpose, including advertising, unless you specifically opt-in to a program or campaign that authorizes such tracking."
          className="pb-2 mt-4"
        />
      </>
    ),
  },
  {
    id: "surveys",
    header: "Surveys",
    description:
      "We occasionally survey visitors to our site. The information from these surveys is used in aggregated, de-identified form to help us understand the needs of our visitors so that we can improve our site. The information may be shared with third parties with whom we have a business relationship. We generally do not ask for information in surveys that would personally identify you; if we do request contact information for follow-up, you may decline to provide it. If survey respondents provide personal information (such as an email address) in a survey, it is shared only with those people who need to see it to respond to the question or request, or with third parties who perform data management services for our site. Those third parties have agreed to keep all data from surveys confidential.",
  },
  {
    id: "info-usage",
    header: "How we use the information we collect",
    description:
      "In addition to the uses described above, we use the information we collect for things like:",
    isList: true,
    List: (
      <BulletCategoryLabel
        points={HowWeUseSurveyInformation}
        className="flex flex-col gap-5"
      />
    ),
  },
  {
    id: "data-protection",
    header: "Data Protection",
    description:
      "We will never share your information with any third parties these includes Medical records. We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.",
  },
  {
    id: "sharing-info",
    header: "Sharing your personal information",
    subDescription: [
      {
        description:
          "We may share the information we collect about you with third parties who we have engaged to help us provide the Site, as well as the products and services available through our Site. Your Personal Data may be disclosed to affiliates, contractors, service providers, and other third parties we use to support our business; any such use of Personal Data that includes protected health information and any authorization you have provided.",
      },
      {
        description:
          "The services provided by these organizations include providing IT and infrastructure support services, advertising, marketing, and payment processing services. Advertising and marketing partners may receive and use your Personal Data to assist us with our advertising and marketing efforts. In each case, we will ensure that these third parties have agreed to safeguard your data. We may use a third-party ad network provider to help present advertisements on this website.",
      },
      {
        description:
          "We may provide third parties with aggregate statistics about our visitors, traffic patterns, and related site information. These data reflect site-usage patterns gathered during visits to our website each month, but they do not contain information that personally identifies you unless you have given us permission to share that information.",
      },
      {
        description: "We may also disclose your Personal Data:",
      },
    ],
    isList: true,
    List: (
      <BulletCategoryLabel
        points={PersonalDataDisclosure}
        className="flex flex-col gap-5"
      />
    ),
  },
  {
    id: "cookie-policy",
    header: "Cookie Policy",
    description:
      'Our Site may use "cookies" to enhance User experience. These are for features like AI-driven analytics, personalized notifications and dynamic content delivery, including user control over cookie preferences. User\'s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.',
  },
  {
    id: "consent",
    header: "Consent to terms",
    description:
      "By using this Site, you signify your acceptance of this policy. And also consent to Telemedicine services through Ai diagnostics, AR assistance and VR therapy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.",
  },
  {
    id: "healthcare-data",
    header: "Healthcare Data Handling Policy",
    description:
      "Personal and medical Data may be transferred or disclosed to Third Parties (Medical practitioners) including but not limited to Doctors, medical contractors, cloud service providers, hospitals (public and private) where the Third Party provides adequate safeguards to protect the Personal Data and the privacy rights of Data Subjects. Such data may also be stored using Blockchain technology. Any transfer of Personal Data must be consistent with this Policy.",
    subDescription: [
      {
        description:
          "There shall be an undertaking on the part of the Third parties that;",
      },
    ],
    isList: true,
    List: (
      <DecimalCategoryLabel
        points={ThirdPartyUndertakings}
        className="flex flex-col gap-5"
      />
    ),
  },
  {
    id: "data-breach",
    header: "Data Breach Notification Policy",
    subDescription: [
      {
        description:
          'In line with Nigeria Data Protection Act 2023 (the NDPA) which has defined Personal data breach as "a breach of security of a data controller or data processor leading to or likely to lead to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data transmitted, stored, or otherwise processed."',
      },
      {
        description:
          "Example of these breach includes but no limited to, Confidentiality breach, integrity breach (alteration of personal data), availability breach (accidental destruction, deletion of personal data by unauthorized parties)",
      },
      {
        description:
          "The following steps shall be taking in the event of a Breach;",
      },
    ],
    // isList: true,
    // List: (
    //   <>
    //     <DecimalCategoryLabel
    //       points={DataBreachSteps}
    //       className="flex flex-col gap-5"
    //     />
    //     <div className="mt-6">
    //       <Header
    //         className="font-semibold text-xl pt-2 pb-2"
    //         header="Data Breach Notification Content"
    //       />
    //       <Description
    //         description="The content or style of reporting a breach notice must contain"
    //         className="pb-2"
    //       />
    //       <AlphaCategoryLabel
    //         points={BreachNotificationContent}
    //         className="flex flex-col gap-2"
    //       />
    //       <Description
    //         description="It is key that the contact point should be easily accessible, and allow for a quick response from the data controller or its agents to inquiries by affected data subjects, especially as every 'minute' is key for personal data breach remediation."
    //         className="pb-2 pt-2"
    //       />
    //     </div>
    //   </>
    // ),
  },
];

function PrivacyPolicyContent() {
  return (
    <section className="max-w-[1100px] mx-auto py-10 px-4 xl:px-0">
      <div>
        <LegalDocumentContainer
          title="Privacy Policy"
          sections={PrivacyPolicyData}
        />
      </div>
    </section>
  );
}

export default PrivacyPolicyContent;
