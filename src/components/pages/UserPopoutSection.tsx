"use client";

import {
  BarChart2,
  Brain,
  Calendar,
  ContainerIcon,
  FileText,
  Mail,
  PieChart,
  SquaresExclude,
} from "lucide-react";
import userPopout from "../../assets/user-popout.avif";
import { OrbitingIconRing } from "../common/OrbitingIconRing";

const icons = [
  <Mail key="mail" className="size-6 text-emerald-900" />,
  <Calendar key="cal" className="size-6 text-emerald-900" />,
  <BarChart2 key="bar" className="size-6 text-emerald-900" />,
  <FileText key="file" className="size-6 text-emerald-900" />,
  <SquaresExclude key="squaresexclude" className="size-6 text-emerald-900" />,
  <PieChart key="pie" className="size-6 text-emerald-900" />,
  <Brain key="brain" className="size-6 text-emerald-900" />,
  <ContainerIcon key="container" className="size-6 text-emerald-900" />,
];

export default function UserPopoutSection() {
  return (
    <div className="flex w-1/2 h-full p-4 rounded-[calc(16px+var(--radius-4xl))] bg-green-900 overflow-hidden">
      <div className="relative flex justify-center items-end rounded-4xl bg-green-300 h-full w-full overflow-hidden">
        {/* Circling Background */}
        <OrbitingIconRing icons={icons} />

        {/* User Image */}
        <img
          src={userPopout}
          alt="Feature Illustration"
          className="object-contain h-[90%] relative z-10"
        />
      </div>
    </div>
  );
}
