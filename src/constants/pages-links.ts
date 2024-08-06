import {
  BriefcaseBusiness,
  Home,
  Mail,
  PencilRuler,
  SquareUser
} from "lucide-react";

export const PAGES = [
  {
    href: "/",
    text: "Home",
    icon: Home,
    cmd: "cd /home/mohitssite/"
  },
  {
    href: "/about",
    text: "About Me",
    icon: SquareUser,
    cmd: "cd /home/mohitssite/about"
  },
  {
    href: "/projects",
    text: "Projects",
    icon: PencilRuler,
    cmd: "cd /home/mohitssite/projects"
  },
  {
    href: "/experience",
    text: "Experience",
    icon: BriefcaseBusiness,
    cmd: "cd /home/mohitssite/experience"
  },
  {
    href: "/contact",
    text: "Contact Me",
    icon: Mail,
    cmd: "cd /home/mohitssite/contact"
  },
] as const;
