import { FacebookIcon, Twitter, Instagram, Youtube } from "lucide-react";

export const getIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "facebook":
      return FacebookIcon;
    case "twitter":
    case "x":
      return Twitter;
    case "instagram":
      return Instagram;
    case "youtube":
      return Youtube;
    default:
      return null;
  }
};
