import { type ClassValue, clsx } from "clsx";
import {
  Codesandbox,
  Dribbble,
  Facebook,
  Figma,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind classes conditionally.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getBrandIcon = (brand: string) => {
  switch (brand.toLowerCase()) {
    case "figma":
      return Figma;
    case "linkedin":
      return Linkedin;
    case "facebook":
      return Facebook;
    case "dribble":
      return Dribbble;
    case "twitter":
      return Twitter;
    case "youtube":
      return Youtube;
    case "instagram":
      return Instagram;
    case "code sandbox":
      return Codesandbox;

    default:
      return Instagram;
  }
};
