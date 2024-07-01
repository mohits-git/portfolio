import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DownloadButton } from "./download-button";
import { BriefcaseBusiness, FileText, Home, Mail, PencilRuler, SquareUser } from "lucide-react";
import ActiveLink from "./active-link";

const AppBar: React.FC = () => {
  return (
    <div className="fixed top-2 left-0 w-full flex justify-center">
      <div className="max-w-7xl w-full py-3 px-3 md:px-6 flex justify-between items-center border rounded-md underline-offset-4 decoration-gray-300">
        <Link
          href={'/'}
          className={`w-10 h-10 md:w-12 md:h-12 relative rounded-full overflow-hidden`}
        >
          <Image
            src={"/avatar.jpeg"}
            alt={"Avatar"}
            fill
            className="absolute object-cover h-full w-full"
          />
        </Link>

        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-10">
          <ActiveLink
            href="/"
            className="flex items-center gap-2"
          >
            <Home />
            <span className="hidden lg:block text-sm">Home</span>
          </ActiveLink>
          <ActiveLink
            href="/about"
            className="flex items-center gap-2"
          >
            <SquareUser />
            <span className="hidden lg:block text-sm">About Me</span>
          </ActiveLink>
          <ActiveLink
            href="/projects"
            className="flex items-center gap-2"
          >
            <PencilRuler />
            <span className="hidden lg:block text-sm">Projects</span>
          </ActiveLink>
          <ActiveLink
            href="/experience"
            className="flex items-center gap-2"
          >
            <BriefcaseBusiness />
            <span className="hidden lg:block text-sm">Experience</span>
          </ActiveLink>
          <ActiveLink
            href="/contact"
            className="flex items-center gap-2"
          >
            <Mail />
            <span className="hidden lg:block text-sm">Contact</span>
          </ActiveLink>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`${process.env.NEXT_PUBLIC_RESUME_DRIVE_LINK}`}
            className="hover:underline hover:text-gray-200"
          >
            <span className="hidden lg:block">Resume</span>
            <span className="lg:hidden" aria-label="Resume" title="Resume"><FileText /></span>
          </Link>
          <DownloadButton />
        </div>
      </div>
    </div>
  )
}

export default AppBar;
