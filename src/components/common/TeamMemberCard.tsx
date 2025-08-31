import { FC } from "react";
import { Linkedin } from "lucide-react";

type TeamMemberCardProps = {
  name: string;
  role: string;
  image: string;
  linkedinUrl: string;
};

export const TeamMemberCard: FC<TeamMemberCardProps> = ({
  name,
  role,
  image,
  linkedinUrl,
}) => {
  return (
    <a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
    >
      {/* Profile image */}
      <div className="w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="text-left">
          <h3 className="text-xl font-bold text-black">{name}</h3>
          <p className="text-[16px] text-gray-800">{role}</p>
        </div>

        <div className="bg-lime-200 p-2 rounded-full">
          <Linkedin size={18} className="text-black" />
        </div>
      </div>
    </a>
  );
};
