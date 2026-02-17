"use client";

import Link from "next/link";
import { FormInput } from "@/components/ui/form-input";
import { PrimaryButton } from "@/components/ui/primary-button";

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
        <Link href="https://coautho.rs/" className="w-full max-w-[380px]">
          <PrimaryButton type="button" className="w-full">
            Join room
          </PrimaryButton>
        </Link>
      </form>
    </div>
  );
}
