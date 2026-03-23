export function RoomPreviewHeader() {
  return (
    <div className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-[32px] py-[20px] sm:px-[32px] sm:py-[20px]">
      <div className="flex items-center gap-[16px] min-w-0 flex-1">
        <div className="h-3 w-3 rounded-full bg-[#22C55E] shrink-0" />
        <div
          className="px-2 py-1 rounded-[1234px] text-[12px] shrink-0"
          style={{
            background: "var(--Light-Radial)",
          }}
        >
          <span className="header-bantae-label text-center text-[12px] font-normal uppercase leading-[16px] tracking-[-0.5%] text-[var(--Webapp-Purple-Purple-80,#2C223B)] whitespace-nowrap">
            BANTAE-UI
          </span>
        </div>
        <span className="text-xs sm:text-sm font-medium text-[#171717] truncate">
          <span className="hidden sm:inline">Miklós, Dia, Anna, Enikő</span>
          <span className="sm:hidden">Miklós, Dia...</span>
        </span>
      </div>
    </div>
  );
}

