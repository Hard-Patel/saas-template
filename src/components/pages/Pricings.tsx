import { Banknote } from "lucide-react";
import { IconLabel } from "../common/IconLabel";
import { PricingCard } from "../common/PricingCardComponents";
import { HeadingText } from "./HeadingText";

export function Pricings() {
  return (
    <section id="pricing" className="py-16">
    <div className="flex flex-col gap-4 px-4 sm:px-8 xl:px-[var(--horizontal-padding)]">
      <div className="flex self-center my-2">
        <IconLabel label="Pricing" icon={Banknote} />
      </div>

      <HeadingText>
        Simple, Transparent <br />
        Pricing
      </HeadingText>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 my-12">
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
    </section>
  );
}
