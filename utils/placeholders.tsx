import { BrandingProject, Video } from "./interfaces";

export const generateBrandingProjects = (count: number): BrandingProject[] =>
  Array.from({ length: count }, (_, index) => ({
    title: `Branding Project #${index + 1}`,
    description:
      "A creative project focused on brand identity and visual representation.",
    type:
      index % 3 === 0
        ? "IDENTITY"
        : index % 3 === 1
          ? "LOGO"
          : "SOCIAL_MEDIA_DESIGNS",
    thumbnail: `/branding-projects-thumbnails/branding-${index + 1}.png`,
    href: "#",
  }));

export const generateVideos = (count: number): Video[] =>
  Array.from({ length: count }, (_, index) => ({
    title: `Video #${index + 1}`,
    description:
      "A visually dynamic and engaging video with compelling content.",
    platformType:
      index % 2 === 0 ? ["INSTAGRAM", "TIKTOK"] : ["FACEBOOK", "YOUTUBE"],
    thumbnail: `/videos-thumbnails/video-${index + 1}.jpg`,
    video: `./videos/video-${index + 1}.mp4`,
    totalViews: Math.floor(Math.random() * 100000),
    totalLikes: Math.floor(Math.random() * 10000),
    ref: null,
  }));
