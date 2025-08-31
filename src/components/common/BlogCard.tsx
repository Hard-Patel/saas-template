import { FC } from "react";

type BlogCardProps = {
  title: string;
  date: string;
  image: string;
};

export const BlogCard: FC<BlogCardProps> = ({ title, date, image }) => {
  return (
    <div className="overflow-hidden cursor-pointer max-w-md group">
      {/* Image Wrapper */}
      <div className="relative rounded-xl w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-3 text-left">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
          {title}
        </h3>
        <p className="text-[16px] text-gray-500 mt-1">{date}</p>
      </div>
    </div>
  );
};
