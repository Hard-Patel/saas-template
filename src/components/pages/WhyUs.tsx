import { ImageCard } from "../common/ImageCard";
import { HeadingText } from "./HeadingText";
import article1 from "../../assets/article-1.avif";
import article2 from "../../assets/article-2.avif";
import article3 from "../../assets/article-3.avif";

export function WhyUs() {
  return (
    <div className="w-full h-[100vh] bg-teal-900 flex justify-center">
      <div className="h-full w-full flex flex-col justify-center px-[var(--horizontal-padding)] gap-y-12">
        <HeadingText className="text-left text-white">
          Why Choose SaaS?
        </HeadingText>

        <div className="flex justify-between text-left items-center">
          <ImageCard
            title="SignUp & Onboard"
            description="Create an account to receive a customized onboarding experience."
            imageSrc={article1}
          />
          <ImageCard
            title="Customize & Integrate"
            description="Choose from a library of integrations to sync data and unify your workflow."
            imageSrc={article2}
          />
          <ImageCard
            title="Automate & Scale"
            description="Set your automations, track metrics, and watch productivity skyrocket."
            imageSrc={article3}
          />
        </div>
      </div>
    </div>
  );
}
