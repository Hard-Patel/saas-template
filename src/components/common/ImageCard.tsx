"use client";

import React from "react";

type ImageCardProps = {
  /** image URL or imported asset */
  imageSrc: string;
  /** main heading shown in the lower panel */
  title: string;
  /** descriptive text shown below the title */
  description?: string;
  /** optional CTA pill text shown in the image area */
  ctaLabel?: string;
  /** optional icon (JSX) to show inside the CTA pill */
  ctaIcon?: React.ReactNode;
  /** extra classes for the outer card */
  className?: string;
};

export const ImageCard: React.FC<ImageCardProps> = ({
  imageSrc,
  title,
  description,
  ctaLabel,
  ctaIcon,
  className = "",
}) => {
  return (
    <article
      className={`w-full max-w-sm rounded-3xl bg-transparent border border-teal-100/10 overflow-hidden ${className}`}
      aria-label={title}
    >
      {/* Top: Image area */}
      <div className="relative max-h-44 md:h-56">
        {/* image covers the area */}
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden
        />
      </div>

      {/* Bottom: Text panel */}
      <div className="px-6 py-5 bg-white/10">
        <h3 className="text-lg md:text-2xl font-semibold text-gray-100 leading-tight">
          {title}
        </h3>

        {description && (
          <p className="mt-1 text-sm md:text-base text-white/60 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </article>
  );
};
