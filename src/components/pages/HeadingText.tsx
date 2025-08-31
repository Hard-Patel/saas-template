import React from "react";

interface HeadingTextProps {
  children: React.ReactNode;
  className?: string; // optional to allow custom styling
}

export const HeadingText: React.FC<HeadingTextProps> = ({
  children,
  className,
}) => {
  return (
    <h1
      className={`text-3xl sm:text-4xl lg:text-5xl font-semibold text-black text-center ${className ?? ""}`}
    >
      {children}
    </h1>
  );
};
