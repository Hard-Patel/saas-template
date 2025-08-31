import { Banknote } from "lucide-react";
import { IconLabel } from "../common/IconLabel";
import { HeadingText } from "./HeadingText";
import { PricingCard } from "../common/PricingCardComponents";

export function Pricings() {
  return (
    <div className="flex flex-col gap-4 my-16 px-[var(--horizontal-padding)]">
      <div className="flex self-center my-2">
        <IconLabel label="Pricing" icon={Banknote} bgColor="bg-green-300" />
      </div>

      <HeadingText>
        Simple, Transparent <br />
        Pricing
      </HeadingText>

      <div className="grid grid-cols-3 gap-x-6">
        <PricingCard
          className="col-span-1"
          title="Free"
          price="$0/month"
          description="Ideal for solo users or small teams just getting started."
          buttonText="Get Template"
          features={["1 user", "Basic analytics", "Community support"]}
        />

        <PricingCard
          className="col-span-1"
          title="Pro"
          price="$49/month"
          description="Ideal for solo users or small teams just getting started."
          buttonText="Get Template"
          highlighted
          features={[
            "Up to 10 users",
            "Advanced analytics",
            "Priority support",
            "Unlimited integrations",
          ]}
        />

        <PricingCard
          className="col-span-1"
          title="Enterprise"
          description="Ideal for solo users or small teams just getting started."
          buttonText="Contact Sales"
          features={[
            "Unlimited users",
            "Dedicated account manager",
            "SLA-backed uptime",
            "Custom integrations",
          ]}
        />
      </div>
    </div>
  );
}
