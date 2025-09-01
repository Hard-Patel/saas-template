import { List } from "lucide-react";
import { BlogCard } from "../common/BlogCard";
import { IconLabel } from "../common/IconLabel";
import { HeadingText } from "./HeadingText";

export function BlogsPageSection() {
  return (
    <div className="flex flex-col gap-4 my-16 px-4 sm:px-8 xl:px-[var(--horizontal-padding)]">
      <div className="flex self-start xl:self-center my-2">
        <IconLabel label="Blog" icon={List} bgColor="bg-green-300" />
      </div>

      <div className="flex-col justify-center items-center mt-4">
        <HeadingText>Explore Our Latest Insights</HeadingText>
        <p className="text-lg mt-3">
          Get the latest insights to fuel your next big move.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        <BlogCard
          title="The Ultimate Guide to SaaS Marketing"
          date="Mar 23, 2025"
          image="https://framerusercontent.com/images/9MQ1Hpx0W74VJyRjndKmW6sfjQ.jpeg?scale-down-to=4096"
        />
        <BlogCard
          title="5 Key Trends in SaaS Growth for 2025"
          date="Mar 16, 2025"
          image="https://framerusercontent.com/images/aqb4i2Xnjk4rFn0hGPZcShIM.jpeg?scale-down-to=4096"
        />
        <BlogCard
          title="How Data-Driven Strategies Are important"
          date="Feb 16, 2025"
          image="https://framerusercontent.com/images/0gJcIDKqMnPvyoCqsq9SAsnN94.jpg"
        />
        <BlogCard
          title="The Power of Content Marketing in SaaS"
          date="Feb 6, 2025"
          image="https://framerusercontent.com/images/zTxeuFAIL6rdv2bMPAAttBm5MBY.png"
        />
        <BlogCard
          title="Leveraging SEO for SaaS Success"
          date="Feb 12, 2025"
          image="https://framerusercontent.com/images/AjUziKOKbXA71L4fSRvPvnHgyRg.png"
        />
      </div>
    </div>
  );
}
