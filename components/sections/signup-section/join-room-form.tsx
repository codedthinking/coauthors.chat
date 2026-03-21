import { FormInput } from "@/components/ui/form-input";
import { CtaLink } from "@/components/ui/cta-link";

export function JoinRoomForm() {
  return (
    <div className="w-full max-w-[411px] lg:max-w-[460px] lg:w-[460px] rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
      <div className="flex w-full flex-col items-center space-y-3">
        {/* Name input */}
        <FormInput type="text" placeholder="Allan" />

        {/* Email input */}
        <FormInput type="email" placeholder="allansmith@university.edu" />

        {/* Same primary CTA as header */}
        <CtaLink
          href="https://coautho.rs/"
          variant="primary"
          className="w-full max-w-[380px]"
        >
          Join room
        </CtaLink>
      </div>
    </div>
  );
}
