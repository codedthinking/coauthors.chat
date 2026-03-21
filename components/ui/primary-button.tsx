import type { ButtonHTMLAttributes, ReactNode } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function PrimaryButton({
  className,
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={[
        "primary-button inline-flex items-center justify-center h-[46px] min-w-0 cursor-pointer rounded-full px-6",
        "font-work-sans font-medium text-base leading-[22px] tracking-[-0.112px] text-[#171717]",
        "gap-2 sm:gap-3 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

