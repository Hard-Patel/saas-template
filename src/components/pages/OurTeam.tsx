import { UserRoundCog } from "lucide-react";
import { IconLabel } from "../common/IconLabel";
import { PricingCard } from "../common/PricingCardComponents";
import { HeadingText } from "./HeadingText";
import { TeamMemberCard } from "../common/TeamMemberCard";

export function OurTeam() {
  return (
    <div className="flex flex-col gap-4 my-16 px-[var(--horizontal-padding)]">
      <div className="flex self-center my-2">
        <IconLabel
          label="Our Team"
          icon={UserRoundCog}
          bgColor="bg-green-300"
        />
      </div>

      <HeadingText>
        Meet the People <br />
        Behind SaaS
      </HeadingText>

      <div className="grid grid-cols-3 gap-x-6 my-12">
        <TeamMemberCard
          name="John Doe"
          role="CEO & Co-Founder"
          image="https://framerusercontent.com/images/J1Uq0zRcL2tWoGwpFTKNbTcF3jY.jpg?scale-down-to=1024"
          linkedinUrl="https://www.linkedin.com/in/hard-patel-b0b508215/"
        />
        <TeamMemberCard
          name="Jane Smith"
          role="CTO & Co-Founder"
          image="https://framerusercontent.com/images/w3K7RvE8ZeiQ2ToBm1fM1n4ZU.jpg"
          linkedinUrl="https://www.linkedin.com/in/hard-patel-b0b508215/"
        />
        <TeamMemberCard
          name="Micheal Brown"
          role="Chief Marketing Officer"
          image="https://framerusercontent.com/images/qfdMrWJWRfwVI8Ku7Er8kvQnPAM.jpg"
          linkedinUrl="https://www.linkedin.com/in/hard-patel-b0b508215/"
        />
      </div>
    </div>
  );
}
