import { Label } from "@/components/ui/label";

export function BetaInfo() {
  return (
    <div className="flex flex-col gap-6 items-start w-full max-w-[476px]">
      {/* Label */}
      <Label>Ready to go</Label>

      {/* Heading — same pattern as TranscriptInfo (Work Sans + Zodiak accent) */}
      <h2 className="font-work-sans font-normal text-[36px] leading-[119%] tracking-[-0.05em] text-gray-900 text-center lg:text-left">
        Coauthors is open for{" "}
        <span
          className="font-zodiak italic text-[36px] leading-[119%]"
          style={{
            fontFamily: "Zodiak, serif",
            fontWeight: 400,
            color: "#2C223B",
            letterSpacing: "-1.8px",
          }}
        >
          scientists
        </span>
      </h2>

      {/* Description */}
      <p className="font-work-sans font-normal text-sm leading-[120%] tracking-[-0.02em] text-gray-600 max-w-md text-center lg:text-left">
      Use your .edu e-mail address to join for free and start using coauthors to streamline your ideation process.
      </p>
    </div>
  );
}
