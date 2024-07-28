import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DownloadButton } from "./download-button";
import ActiveLink from "./active-link";
import { PAGES } from "@/constants/pages-links";

const AppBar: React.FC = () => {
  return (
    <div className="fixed top-2 left-0 w-full flex justify-center z-10">
      <div className="mx-2 max-w-6xl w-full py-3 px-3 md:px-6 flex justify-between items-center border rounded-md underline-offset-4 decoration-gray-300 bg-black">
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
          {PAGES.map((page, index) => (
            <ActiveLink
              key={index}
              href={page.href}
              className="flex items-center gap-2"
            >
              <page.icon />
              <span className="hidden lg:block text-sm">{page.text}</span>
            </ActiveLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`${process.env.NEXT_PUBLIC_RESUME_DRIVE_LINK}`}
            className="hover:underline hover:text-gray-200"
          >
            <span className="hidden lg:block">Resume</span>
          </Link>
          <DownloadButton />
        </div>
      </div>
    </div>
  )
}

export default AppBar;
