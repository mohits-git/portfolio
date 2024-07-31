import ProjectCard from "@/components/global/project-card";
import SocialLinks from "@/components/global/social-links";
import { PROJECTS } from "@/constants/projects";
import React from "react";

const Page: React.FC<Props> = () => {
  return (
    <div className="px-4 py-3 lg:pb-8 w-full h-full min-h-[calc(100vh-10vh)] flex flex-col overflow-scroll invisible-scrollbar">
      <h1 className="text-3xl">
        Projects
      </h1>
      <p className="text-slate-300 text-xs md:text-sm">
        These are the small projects, I built while learning.
      </p>
      <p className="text-slate-300 text-xs md:text-sm">
        You can visit any project by running the command `npm run {" <project_name>"}`
      </p>

      <div className="relative mt-3 h-full w-full max-w-6xl scroll-bar grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3 lg:gap-y-4">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.name}
            {...project}
          />
        ))}
      </div>

      <div className="w-full flex flex-col justify-center items-center space-y-2 mt-8">
        <p className="text-slate-300 text-xs md:text-sm">
          I have built a lot of small stupid ass projects. All of them are on {" "}
          <a
            href="https://github.com/mohits-git"
            target="_blank"
            className="hover:text-blue-300 underline"
          >github</a>.
        </p>
        <SocialLinks />
      </div>
    </div>
  )
}

export default Page
