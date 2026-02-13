import { ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
}

export function Label({ children }: LabelProps) {
  return (
    <div className="inline-flex h-6 px-2 py-1 rounded-[1234px] border border-gray-300 bg-white/30 items-center justify-center w-fit">
      <span className="text-xs font-normal text-gray-700 whitespace-nowrap">{children}</span>
    </div>
  );
}
