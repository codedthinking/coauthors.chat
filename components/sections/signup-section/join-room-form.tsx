"use client";

import { FormInput } from "@/components/ui/form-input";

export function JoinRoomForm() {
  return (
    <div className="w-[411px] rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex w-full flex-col items-center space-y-3"
      >
        {/* Name input */}
        <FormInput type="text" placeholder="Allan" />

        {/* Email input */}
        <FormInput type="email" placeholder="allansmith@university.edu" />

        {/* Primary action button */}
        <button
          type="submit"
          className="h-[46px] w-full min-w-0 cursor-pointer rounded-full bg-gradient-light-radial font-work-sans text-base font-bold leading-[22px] tracking-[-0.7%] text-[#171717] transition-opacity hover:opacity-90"
        >
          Join room
        </button>
      </form>
    </div>
  );
}
