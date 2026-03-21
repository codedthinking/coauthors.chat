import { Label } from "@/components/ui/label";

export function TranscriptInfo() {
  return (
    <div className="flex flex-col gap-6 items-start">
      {/* Label */}
      <Label>Frictionless</Label>

      {/* Heading */}
      <h2 className="font-work-sans font-normal text-[36px] leading-[119%] tracking-[-0.05em] text-gray-900 text-center lg:text-left">
        Real-time call{" "}
        <span 
          className="font-zodiak italic text-[36px] leading-[119%]"
          style={{ 
            fontFamily: 'Zodiak, serif',
            fontWeight: 400,
            color: '#2C223B',
            letterSpacing: '-1.8px'
          }}
        >
          transcript
        </span>
      </h2>

      {/* Description */}
      <p className="font-work-sans font-normal text-sm leading-[120%] tracking-[-0.02em] text-gray-600 max-w-md text-center lg:text-left">
      No typing. No manual recording. No third-party AI assistants. <br />
      Just talk like you are at a conference coffee break.
      </p>
    </div>
  );
}
