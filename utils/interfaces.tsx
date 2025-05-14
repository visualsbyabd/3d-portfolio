import { RefObject } from "react";

export interface BrandingProject {
  title: string;
  description: string;
  type: "IDENTITY" | "LOGO" | "SOCIAL_MEDIA_DESIGNS";
  thumbnail: string;
  href: string;
}

export interface Video {
  title: string;
  description: string;
  platformType: string[];
  thumbnail: string;
  video: string;
  totalViews: number;
  totalLikes: number;
  ref: RefObject<HTMLDivElement | null> | null;
}
