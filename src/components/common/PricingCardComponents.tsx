import { cn } from "@/utils";
import { Check, ChevronRight } from "lucide-react";

interface PricingCardProps {
  title: string;
  price?: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  highlighted = false,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col rounded-[calc(var(--radius-xl)+theme(spacing.3))] shadow-md bg-white/50 text-black",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-col rounded-[calc(var(--radius-xl)+theme(spacing.3))] p-3 shadow-sm gap-y-4",
          highlighted
            ? "bg-gradient-to-r from-green-700 to-green-900 text-white"
            : "bg-white text-black",
          className
        )}
      >
        <div
          className={cn(
            "flex flex-col rounded-xl px-4 py-3",
            highlighted ? "bg-white text-black" : "bg-green-500/70 text-black",
            className
          )}
        >
          {/* Badge */}
          <span
            className={cn(
              "self-start rounded-full px-3 py-1.5 text-sm font-medium mb-4",
              highlighted ? "bg-green-500/70 text-black" : "bg-white text-black"
            )}
          >
            {title}
          </span>

          {/* Price or Custom Pricing */}
          <h3 className="text-3xl font-bold mt-4 mb-2 text-left">
            {price ? price : "Custom Pricing"}
          </h3>
        </div>

        <p className="px-2 text-[16px] text-left mb-6 opacity-80">
          {description}
        </p>

        {/* CTA Button */}
        <button
          className={cn(
            "flex items-center justify-center w-full rounded-full px-4 py-3 transition",
            highlighted
              ? "bg-green-300 text-black hover:bg-green-400 hover:cursor-pointer"
              : "bg-green-700 text-white hover:bg-green-600 hover:cursor-pointer"
          )}
        >
          {buttonText}
          <ChevronRight />
        </button>
      </div>

      {/* Features */}
      <ul className="mt-6 space-y-2 text-sm px-6 py-4">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="flex text-left items-center gap-2 text-black text-lg"
          >
            <Check className="w-4 h-4 text-black" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};
