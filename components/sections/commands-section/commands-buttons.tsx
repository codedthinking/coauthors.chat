"use client";

import { FileText, Share2, PenTool, CheckSquare, Plus } from "lucide-react";

const commands = [
  { icon: FileText, label: "Transcribe" },
  { icon: Share2, label: "Share" },
  { icon: PenTool, label: "Summarize" },
  { icon: CheckSquare, label: "Action items" },
  { icon: Plus, label: "Add custom" },
];

export function CommandsButtons() {
  return (
    <div className="w-[476px] h-[209px] flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-4">
        {commands.map((command, index) => (
          <button
            key={index}
            className="h-[42px] px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors flex items-center gap-3 text-sm font-medium text-gray-700"
          >
            <command.icon className="w-5 h-5" />
            {command.label}
          </button>
        ))}
      </div>
    </div>
  );
}
