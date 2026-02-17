import type { InputHTMLAttributes } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement>;

export function FormInput({ className, ...props }: FormInputProps) {
  return (
    <div className="flex h-[46px] w-full min-w-0 items-center rounded-full border border-gray-300 bg-white px-4 sm:px-6 shadow-[0px_2px_4px_-2px_#1717170F,0px_4px_8px_-2px_#1717171A]">
      <input
        {...props}
        className={[
          "w-full bg-transparent text-base font-normal leading-[22px] tracking-normal text-[#171717] outline-none",
          "placeholder:text-[var(--Gray-60,#475569)]",
          className ?? "",
        ].join(" ")}
      />
    </div>
  );
}

