import React from "react";
import {
  AllCapsDescription,
  AlphaCategoryLabel,
  BulletCategoryLabel,
  DashedCategoryLabel,
  DecimalCategoryLabel,
  Description,
  Header,
  RomanCategoryLabel,
} from "../shared/LegalDocument";
import {
  ElectronicCommunications,
  ElectronicSignaturesAct,
  IndemnityArising,
  InformedConsentConditions,
  LimitationOfLiability,
  MiscellaneousProvisions,
  ProhibitedActivities,
  RemoteHealthcareLimitations,
  SecurityResponsibilities,
  TelemedicineServices,
  TerminationCircumstances,
  UserContentAffirmations,
} from "@/data/TermsAndConditions";

function TermsAndConditionsContent() {
  const HeaderStyle = "mt-5 text-2xl font-bold pb-2";

  return (
    <section className="max-w-[1100px] mx-auto py-10 px-4 xl:px-0">
      <div>
        {/* Terms and conditions */}
        <Header header={"Introduction"} className={HeaderStyle} />
        <Description
          description={`
          These Terms of  use  (this “Agreement”) are a legal agreement between you (“User,” “you,” or “yours”) and Cosmicforge Healthnet Ltd ( “Company,” “we,” “our,” or “us”) and govern you access to and use of the Platform and Service (as defined below) when used in connection with Cosmicforge and online applications and services
          `}
          className={"pb-2"}
        />
        <Description
          description="Please read these Terms of Use carefully before using the Cosmicforge Healthnet Platform (“Platform”). Patients/Clients who are under 18 years of age should review these terms and conditions with a parent or guardian. Your access to and use of the Platform by way of any Device is conditioned on your acceptance of and compliance with the provisions of this Terms of Use          "
          className={"pb-2"}
        />
        <Description
          description="By your accessing or using the Platform you agree to be bound by these Terms of Use. If you disagree with any part hereof, do not access the Platform. In addition, your use of the Platform shall be subject to any applicable regulatory guidelines or rules. All such guidelines or rules are hereby incorporated by reference into the Terms of Use."
          className={"pb-2"}
        />
        <Header header={"Definitions"} className={HeaderStyle} />
        <Description
          description={`
          The following definitions apply to this Agreement. Additional defined terms are indicated throughout.
          `}
          className={"pb-2"}
        />
        <Description
          description={`“Applicable Laws” means all state and federal laws and regulations that apply to the Service.`}
          className={"pb-2"}
        />
        <Description
          description={
            "“Assessments” means the Symptom Checker and clinical assessment tools available on the Platform."
          }
          className={"pb-2"}
        />
        <Description
          description={
            "“Provider” means physicians and other health care providers, employed ,contracted or otherwise engaged by Cosmicforge to provide healthcare services via the Platform. "
          }
          className={"pb-2"}
        />
        <Description
          description={
            "“Service” means the Symptom Checker, Assessments, and other functionality provided on or through the Platform, including integration of medical records, connection to other third party services (e.g. laboratory and pharmacy services) administrative and customer support, scheduling and payment, and other services that we may add from time to time on the Virtual Visit Service."
          }
          className={"pb-2"}
        />
        <Description
          description={
            "“Symptom Checker” means the artificial intelligence-enabled symptom checker."
          }
          className={"pb-2"}
        />
        <Description
          description={
            "“Virtual Visit Service” means the online interfaces, clinical services, and properties (including, our mobile services, websites, software) that allow you to interact with physicians and other health care providers for communication, consultations, assessments, and treatment ."
          }
          className={"pb-2"}
        />

        <AllCapsDescription
          description={
            "THIS AGREEMENT CONTAINS A MANDATORY INDIVIDUAL ARBITRATION AND CLASS ACTION AND COURT TRIAL WAIVER PROVISION THAT, AS FURTHER SET FORTH BELOW, REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN COURT TRIALS OR CLASS ACTIONS. "
          }
          className={"pb-3"}
        />
        <AllCapsDescription
          description={
            "AGREEING TO ARBITRATION IS AN IMPORTANT DECISION WHICH YOU SHOULD CAREFULLY CONSIDER. YOU MAY OPT OUT OF THE BINDING INDIVIDUAL ARBITRATION AND CLASS ACTION WAIVER AS PROVIDED BELOW.  "
          }
          className={"pb-3"}
        />
        <AllCapsDescription
          description={`COMPANY IS NOT A PROVIDER OF CLINICAL ADVICE.  BEFORE YOU TAKE ANY ACTION THAT MAY AFFECT YOUR HEALTH OR SAFETY, OR THE HEALTH OR SAFETY OF OTHERS, PLEASE CONSULT WITH A MEDICAL PROFESSIONAL.  IF YOU THINK YOU MAY HAVE A MEDICAL EMERGENCY, CALL YOUR LOCAL EMERGENCY PHONE NUMBER OR YOUR HEALTH CARE PROVIDER IMMEDIATELY.  IF YOU ARE THINKING ABOUT SUICIDE, OR IF YOU ARE CONSIDERING TAKING ACTIONS THAT MAY CAUSE HARM TO YOU OR TO OTHERS, OR IF YOU FEEL THAT YOU OR ANY OTHER PERSON MAY BE IN ANY DANGER, OR IF YOU HAVE ANY MEDICAL EMERGENCIES, CALL THE AUTHORITIES IMMEDIATELY.  THERE ALSO MAY BE OTHER NATIONAL, REGIONAL, AND STATE RESOURCES AVAILABLE TO YOU.
PLEASE DO NOT USE THE SERVICE WHILE DRIVING; THE SERVICE REQUIRES YOU TO BE ENGAGED IN A TEXT CONVERSATION WITH A PROVIDER DURING THE VIRTUAL VIST SERVICE OR TO BE INTERACTIVE.
BY ACCEPTING THIS AGREEMENT, YOU ARE ALSO AGREEING TO RECEIVE COMMUNICATIONS ELECTRONICALLY, AS FURTHER DESCRIBED BELOW.`}
          className={"pb-3"}
        />
        {/* The Service */}
        <Header header={"The Service"} className={HeaderStyle} />

        <Description
          description={`
As part of the Service, Company provides Assessments to help people to make informed health decisions.  Additionally, through the use of the Virtual Visit Service, Company enables direct interaction with physicians and other health care providers through sharing of personal health information or through virtual consultation with such physicians or health care providers, and also enables the use of other third-party services.  The Virtual Visit Service is provided through health care providers affiliated with Cosmicforge.  
Company is not a provider of clinical advice or a health care provider.
Do not use the Service if you are driving a motor vehicle.  Do not use the Service for emergency medical needs.  If you experience a medical emergency, call your local emergency phone number immediately.
`}
          className={"pb-2"}
        />
        <Header header={"Description"} className={HeaderStyle} />
        <Description
          description={`The Platform is part of an overall primary care practice. It is not a remote full-service medical practice. Your use of the Remote Healthcare Services offered through the Platform and the Platform technology (collectively the “Services”) is voluntary.`}
          className={"pb-2"}
        />
        <Description
          description={`You may seek in-person treatment at any time.
The Platform is a Remote Healthcare Service, which does not allow for an in-person physical examination by the treating Provider. The absence of an in-person physical examination may affect the Provider’s ability to diagnose any potential condition, disease, or injury and may not reveal potentially serious medical conditions. The diagnosis you receive may be limited. The Services are not intended in all cases to replace a full medical evaluation, or an in-person visit with a healthcare provider`}
          className={"pb-2"}
        />
        <Description
          description={`Your Provider may not be able to diagnose or treat you if you require an in-person physical exam, a test that requires a follow-up visit, or if you present with potential symptoms or conditions that we do not treat remotely based on our medical policies and Provider judgment.`}
          className={"pb-2"}
        />
        <Description
          description={`Providers may be limited by applicable law, regulations, policies, and standards in prescribing certain medications to you without first conducting an in-person physical examination. Providers do not prescribe controlled substances, such as those containing opioids. Providers reserve the right to deny care for actual or potential misuse of the Service.`}
          className={"pb-2"}
        />
        <Description
          description={`
The health information you provide through the Platform, and your pre-existing Cosmicforge medical record, may be the only source of information used by Providers during your evaluation and treatment through the Platform. Providers may not have access to any other information held by your non-Cosmicforge medical providers (e.g., allergies, drug reactions, etc.). Care that you receive is based on your symptoms and other information you provide or upload to the Platform or share with your Provider(s) and care team. Information you provide using the Platform must be true, accurate, and complete, and may serve as the basis of any diagnosis and treatment by your Provider. If you provide false, misleading, or incomplete information to a Provider, it may have a negative effect on your treatment and your health. If you refuse to provide requested information, you may not be considered to be under the care of the Provider and the Provider may refuse to treat you (or continue to treat you, as applicable).
`}
          className={"pb-2"}
        />
        <Description
          description={`A variety of alternative methods of medical care may be available to you, including an in-person visit. You may stop using the Services and choose one or more of these alternative modes of care at any time.`}
          className={"pb-2"}
        />
        <Description
          description={`Use of the Services may involve asynchronous communications, such as completing forms and messaging your care team, as well as direct virtual, synchronous, communications and the electronic transmission of medical information and other data between you and the Provider(s).`}
          className={"pb-2"}
        />
        <Description
          description={`As part of the Remote Healthcare Services, you may not be able to select a specific Provider. Due to emergencies, scheduling, and other circumstances, there may be times that the Services are unavailable.`}
          className={"pb-2"}
        />
        <Header header={"Emergencies"} className={HeaderStyle} />
        <Description
          description={`The Platform should not be utilized in a medical emergency. If this is a medical emergency, visit an emergency room. If you are experiencing emotional distress or a mental health crisis, please contact the National Suicide Prevention Hotline.`}
          className={"pb-2"}
        />

        <Header
          header={"Nature of Electronic Services"}
          className={HeaderStyle}
        />
        <Description
          description={`The electronic nature of the Services means that there is a greater risk to the privacy of your electronic health information relative to receiving in-person care. `}
          className={"pb-2"}
        />
        <Description
          description={`For information about the privacy and security practices as well as our information sharing practices, please read our Privacy policy.`}
          className={"pb-2"}
        />
        <Description
          description={`The information transmitted may not be sufficient (e.g. poor resolution of images) to allow for appropriate medical or healthcare decision making by the Provider. In addition, technical failures could lead to delays in evaluation or to information lost due to such technical failures.
If you are experiencing technical difficulties through the Platform, you may email us (check our contact information)`}
          className={"pb-2"}
        />
        <Description
          description={`In connection with the Service:`}
          className={"pb-2"}
        />
        {/* here */}
        <BulletCategoryLabel
          points={TelemedicineServices}
          className="flex flex-col gap-5"
        />
        <Description
          description={`All communications in either electronic or paper format from us to you will be considered to be in writing. Print or download a copy of this Informed Consent and any other electronic communication that is important to you for your records.`}
          className={"pb-2"}
        />
        <Description
          description={`By clicking on the “I Agree,” “Accept,” “Continue,” or any similar button provided in connection with this Informed consent, you indicate your intent to receive electronic communications, and such action constitutes your signature`}
          className={"pb-2"}
        />
        <Description
          description={`For additional information regarding your Platform account and electronic communications please refer to our Terms of Service.`}
          className={"pb-2"}
        />
        <Description
          description={`You acknowledge and agree that (i) your consent is being provided in connection with a transaction affecting interstate commerce that is subject to the federal Electronic Signatures in Global and National Commerce Act;`}
          className={"pb-2"}
        />
        <Description
          description={`and (ii) you and the Providers, and their affiliates, agents, representatives, suppliers, and service providers, intend that the Act apply to the fullest extent possible to validate the ability to conduct business and communicate with you by electronic means.`}
          className={"pb-2"}
        />
        {/* Additional Consents */}
        <Header header={"Additional Consents"} className={HeaderStyle} />
        <Description
          description={
            "You hereby consent to the use of telehealth to examine, consult, diagnose, or treat you."
          }
          className={"pb-2"}
        />
        <Description
          description={"You further acknowledge and agree that:"}
          className={"pb-2"}
        />
        <BulletCategoryLabel
          points={InformedConsentConditions}
          className="flex flex-col gap-5"
        />
        {/* Consent to Electronic Communications */}
        <Header
          header={"Consent to Electronic Communications"}
          className={HeaderStyle}
        />

        <Description
          description={
            "By accessing or using the Service, you are consenting for Company, the Providers (as defined below), and its and their affiliates, agents, representatives, suppliers, and service providers to send you electronic communications, including email communications, push notifications and SMS text messages about the Service.  You understand that SMS text messages and unencrypted emails are not secure and run the risk of being intercepted by unauthorized parties and you accept that risk. "
          }
        />
        <Description
          description={
            "You consent to receive communications relating to the Service in electronic form.  The communications covered by your consent may include, but are not limited to:"
          }
        />
        <RomanCategoryLabel
          points={ElectronicCommunications}
          className="flex flex-col gap-5"
        />
        <Description
          description={
            "You may not access or use certain features of the Service unless you also provide your consent to receive electronic communications.  If you wish to withdraw your consent to receive future electronic communications, you must unsubscribe from each service you have elected to receive your consent in order to completely withdraw from electronic communications.  Any withdrawal of your consent to electronic communications will be effective only after there has been a reasonable period of time to process such withdrawal request.You agree to promptly update your contact information, including your email address, if it changes, by providing such updated information through your online User Account or by email us."
          }
        />
        <Description
          description={
            "In order to access your electronic communications, you must have a computer, mobile device, or other device with internet-browsing capabilities, an internet connection and a means to print or store notices and information through your browser software.  Such technology requirements may change from time to time.  Any changes in such requirements that may affect your access to electronic communications related to your access to and use of the "
          }
        />
        <Description
          description={
            "Services will be posted on the applicable websites or mobile services.  You should periodically check for such posted information."
          }
        />
        <Description
          description={
            "Upon your request, you may receive a paper copy of any communication that was provided to you electronically.  If you would like a paper copy of any such communication, please email us.  "
          }
        />
        <Description
          description={"There will be no charge for any paper copy."}
        />
        <Description
          description={
            "All communications in either electronic or paper format from us to you will be considered to be in writing.  You should print or download a copy of this consent, this Agreement, and any other electronic communication that is important to you for your records."
          }
        />
        <Description
          description={
            "You acknowledge that by clicking on the “I Agree,” “Register,” “Continue,” or any similar button provided in connection with this Agreement, you are indicating your intent to sign up for electronic communications, and that such action shall constitute your signature."
          }
        />
        <Description description={"You acknowledge and agree that"} />
        <RomanCategoryLabel
          points={ElectronicSignaturesAct}
          className="flex flex-col gap-5"
        />

        {/* Brief Summary */}
        <Header header={"Brief Summary"} className={HeaderStyle} />
        <Description
          description={
            "Please read the full Informed Consent for important details."
          }
          className={"pb-2"}
        />
        <BulletCategoryLabel
          points={RemoteHealthcareLimitations}
          className="flex flex-col gap-5"
        />

        {/* No Clinical Advice */}
        <Header header={"No Clinical Advice"} className={HeaderStyle} />
        <AllCapsDescription
          description={
            'ALL OF THE MATERIAL PROVIDED THROUGH THE SERVICE (except when receiving clinical services from a Provider through the Virtual Visit Service), INCLUDING TEXT, GRAPHICS, PHOTOGRAPHS, IMAGES, MESSAGES, ARTICLES, POSTS, SIMULATED VIRTUAL CONVERSATIONS, FORUM POSTINGS, AND ANY OTHER MATERIALS, ARE FOR INFORMATIONAL PURPOSES ONLY AND ARE NOT A SUBSTITUTE FOR PROFESSIONAL CLINICAL ADVICE OR TREATMENT (TOGETHER, "MATERIALS").'
          }
          className={"pb-3"}
        />
        <AllCapsDescription
          description={
            "EVEN WHEN ASSESSMENTS ARE BASED ON CLINICAL PROTOCOLS, SUCH ASSESSMENTS DO NOT CONSTITUTE CLINICAL CARE, ADVICE OR DIAGNOSIS. ALWAYS SEEK THE ADVICE OF YOUR PHYSICIAN OR OTHER QUALIFIED HEALTH PROVIDER WITH ANY QUESTIONS YOU MAY HAVE REGARDING YOUR HEALTH. NEVER DISREGARD PROFESSIONAL CLINICAL ADVICE OR DELAY IN SEEKING IT BECAUSE OF ANY INFORMATION PROVIDED TO YOU THROUGH THE SERVICE."
          }
          className={"pb-3"}
        />
        <AllCapsDescription
          description={
            "ADDITIONALLY, COMPANY DOES NOT PROMISE ANY PARTICULAR RESULTS WITH REGARDS TO YOUR HEALTH IN CONNECTION WITH YOUR USE OF THE SERVICE. IF YOU THINK YOU HAVE A MEDICAL EMERGENCY, CALL YOUR LOCAL EMERGENCY PHONE NUMBER IMMEDIATELY."
          }
          className={"pb-3"}
        />

        {/* Clinical Advice through the Service */}
        <Header
          header={
            "Clinical Advice through the Service and Risks of Telehealth Services"
          }
          className={HeaderStyle}
        />
        <Description
          description={
            "Any information or advice received from a Provider comes from the Provider, and not from Company. While Company may facilitate your selection of and communication with Providers, Company does not provide clinical services or clinical advice, and any Provider-patient relationship is only between you and the applicable Provider."
          }
          className={"pb-2"}
        />

        {/* Copyright */}
        <Header header={"Copyright"} className={HeaderStyle} />
        <DecimalCategoryLabel
          points={[
            {
              id: 1,
              description:
                'You understand and accept that all information, data, text, photographs, graphics, audio, video, message, coding or other material appearing on this website, collectively referred to as "Web Content", are owned by Cosmicforge Healthnet Ltd. You may not, without prior Cosmicforge\'s written permission, copy or extract any material, such as design, graphics and coding contained on our website or any other server.',
            },
            {
              id: 2,
              description:
                "You understand and accept that Cosmicforge expressly prohibits the use of any of our Web Content. Unless otherwise stated, none of our Web Content may be reproduced, distributed, republished, downloaded, displayed, posted, transmitted, or copied in any form or by any means, without the prior written permission of Cosmicforge.",
            },
            {
              id: 3,
              description:
                "All permission granted herein, however, will be terminated automatically without notice should you breach any of the above terms. Upon such termination, you agree immediately destroy any downloaded and/or printed materials.",
            },
          ]}
          className="flex flex-col gap-5"
        />
        {/* Intellectual Property, Software and Content */}
        <Header
          header={"Intellectual Property, Software and Content"}
          className={"text-xl font-semibold pt-2 pb-3"}
        />

        <Description
          description={
            "The intellectual property rights of all software and content made available to you on or through this Website remains the property of Cosmicforge  and are protected by copyright laws and treaties around the world. All such rights are reserved by Cosmicforge  Healthnet Ltd"
          }
          className={"pb-2"}
        />
        <Description
          description={
            "Cosmicforge Healthnet Ltd does not claim to own the rights to the images, trademarks and intellectual property of respective third-parties that are featured on this Website. All rights of these images, trademarks and intellectual property belong to their respective owners and not to us."
          }
          className={"pb-2"}
        />
        <Description
          description={
            "You are permitted to store, print and display the content supplied purely for your personal use. You may not publish, manipulate, distribute or reproduce, in any format, any of the content or copies of the content supplied to you or which appears on this Website, nor may you use any such content in connection with any business or commercial enterprise."
          }
          className={"pb-2"}
        />
        <Description
          description={
            "You are prohibited from modifying, translating, reverse engineering, decompiling, disassembling or creating derivative works based on any software or accompanying documentation supplied by Cosmicforge."
          }
          className={"pb-2"}
        />
        <Description
          description={
            "The Cosmicforge logo and website design are registered trademarks of Cosmicforge. No licence or consent is granted to you to use these marks in any way, and you agree not to use these marks or any marks which are colourably similar without the written permission of Cosmicforge."
          }
          className={"pb-2"}
        />
        <Description
          description={
            "Any infringement of the intellectual property rights of any party on this site will be reported to the relevant authorities upon discovery."
          }
          className={"pb-2"}
        />

        {/* User Content */}
        <Header header={"User Content"} className={HeaderStyle} />
        <Description
          description={
            "Some areas of the Service allow Users to submit, post, display, provide, or otherwise make available content such as profile information, comments, questions, reviews on the Apple App Store or Google Play Store and other content or information (other than protected health information that you submit or that we obtain from other sources, any such materials a User submits, posts, displays, provides, or otherwise makes available with respect to the Service is referred to as “User Content”)."
          }
          className={"pb-2"}
        />
        <AllCapsDescription
          description={
            "WE CLAIM NO OWNERSHIP RIGHTS OVER USER CONTENT CREATED BY YOU. THE USER CONTENT YOU CREATE REMAINS YOURS."
          }
          className={"pb-0"}
        />
        <Description
          description={
            "However, you understand that if portions of the Service allow other Users to view, edit, share, and/or otherwise interact with your User Content, by providing or sharing User Content through the Service, you agree to allow others to view, edit, share, and/or interact with your User Content in accordance with your settings and this Agreement."
          }
          className={"pb-2"}
        />
        <Description
          description={
            "By submitting, posting, displaying, providing, or otherwise making available any User Content on or through the Service, you expressly grant, and you represent and warrant that you have all rights necessary to do so and you hereby grant, to Company a royalty-free, fully paid-up, sublicensable (through multiple tiers), transferable, perpetual, irrevocable, non-exclusive, worldwide license, without additional consideration to you or any third party, to use, reproduce, modify, publish, list information regarding, edit, translate, distribute, syndicate, perform and display (publicly or otherwise), adapt, analyze, exploit, and make derivative works of all such User Content and your name, voice, and/or likeness as contained in your User Content, in whole or in part, and in any form, media or technology, whether now known or hereafter developed, for any purpose (including promotional and marketing purposes)."
          }
          className={"pb-2"}
        />
        <Description
          description={
            "You also hereby grant each User of the Service a non-exclusive license to access your User Content through the Service, and to use, reproduce, distribute, display and perform such User Content as permitted through the functionality of the Service and under this Agreement.  If you choose to make any of your personally identifiable or other information publicly available through the Service, you do so at your own risk."
          }
          className={"pb-2"}
        />
        <Description
          description={
            "For the purposes of this Agreement, “Intellectual Property Rights” means all patent rights, copyright rights, mask work rights, moral rights, rights of publicity, trademark, trade dress and service mark rights, goodwill, trade secret rights, and other intellectual property rights as may now exist or hereafter come into existence, and all applications therefore and registrations, renewals, and extensions thereof, under the laws of any state, country, territory, or other jurisdiction."
          }
          className={"pb-2"}
        />
        <Description
          description={
            "In connection with your User Content, you affirm, represent, and warrant the following:"
          }
          className={"pb-0"}
        />
        <BulletCategoryLabel
          points={UserContentAffirmations}
          className="flex flex-col gap-5"
        />
        <Description
          description={
            "Company takes no responsibility and assumes no liability for any User Content that you or any other User or third-party posts, sends, or otherwise makes available through the Service.  You shall be solely responsible for your User Content and the consequences of posting, publishing it, sharing it, or otherwise making it available on the Service, and you agree that we are only acting as a passive conduit for your online distribution and publication of your User Content.  You understand and agree that you may be exposed to User Content that is inaccurate, objectionable, inappropriate for children, or otherwise unsuited to your purpose, and you agree that Company shall not be liable for any damages you allege to incur as a result of or relating to any User Content.  We may (but have no obligation to) monitor, evaluate, alter, or remove User Content before or after it appears on the Service, or analyze your access to or use of the Service, for any or no reason."
          }
          className={"pb-0"}
        />
        {/* Text Messaging and Calls */}
        <Header header={"Text Messaging and Calls"} className={HeaderStyle} />
        <Description
          description={
            "By providing us with your telephone number you affirmatively consent to receive certain recurring Company notifications or information via push notification, SMS text message or calls (including prerecorded calls), in order to perform and improve upon the Service, and to provide you with information and reminders regarding the Service and your care, including your registration, upcoming Service, changes, and updates. "
          }
          className={"pb-3"}
        />
        <Description
          description={
            "You may incur additional charges from your wireless provider for these services, and you are solely responsible for any such charges.  "
          }
          className={"pb-3"}
        />
        <Description
          description={
            "You understand that while these calls, notifications or text messages will generally ask you to log in to your account to receive detailed health information, it will disclose that you have an activity or task related to the Services. Accordingly, it is your responsibility to use phone number that provides you with the level of confidentiality you desire."
          }
        />
        <Description
          description={
            "You can opt-out of receiving such calls for text messages by contacting our customer service or replying STOP to any such message, and for push notifications, through your device settings.  "
          }
        />
        <Description
          description={
            "However, note, that under certain circumstance we may still send you important administrative messages about the Services, from which you may not opt out from."
          }
          className={"pb-3"}
        />
        <Description
          description={
            "Company and Wireless carriers are not responsible for any undelivered messages. Company will not assess any charges for calls or texts, but standard message charges or other charges from your wireless carrier may apply. You understand that we may send you a text confirming any opt-out by you.  You acknowledge that opting out of calls, push notifications and text messages may impact your ability to use certain features of the Service. However note that access to the Services is not conditioned upon your consent to receive marketing or promotional text messages from Company."
          }
          className={"pb-3"}
        />

        {/* Paid Services and Coverage */}
        <Header header={"Paid Services and Coverage"} className={HeaderStyle} />
        <Description
          description={
            "You understand that although Provider and/or Company may bill certain third party payors for Services you receive from your Provider, you will be responsible for payment for any services that are not eligible for payment under your insurance plan and/or benefit program."
          }
          className={"pb-3"}
        />
        <Description
          description={
            "Further, you accept that you are financially responsible for all co-payments or deductibles. You understand that it is your responsibility to arrange and pay for any follow-up care that the Provider recommends you receive.  "
          }
          className={"pb-3"}
        />
        <Description
          description={
            "You acknowledge that it is your responsibility to understand the benefits and limitations on benefits under your insurance or health plan and to contact your insurance carrier/health plan if you have questions. You understand that, depending on your insurance, you may receive a separate bill for laboratory, X-ray, anesthesia or other ancillary services."
          }
          className={"pb-3"}
        />
        <Description
          description={
            "You hereby authorize Company , (either directly or through their affiliates, subsidiaries, or other third parties) to request and collect payment (or otherwise charge, refund, or take any other billing actions) from our payment provider or your designated banking account, and to make any inquiries Company,and their  affiliates may consider necessary to validate your designated payment account or financial information, in order to ensure prompt payment, including for the purpose of receiving updated payment details from your payment, credit card, or banking account provider (e.g., updated expiry date or card number as may be provided to us by your credit card company). "
          }
          className={"pb-3"}
        />
        <AllCapsDescription
          description={
            "YOU ACKNOWLEDGE AND AGREE THAT WE MAY SUBMIT CHARGES WITHOUT FURTHER AUTHORIZATION FROM YOU UNTIL YOU PROVIDE PRIOR NOTICE (RECEIPT OF WHICH IS CONFIRMED BY US) THAT YOU HAVE TERMINATED THIS AUTHORIZATION OR WISH TO CHANGE YOUR PAYMENT METHOD OR INSURANCE DETAILS."
          }
          className={"pb-3"}
        />
        <Description
          description={
            "If the credit card you supplied to us is declined, you may be required to supply a new form of payment.  Please note, however, that if a credit card you supplied to us is declined, we may first try to charge your card a few more times.  Payments will be subject to Company’s payment policies."
          }
          className={"pb-3"}
        />

        {/* Security Statement */}
        <Header header={"SECURITY STATEMENT"} className={HeaderStyle} />
        <Description
          description={
            "The Platform uses a multi-layered security controls such as optional two-factor authentication softwares, encryption, and blockchain-based data storage to protect users information from fraud, risk and compliance monitoring. Safetoken generates a 6-8 digit One-Time-Password (OTP) whenever a transaction is initiated via the Platform."
          }
          className={"pb-2"}
        />

        <Header
          header={"FAILED TRANSACTIONS AND REVERSALS"}
          className={HeaderStyle}
        />
        <Description
          description={
            "In the event of a failed transaction (i.e. user has been debited for a service but value was not received), please send the following details to our email for resolution: user's mobile number, transaction amount, transaction date, transaction type and any other detail we would request to enable us resolve your complaint."
          }
          className={"pb-2"}
        />
        <Description
          description={
            "We shall use our best endeavors to liaise with the applicable financial institution, telecommunication company and/or merchant to resolve your logged transaction issue."
          }
          className={"pb-2"}
        />

        <Header header={"NOTICES"} className={HeaderStyle} />
        <Description
          description={
            "Your email address and phone number supplied at sign-up will be used as a means of communicating information, notices and documents to you. Any changes to such information should be sent to our email."
          }
          className={"pb-2"}
        />

        <Header
          header={"SECURITY AND UNAUTHORIZED USE"}
          className={HeaderStyle}
        />
        <BulletCategoryLabel
          points={SecurityResponsibilities}
          className="flex flex-col gap-5"
        />

        {/* INDEMNITY */}
        <Header header={"INDEMNITY"} className={HeaderStyle} />
        <Description
          description={
            "You agree to defend, indemnify, and hold harmless Company, its Affiliated Entities, (as defined below), and their respective successors and assigns, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney’s fees) arising from:  (i) your use of and access to the Service, including any data or content transmitted or received by you; (ii) your violation of any term of this Agreement, including your breach of any of the representations and warranties above; (iii) your violation of any third-party right, including any right of privacy or Intellectual Property Rights; (iv) your violation of any applicable law, rule, or regulation; (v) User Content or any content that is submitted via your User Account, including misleading, false, or inaccurate information; (vi) your negligence or willful misconduct; or (vii) any other party’s access and use of the Service with your unique username, password, or other appropriate security code."
          }
          className={"pb-2"}
        />
        <BulletCategoryLabel
          points={IndemnityArising}
          className="flex flex-col gap-5"
        />

        <Header header={"Disclaimer of Warranty"} className={HeaderStyle} />
        <AllCapsDescription
          description={`THE SERVICE IS PROVIDED ON AN “AS IS,” “WHERE AVAILABLE” AND “AS AVAILABLE” BASIS.  USE OF THE SERVICE IS AT YOUR OWN RISK.  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, COMPANY DISCLAIMS ALL WARRANTIES WITH RESPECT TO THE SERVICE (INCLUDING ANY PAID SERVICE) AND THIRD PARTY MATERIALS, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUALITY OF INFORMATION, QUIET ENJOYMENT, NON INFRINGEMENT, AND TITLE.  
`}
          className={"pb-4"}
        />
        <AllCapsDescription
          description={`NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM COMPANY OR THROUGH THE SERVICE WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN.  WITHOUT LIMITING THE FOREGOING, COMPANY, ITS SUBSIDIARIES, ITS AFFILIATES, AND ITS LICENSORS DO NOT WARRANT THAT THE CONTENT IS ACCURATE, RELIABLE, OR CORRECT; THAT THE SERVICE WILL MEET YOUR REQUIREMENTS; THAT THE SERVICE WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, UNINTERRUPTED OR SECURE; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT THE SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.  YOU ACKNOWLEDGE THAT COMPANY DOES NOT CONTROL THE TRANSFER OF DATA OVER COMMUNICATIONS FACILITIES, INCLUDING THE INTERNET, AND THAT THE SERVICE MAY BE SUBJECT TO LIMITATIONS, DELAYS, AND OTHER PROBLEMS INHERENT IN THE USE OF SUCH COMMUNICATIONS.  ANY CONTENT DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS DOWNLOADED AT YOUR OWN RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR LOSS OF DATA THAT RESULTS FROM SUCH DOWNLOAD OR YOUR USE OF THE SERVICE.`}
          className={"pb-4"}
        />
        <AllCapsDescription
          description={`FURTHER, COMPANY DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICE OR ANY HYPERLINKED WEBSITE OR SERVICE, AND COMPANY WILL NOT BE A PARTY TO OR IN ANY WAY MONITOR ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
`}
        />
        <Description
          description={
            "Federal law, some states and other jurisdictions do not allow the exclusion and limitations of certain implied warranties, so the above exclusions may not apply to you.  This Agreement gives you specific legal rights, and you may also have other rights that vary from state to state.  The disclaimers and exclusions under this Agreement will not apply to the extent prohibited by applicable law.  All disclaimers of any kind (including in this section and elsewhere in this Agreement) are made for the benefit of both Company and its affiliates and their respective shareholders, directors, officers, employees, affiliates, agents, representatives, licensors, licensees, suppliers, and service providers (collectively, the “Affiliated Entities”), and their respective successors and assigns."
          }
          className={"pb-4"}
        />
        <AllCapsDescription
          description={`WARRANTIES RELATING TO PRODUCTS OR SERVICES OFFERED, SOLD AND DISTRIBUTED BY COMPANY ARE SUBJECT TO SEPARATE WARRANTY TERMS AND CONDITIONS, IF ANY, PROVIDED BY COMPANY OR THIRD PARTIES IN CONNECTION WITH THE APPLICABLE PRODUCTS OR SERVICES.`}
          className={"pb-4"}
        />
        <Description
          description={
            "To the maximum extent permitted by applicable law, we hereby state that this platform offers Telemedicine and Ai-driven diagnostic tools but this does not replace in-person care in all cases. "
          }
          className={"pb-3"}
        />
        <Description
          description={
            "we exclude all representations, warranties and conditions relating to our platform and the use of this platform. Nothing in this disclaimer will:"
          }
          className={"pb-3"}
        />
        <BulletCategoryLabel
          points={[
            {
              id: 1,
              description:
                "Limit any of our or your liabilities in any way that is not permitted under applicable law; or",
            },
            {
              id: 2,
              description:
                "Exclude any of our or your liabilities that may not be excluded under applicable law.",
            },
          ]}
        />
        <Description
          description={
            "The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer:"
          }
          className={"pb-4"}
        />
        <AlphaCategoryLabel
          points={[
            {
              id: 1,
              description: " are subject to the preceding paragraph; and ",
            },
            {
              id: 1,
              description:
                "  govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty. ",
            },
          ]}
        />

        {/* Termination */}
        <Header
          header={"Termination/Suspension of Access to Platform"}
          className={HeaderStyle}
        />
        <Description
          description={
            "This Agreement is effective upon your acceptance of this Agreement and continues in force and effect until terminated.  Company may terminate or suspend your use of the Service at any time and without prior notice, for any or no reason, including if Company believes that you have violated or acted inconsistently with the letter or spirit of this Agreement.  Upon any such termination or suspension, your right to use the Service will immediately cease, and Company may, without liability to you or any third party, immediately deactivate or delete your user name, password, and account, and all associated materials, without any obligation to provide any further access to such materials; however, Company will provide access to you to any of your health records in Company’s possession as a result of this Agreement as may be required under applicable legal, ethical, and professional obligations. "
          }
          className={"pb-2"}
        />
        <Description
          description={
            "Termination will also occur in the following circumstances:"
          }
          className={"pb-2"}
        />
        <BulletCategoryLabel
          points={TerminationCircumstances}
          className="flex flex-col gap-5"
        />

        {/* Limitation of Liability */}
        <Header
          header={"Limitation of Liability"}
          className={"pb-2 font-semibold text-xl pt-3"}
        />
        <Description
          description={
            "Cosmicforge Healthnet Ltd shall not be liable for any loss of income, loss of profits, loss of contracts, loss of data or for any indirect or consequential loss or damage of any kind howsoever arising and excludes any liability from us for any personal injury or death caused by our negligence, to the extent permitted by Law."
          }
          className={"pb-2"}
        />
        <BulletCategoryLabel
          points={LimitationOfLiability}
          className={"pb-3"}
        />
        {/* Assignment */}
        <Header header={"Assignment"} className={HeaderStyle} />
        <Description
          description={
            "This Agreement, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Company without restriction.  Any attempted transfer or assignment in violation hereof shall be null and void.  We may assign, transfer, or sublicense any or all of our rights or obligations under this Agreement without restriction."
          }
          className={"pb-2"}
        />
        {/* Notification Procedures */}
        <Header header={"Notification Procedures"} className={HeaderStyle} />
        <Description
          description={
            "Company may provide notifications, whether such notifications are required by law or are for marketing or other business related purposes, to you via email notice, written or hard copy notice, through posting of such notice on our Service, or through any other reasonable means, as determined by Company in our sole discretion.  Company reserves the right to determine the form and means of providing notifications to our Users, provided that you may opt out of certain means of notification as described in this Agreement.  Without limitation, a printed version of this Agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this Agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form.  Company will not be responsible for any failure to fulfill any obligation due to any cause beyond its control.  Company is not responsible for any automatic filtering you or your network provider may apply to email notifications we send to the email address you provide us."
          }
          className={"pb-2"}
        />
        {/* Entire Agreement; Severability*/}
        <Header
          header={"Entire Agreement; Severability"}
          className={HeaderStyle}
        />
        <Description
          description={
            "This Agreement, together with any amendments and any additional agreements you may enter into with Company in connection with the Service, shall constitute the entire agreement between you and Company concerning the Service and supersedes any and all prior or contemporaneous written or oral agreements or understandings between you and Company relating to such subject matter.  If any provision of this Agreement is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement, which shall remain in full force and effect, except that in the event of unenforceability of Section 15.3, the entire arbitration agreement shall be unenforceable."
          }
          className={"pb-2"}
        />
        {/* NO WAIVER */}
        <Header header={"NO WAIVER"} className={HeaderStyle} />
        <Description
          description={
            "No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term, and Company’s failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision."
          }
          className={"pb-2"}
        />
        {/* CHANGES /AMENDMENT OF POLICY */}
        <Header
          header={"CHANGES /AMENDMENT OF POLICY "}
          className={HeaderStyle}
        />
        <Description
          description={
            "Cosmicforge Heathnet Ltd has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications. Your continued access to and use of the Service is your acceptance of and compliance with the updated Terms of Use. If you disagree with any part of hereof, do not access the Platform."
          }
          className={"pb-2"}
        />
        {/* MISCELLANEOUS PROVISIONS */}
        <Header header={"MISCELLANEOUS PROVISIONS "} className={HeaderStyle} />
        <BulletCategoryLabel
          points={MiscellaneousProvisions}
          className={"pb-3"}
        />

        {/* Governing Law and Jurisdiction */}
        <Header
          header={"Governing Law and Jurisdiction"}
          className={HeaderStyle}
        />
        <Description
          description={
            "These Website Terms and all matters relating to your access to, or use of, the Website and the Services shall be governed by and construed in accordance with the laws of NIGERIA, without giving effect to any principles of conflicts of law. You hereby agree to submit to the non-exclusive jurisdiction of the NIgerian courts."
          }
          className={"pb-2"}
        />

        {/* Arbitration */}
        <Header header={"Arbitration"} className={HeaderStyle} />
        <Description
          description={
            "Read this section carefully because it requires each of us to arbitrate our disputes and limits the manner in which you can seek relief from Company. For any dispute with Company, you agree to first contact us and attempt to resolve the dispute with us informally."
          }
          className={"pb-2"}
        />
        <AllCapsDescription
          description={
            "IN THE UNLIKELY EVENT THAT COMPANY HAS NOT BEEN ABLE TO RESOLVE A DISPUTE IT HAS WITH YOU AFTER SIXTY (60) DAYS, WE EACH AGREE TO RESOLVE ANY CLAIM, DISPUTE, OR CONTROVERSY (EXCLUDING ANY CLAIMS FOR INJUNCTIVE OR OTHER EQUITABLE RELIEF AS PROVIDED BELOW) ARISING OUT OF OR IN CONNECTION WITH OR RELATING TO THIS AGREEMENT, OR THE BREACH OR ALLEGED BREACH THEREOF (COLLECTIVELY, “CLAIMS”), BY BINDING ARBITRATION .  ADDITIONALLY, WE EACH AGREE TO USE THE OPTIONAL EXPEDITED ARBITRATION PROCEDURES EXCEPT AS PROVIDED BELOW.  IF THERE IS A DISPUTE ABOUT THE ARBITRABILITY OF ANY CLAIM, DISPUTE, OR CONTROVERSY (INCLUDING ABOUT THE FORMATION, SCOPE, APPLICABILITY, INTERPRETATION, VALIDITY, AND ENFORCEABILITY OF THIS SECTION ), WE AGREE THAT THIS THRESHOLD DISPUTE SHALL BE RESOLVED BY THE ARBITRATOR, EXCEPT AS EXPRESSLY PROVIDED BELOW.  THE ARBITRATION WILL BE CONDUCTED IN NIGERIA UNLESS YOU AND COMPANY AGREE OTHERWISE.  THE AWARD RENDERED BY THE ARBITRATOR MAY INCLUDE YOUR COSTS OF ARBITRATION, YOUR REASONABLE ATTORNEY’S FEES, AND YOUR REASONABLE COSTS FOR EXPERT AND OTHER WITNESSES.  YOU MAY SUE IN A SMALL CLAIMS COURT OF COMPETENT JURISDICTION WITHOUT FIRST ENGAGING IN ARBITRATION, BUT THIS DOES NOT RELIEVE YOU OF YOUR OBLIGATION TO ENGAGE IN THE ARBITRATION PROCESS DESCRIBED IN THIS SECTION.  ANY JUDGMENT ON THE AWARD RENDERED BY THE ARBITRATOR MAY BE ENTERED IN ANY COURT OF COMPETENT JURISDICTION.  THIS SECTION SHALL NOT BE INTERPRETED AS PREVENTING COMPANY OR USER FROM SEEKING INJUNCTIVE OR OTHER EQUITABLE RELIEF FROM THE COURTS AS NECESSARY TO PREVENT THE ACTUAL OR THREATENED INFRINGEMENT, MISAPPROPRIATION, OR VIOLATION OF OUR OR YOURS DATA SECURITY, INTELLECTUAL PROPERTY RIGHTS, OR OTHER PROPRIETARY RIGHTS.  YOU AGREE THAT THIS ARBITRATION PROVISION WILL SURVIVE THE TERMINATION OF YOUR RELATIONSHIP WITH COMPANY."
          }
          className={"pb-3"}
        />
      </div>
    </section>
  );
}

export default TermsAndConditionsContent;
