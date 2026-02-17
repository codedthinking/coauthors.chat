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
        "inline-flex items-center justify-center h-[46px] min-w-0 cursor-pointer rounded-full bg-gradient-light-radial",
        "font-work-sans text-base font-bold leading-[22px] tracking-[-0.7%] text-[#171717]",
        "transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

