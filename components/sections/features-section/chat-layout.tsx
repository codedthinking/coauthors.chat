import { Mic } from "lucide-react";

export function ChatLayout() {
  return (
    <div className="relative">
      {/* Chat card */}
      <div className="w-full max-w-[411px] rounded-lg border border-gray-200 bg-white p-8 flex flex-col gap-4 shadow-lg relative">
        {/* Header with name and badge */}
        <div className="flex items-center gap-2">
          <div className="font-semibold text-lg text-gray-900">Anna</div>
        </div>
        
        {/* First speech bubble - light grey, narrow width */}
        <div className="inline-flex px-4 py-2 bg-gray-100 rounded-full text-gray-800 leading-relaxed w-fit">
          Adipiscing elit, sed do eiusmod
        </div>
        
        {/* Second speech bubble - light pink with blinking cursor */}
        <div className="inline-flex px-4 py-2 bg-[#FFD7C9] rounded-full text-gray-800 shadow-sm w-fit">
          Ut labore et dolore magn<span className="ml-1 animate-pulse text-gray-800">|</span>
        </div>

        {/* Microphone icon - positioned absolute at top-right corner, center on edge */}
        <div 
          className="absolute -top-[58.5px] -right-[58.5px] w-[117px] h-[117px] rounded-full border-[10px] border-[#FFD7C9] flex items-center justify-center"
          style={{
            background: '#F79C7D'
          }}
        >
          <Mic className="w-[46px] h-[46px] text-[#2C223B]" />
        </div>
      </div>
    </div>
  );
}
