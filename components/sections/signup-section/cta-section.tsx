import { ArrowRight } from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";
import { FormInput } from "@/components/ui/form-input";

export function CTASection() {
  return (
    <div className="mx-auto w-full px-[135px] py-[120px] flex flex-col items-center gap-12 sm:gap-16 lg:gap-24">
      <div className="flex w-full max-w-[540px] flex-col items-center gap-6 text-center">
        {/* Heading */}
        <h2 className="font-work-sans font-normal text-[36px] leading-[119%] tracking-[-0.05em] text-gray-900">
          Join the conversation. <br />{" "}
          <span className="font-zodiak italic">Start talking!</span>
        </h2>

        {/* Description */}
        <p className="font-work-sans font-normal text-sm leading-[120%] tracking-[-0.02em] text-gray-600 max-w-[544px] text-center">
          Enter your .edu e-mail to get started
        </p>

        {/* Email input and button */}
        <div className="flex w-full flex-col gap-4 items-center mt-4">
          <FormInput
            type="email"
            name="edu-email"
            placeholder="Your .edu e-mail"
            autoComplete="email"
          />
          <CtaLink href="https://coautho.rs/" variant="primary" className="w-auto">
            Try coauthors now
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </CtaLink>
        </div>
      </div>
    </div>
  );
}
