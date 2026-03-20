export function RoomPreviewHeader() {
  return (
    <div className="flex h-14 w-full items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
        <div className="h-3 w-3 rounded-full bg-[#22C55E] shrink-0" />
        <div
          className="px-2 py-1 shrink-0"
          style={{
            borderRadius: 1234,
            background: "var(--Light-Radial, #FDE7DA)",
          }}
        >
          <span className="text-xs font-normal uppercase leading-4 text-[#2C223B] whitespace-nowrap">
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

