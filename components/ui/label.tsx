import { CSSProperties, ReactNode } from "react";

export type LabelVariant = "primary" | "orange";

interface LabelProps {
  children: ReactNode;
  variant?: LabelVariant;
}

export function Label({ children, variant = "orange" }: LabelProps) {
  const baseClassName =
    "inline-flex h-6 px-2 py-1 rounded-[1234px] items-center justify-center w-fit";

  const textClassName = "text-xs font-normal text-gray-700 whitespace-nowrap";

  const variantProps:
    | { className: string; style?: CSSProperties }
    | { className?: string; style: CSSProperties } =
    variant === "primary"
      ? {
          style: {
            border: "1px solid rgba(255, 255, 255, 0.30)",
            background: "rgba(255, 255, 255, 0.30)",
          },
        }
      : {
          style: {
            background: "var(--Webapp-Orange-Orange-0, #FFF5F2)",
          },
        };

  return (
    <div className={`${baseClassName} ${variantProps.className ?? ""}`} style={variantProps.style}>
      <span className={textClassName}>{children}</span>
    </div>
  );
}
