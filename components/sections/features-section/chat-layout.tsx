import { Mic } from "lucide-react";

export function ChatLayout() {
  return (
    <div className="relative">
      {/* Chat card */}
      <div className="w-full max-w-none sm:max-w-[411px] rounded-[20px] border border-gray-200 bg-white p-8 flex flex-col gap-4 shadow-lg relative">
        {/* Header with name and badge */}
        <div className="flex items-center gap-2">
          <div className="text-xs sm:text-sm font-medium text-[#171717]">Anna</div>
        </div>
        
        {/* First speech bubble - light grey, narrow width */}
        <div className="inline-flex px-4 py-2 bg-gray-100 rounded-[24px] text-gray-800 leading-relaxed w-fit">
          Adipiscing elit, sed do eiusmod
        </div>
        
        {/* Second speech bubble - light pink with blinking cursor */}
        <div className="inline-flex px-4 py-2 bg-[#FFD7C9] rounded-[24px] text-gray-800 shadow-sm w-fit">
          Ut labore et dolore magn<span className="ml-1 animate-pulse text-gray-800">|</span>
        </div>

        {/* Microphone icon - centered on top edge (not corner) */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 -top-[29px] sm:left-auto sm:right-[-44px] sm:translate-x-0 sm:-top-[44px] lg:-top-[58.5px] lg:-right-[58.5px] w-[58px] h-[58px] sm:w-[88px] sm:h-[88px] lg:w-[117px] lg:h-[117px] rounded-full border-[5px] sm:border-[8px] lg:border-[10px] border-[#FFD7C9] flex items-center justify-center"
          style={{
            background: '#F79C7D'
          }}
        >
          <Mic className="w-[23px] h-[23px] sm:w-[35px] sm:h-[35px] lg:w-[46px] lg:h-[46px] text-[#2C223B]" />
        </div>
      </div>
    </div>
  );
}
