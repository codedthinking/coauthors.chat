import { Label } from "@/components/ui/label";

export function CommandsInfo() {
  return (
    <div className="flex flex-col gap-6 items-start">
      {/* Label */}
      <Label>Practical</Label>

      {/* Heading */}
      <h2 className="text-[36px] leading-[119%] tracking-[-1.8px] text-[#2C223B] text-center lg:text-left">
        <span
          className="font-zodiak italic font-normal"
        >
          Actions
        </span>
        {" "}
        <span className="font-work-sans font-normal">
        speak louder than <br /> words
        </span>
      </h2>

      {/* Description */}
      <p className="font-work-sans font-normal text-sm leading-[120%] tracking-[-0.02em] text-gray-600 max-w-md text-center lg:text-left">
        Easily accessible commands to help you quickly process your conversations.
      </p>
    </div>
  );
}
