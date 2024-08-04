import Image from "next/image";
import Link from "next/link";
import React from "react";
import GithubButton from "./github-button";

type Props = {
  name: string;
  command: string;
  description: string;
  previewUrl: string;
  link?: string;
  github: string;
}

const ProjectCard: React.FC<Props> = ({ name, command, description, previewUrl, link, github }) => {
  return (
    <Link href={link || github} target="_blank">
      <div className="col-span-1 h-fit w-full border border-white/20 rounded-lg group/card overflow-hidden">
        <div
          className="cursor-pointer overflow-hidden relative card h-72 rounded-md shadow-xl mx-auto flex flex-col justify-between p-4"
        >
          <Image
            src={previewUrl}
            alt="Project Preview Image"
            fill
            className="object-cover absolute z-0"
          />
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60 bg-gradient-to-t from-black/90 to-black/20" />
          <div className="flex flex-row items-center space-x-4 z-10">
          </div>
          <div className="text content">
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-50 relative z-10 flex items-center">
              {name}
              <code className="ml-3 px-2 py-0.5 text-[0.65rem] leading-4 sm:text-xs text-slate-200 bg-white/40 rounded-lg">
                {command}
              </code>
              {link && (
                <GithubButton github={github} />
              )}

            </h2>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
