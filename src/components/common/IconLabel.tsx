import { LucideIcon, Grid } from "lucide-react";

interface IconLabelProps {
  icon?: LucideIcon; // Lucide icon component
  label: string;
  bgColor?: string; // Tailwind background color (default: green-300)
}

export const IconLabel: React.FC<IconLabelProps> = ({
  icon: Icon = Grid,
  label,
  bgColor = "bg-teal-300",
}) => {
  return (
    <div className="flex items-center gap-3 rounded-full bg-white p-2 shadow-sm">
      <div
        className={`flex items-center justify-center size-10 rounded-full ${bgColor}`}
      >
        <Icon className="size-5 text-black" strokeWidth={2} />
      </div>
      <span className="text-black font-medium pr-2">{label}</span>
    </div>
  );
};
