import { CommandsInfo } from "./commands-info";
import { CommandsButtons } from "./commands-buttons";

export function CommandsSection() {
  return (
    <section className="w-full bg-transparent py-16">
      <div className="max-w-[1440px] mx-auto px-[35px]">
        <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-48 items-start justify-items-center lg:justify-items-start">
          {/* Left side */}
          <CommandsInfo />

          {/* Right side - Command buttons */}
          <CommandsButtons />
        </div>
      </div>
    </section>
  );
}
