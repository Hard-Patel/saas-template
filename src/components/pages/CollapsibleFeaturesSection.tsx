"use client";

import { useState } from "react";
import { TextReveal } from "../common/RevealText";

interface Feature {
  id: number;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Real-Time Analytics",
    description:
      "Gain actionable insights with dynamic reports and custom dashboards. Track KPIs, user activity, and project progress instantly.",
  },
  {
    id: 2,
    title: "Seamless Integrations",
    description:
      "Easily connect with your favorite tools, technologies and services for a smooth workflows across your entire software applications.",
  },
  {
    id: 3,
    title: "Automated Workflows",
    description:
      "Save time with powerful automation that streamlines repetitive tasks and reduces manual work and lets you more focus on what's needed.",
  },
  {
    id: 4,
    title: "Scalable Infrastructure",
    description:
      "Built to grow with your business, ensuring reliability and performance at every stage with our team maintaining everything for you.",
  },
];

export default function CollapsibleFeaturesSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <div className="w-full xl:w-1/2 space-y-4 px-6 pt-8 xl:pt-0">
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={`${
            index != features.length - 1 ? "border-b" : ""
          } border-gray-200 pt-2 pb-8 cursor-pointer`}
          onClick={() => setOpenId(feature.id)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-gray-500 font-semibold">
                {String(feature.id).padStart(2, "0")}.
              </span>
              {feature.title}
            </h3>
          </div>
          {openId === feature.id && (
            <TextReveal
              text={[feature.description]}
              duration={5}
              textClassName="mt-2 text-gray-600 text-lg text-left"
            />
            // <p className="mt-2 text-gray-600 text-lg text-left">
            //   {feature.description}
            // </p>
          )}
        </div>
      ))}
    </div>
  );
}
