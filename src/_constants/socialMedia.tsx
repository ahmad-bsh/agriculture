import { Twitter } from "@/_icons/social-media/Twitter";
import { Facebook } from "@/_icons/social-media/Facebook";
import { Pinterest } from "@/_icons/social-media/Pinterest";
import { Instagram } from "@/_icons/social-media/Instagram";

export interface ISocialMediaLink {
  link: string;
  icon: React.ReactNode;
}

export const socialMedia: Array<ISocialMediaLink> = [
  {
    link: "https://twitter.com",
    icon: <Twitter />,
  },
  {
    link: "https://facebook.com",
    icon: <Facebook />,
  },
  {
    link: "https://google.com",
    icon: <Pinterest />,
  },
  {
    link: "https://instagram.com",
    icon: <Instagram />,
  },
];
