import { Label } from "@/components/ui/label";

const POLICY_SECTIONS = [
  {
    title: "1. Overview",
    body: `CoAuthors Chat ("we", "us", or "our") is a voice-first collaboration product built by Bantae. This Privacy Policy explains what information we collect when you use coauthors.chat and the CoAuthors application, how we use it, and the choices you have.

By using our services, you agree to the practices described here. If you do not agree, please do not use the product.`,
  },
  {
    title: "2. Information we collect",
    body: `We collect only what we need to run and improve the service:

• Conversation data: audio during calls, real-time transcripts generated from those calls, and related metadata such as room identifiers and timestamps.
• Usage data: basic technical information (for example browser type, device category, and general interaction events) to keep the service reliable and secure.
• Information you provide voluntarily: such as an email address when you join a waitlist or contact us for support.

We do not require you to create a profile with your real name to start a conversation. Room participation is designed to be lightweight and low-friction.`,
  },
  {
    title: "3. How we use your information",
    body: `We use collected information to:

• Provide real-time transcription, room features, and product functionality you request.
• Operate, maintain, and secure our infrastructure.
• Understand aggregate usage patterns and fix bugs.
• Improve transcription quality, commands, and overall product experience.

As noted on our site, anonymous chat transcripts may be used to improve the app. When we use transcripts for improvement, we take steps to remove or avoid storing direct identifiers that are not needed for that purpose.`,
  },
  {
    title: "4. Legal bases (where applicable)",
    body: `If you are in the European Economic Area or the United Kingdom, we process personal data when:

• It is necessary to perform our contract with you (providing the service).
• We have a legitimate interest in operating and improving a secure product, balanced against your rights.
• You have given consent where required (for example for optional communications).

You may withdraw consent at any time where processing is consent-based, without affecting the lawfulness of processing before withdrawal.`,
  },
  {
    title: "5. Sharing and disclosure",
    body: `We do not sell your personal information. We may share data only:

• With service providers who help us host, transcribe, or analyze data under strict confidentiality obligations.
• When required by law, regulation, or valid legal process.
• To protect the rights, safety, and security of users, Bantae, or the public.
• In connection with a merger, acquisition, or asset sale, subject to continued protection of your information.

Any subprocessors are selected with care and limited to what is necessary for the task.`,
  },
  {
    title: "6. Retention",
    body: `We retain information only as long as needed for the purposes described in this policy, unless a longer period is required by law. Transcripts and related logs used for product improvement are kept for limited periods and may be deleted or aggregated when no longer needed.

You may request deletion of personal data we hold about you where applicable law provides that right.`,
  },
  {
    title: "7. Security",
    body: `We use administrative, technical, and organizational measures designed to protect your information, including encryption in transit where supported and access controls for our systems. No method of transmission or storage is completely secure; we work continuously to reduce risk.`,
  },
  {
    title: "8. Your rights and choices",
    body: `Depending on where you live, you may have the right to access, correct, delete, or restrict processing of your personal data, and to object to certain processing or request portability.

To exercise these rights, contact us using the details below. You may also have the right to lodge a complaint with your local data protection authority.`,
  },
  {
    title: "9. Children",
    body: `CoAuthors Chat is not directed at children under 16, and we do not knowingly collect personal information from them. If you believe a child has provided us data, please contact us and we will take appropriate steps to delete it.`,
  },
  {
    title: "10. International transfers",
    body: `If you use the service from outside the country where our servers or providers operate, your information may be processed in other jurisdictions. Where required, we use appropriate safeguards for cross-border transfers.`,
  },
  {
    title: "11. Changes to this policy",
    body: `We may update this Privacy Policy from time to time. We will post the revised version on this page and update the "Last updated" date. Material changes may be communicated through the product or by other reasonable means.`,
  },
  {
    title: "12. Contact",
    body: `Questions about this policy or our data practices:

Bantae / CoAuthors
Email: privacy@bantae.com
Website: https://bantae.com`,
  },
] as const;

const cardStyle = {
  borderRadius: 20,
  background: "var(--webapp-gray-gray-0-white, #FFF)",
  boxShadow:
    "0 2.456px 4.913px -1.228px rgba(23, 23, 23, 0.10), 0 1.228px 2.456px -1.228px rgba(23, 23, 23, 0.06)",
};

export function PrivacyPolicyContent() {
  return (
    <article
      className="mx-auto w-full max-w-[800px] overflow-hidden rounded-[20px] px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
      style={cardStyle}
    >
      <header className="mb-8 flex flex-col gap-4 sm:mb-10">
        <Label>Legal</Label>
        <h1 className="font-work-sans text-[34px] font-normal leading-[119%] tracking-[-0.05em] text-gray-900 sm:text-[40px]">
          Privacy{" "}
          <span
            className="font-zodiak text-[34px] italic leading-[119%] sm:text-[40px]"
            style={{
              fontFamily: "Zodiak, serif",
              fontWeight: 540,
              color: "#2C223B",
            }}
          >
            policy
          </span>
        </h1>
        <p className="font-work-sans text-sm leading-[140%] tracking-[-0.02em] text-gray-600">
          Last updated: May 16, 2026
        </p>
        <p className="font-work-sans text-[17px] leading-[140%] tracking-[-0.05em] text-gray-700 sm:text-lg">
          We built CoAuthors Chat for open conversation—not for harvesting personal
          data. This page explains what we collect, why, and how you stay in control.
        </p>
      </header>

      <div className="flex flex-col gap-8 sm:gap-10">
        {POLICY_SECTIONS.map(({ title, body }) => (
          <section key={title} className="flex flex-col gap-3">
            <h2 className="font-work-sans text-lg font-medium leading-[130%] tracking-[-0.03em] text-gray-900">
              {title}
            </h2>
            <p className="whitespace-pre-line font-work-sans text-sm leading-[150%] tracking-[-0.02em] text-gray-600">
              {body}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
