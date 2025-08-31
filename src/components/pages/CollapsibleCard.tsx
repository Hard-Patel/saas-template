import CollapsibleFeaturesSection from "./CollapsibleFeaturesSection";
import UserPopoutSection from "./UserPopoutSection";

export default function FeaturesSection() {
  return (
    <section className="flex flex-col xl:flex-row items-center relative xl:h-[75vh] gap-x-12 my-12 overflow-hidden bg-gray-50 rounded-[calc(16px+var(--radius-4xl))]">
      {/* Left Accordion */}
      <CollapsibleFeaturesSection />

      {/* Right Image */}
      <UserPopoutSection />
    </section>
  );
}
