import { Twitch, X } from "lucide-react";
import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiGithub, SiHackerrank, SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const socialIconMap: Record<string, IconType> = {
  linkedin: FaLinkedin,
  github: SiGithub,
  leetcode: SiLeetcode,
  hackerrank: SiHackerrank,
  x: FaXTwitter,
  mail: MdOutlineEmail,
};

export function SocialIcon({ icon }: { icon: string }) {
  const BrandIcon = socialIconMap[icon] ?? MdOutlineEmail;
  return <BrandIcon aria-hidden="true" focusable="false" />;
}
