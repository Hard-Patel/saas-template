import CollapsibleFeaturesSection from "./CollapsibleFeaturesSection";
import UserPopoutSection from "./UserPopoutSection";

export default function FeaturesSection() {
  return (
    <section className="relative h-[75vh] gap-x-12 my-12 overflow-hidden flex items-center bg-gray-50 rounded-[calc(16px+var(--radius-4xl))]">
      {/* Left Accordion */}
      <CollapsibleFeaturesSection />

      {/* Right Image */}
      <UserPopoutSection />
    </section>
  );
}
