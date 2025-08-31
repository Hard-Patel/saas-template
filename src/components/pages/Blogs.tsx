import { List } from "lucide-react";
import { IconLabel } from "../common/IconLabel";
import { TeamMemberCard } from "../common/TeamMemberCard";
import { HeadingText } from "./HeadingText";
import { BlogCard } from "../common/BlogCard";

export function Blogs() {
  return (
    <div className="flex flex-col gap-4 my-16 px-[var(--horizontal-padding)]">
      <div className="flex self-center my-2">
        <IconLabel label="Blog" icon={List} bgColor="bg-green-300" />
      </div>

      <div className="flex justify-between mt-4">
        <HeadingText>Latest Blogs & Insights</HeadingText>
        <button className="flex items-center py-3 px-4 text-lg text-gray-800 space-x-1 rounded-full hover:bg-[#e0e0e0] hover:outline-0 outline-[#9b9f9e] outline">
          See All Blogs
        </button>
      </div>

      <div className="grid grid-cols-3 gap-x-6 my-12">
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
      </div>
    </div>
  );
}
