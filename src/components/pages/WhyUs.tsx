import article1 from "../../assets/article-1.avif";
import article2 from "../../assets/article-2.avif";
import article3 from "../../assets/article-3.avif";
import { ImageCard } from "../common/ImageCard";
import { HeadingText } from "./HeadingText";

export function WhyUs() {
  return (
    <div className="flex justify-center w-full py-12 min-h-[100vh] bg-teal-900">
      <div className="h-full w-full flex flex-col justify-center px-4 sm:px-8 xl:px-[var(--horizontal-padding)] gap-y-12">
        <HeadingText className="xl:text-left text-white">
          Why Choose SaaS?
        </HeadingText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 text-left items-center">
          <ImageCard
            title="SignUp & Onboard"
            description="Create an account to receive a customized onboarding experience."
            imageSrc={article1}
            className="col-span-1"
          />
          <ImageCard
            title="Customize & Integrate"
            description="Choose from a library of integrations to sync data and unify your workflow."
            imageSrc={article2}
            className="col-span-1"
          />
          <ImageCard
            title="Automate & Scale"
            description="Set your automations, track metrics, and watch productivity skyrocket."
            imageSrc={article3}
            className="col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
