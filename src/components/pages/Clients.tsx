import Marquee from "react-fast-marquee";
import { getBrandIcon } from "../../utils";

const ITEMS = [
  "Figma",
  "Dribble",
  "Facebook",
  "Youtube",
  "Twitter",
  "Instagram",
  "LinkedIn",
  "Code Sandbox",
];

export function ClientsList() {
  return (
    <div className="flex flex-col">
      <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-medium text-black">
        Trusted by these Companies
      </p>
      <div className="relative w-[85%] xl:w-[75%] self-center my-4 md:my-12 bg-white rounded-xl">
        <div className="rounded-xl pointer-events-none absolute left-0 top-0 h-full w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-2" />
        <div className="rounded-xl pointer-events-none absolute right-0 top-0 h-full w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-2" />

        <Marquee className="py-6" pauseOnHover speed={48}>
          {[...ITEMS].map((text, i) => {
            const Brand = getBrandIcon(text);
            return (
              <div
                key={i}
                className="flex gap-x-2 mx-8 items-center whitespace-nowrap text-xl font-medium"
              >
                <Brand className="size-6 text-gray-400" />
                {text}
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}
