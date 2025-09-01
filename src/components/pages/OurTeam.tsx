import { UserRoundCog } from "lucide-react";
import { IconLabel } from "../common/IconLabel";
import { TeamMemberCard } from "../common/TeamMemberCard";
import { HeadingText } from "./HeadingText";

export function OurTeam() {
  return (
    <div className="flex flex-col gap-4 my-16 px-4 sm:px-8 xl:px-[var(--horizontal-padding)]">
      <div className="flex self-center my-2">
        <IconLabel
          label="Our Team"
          icon={UserRoundCog}
        />
      </div>

      <HeadingText>
        Meet the People <br />
        Behind SaaS
      </HeadingText>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
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
