import { ComponentIcon } from "lucide-react";
import { IconLabel } from "../common/IconLabel";
import FeaturesSection from "./CollapsibleCard";
import { HeadingText } from "./HeadingText";

export function Featured() {
  return (
    <div className="flex flex-col gap-4 my-16 px-4 xl:px-[var(--horizontal-padding)]">
      <div className="flex self-center my-2">
        <IconLabel
          label="Features"
          icon={ComponentIcon}
          bgColor="bg-green-300"
        />
      </div>

      <HeadingText className="text-center w-full">
        Features That Drive Results
      </HeadingText>

      <FeaturesSection />
    </div>
  );
}
