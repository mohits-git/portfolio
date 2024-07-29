import ProjectCard from "@/components/global/project-card";
import React from "react";

type Props = {

}

const Page: React.FC<Props> = () => {
  return (
    <div className="px-4 py-3 lg:pb-24 w-full h-full min-h-[calc(100vh-10vh)] flex flex-col overflow-scroll invisible-scrollbar">
      <h1 className="text-3xl">
        Projects
      </h1>
      <p className="text-slate-300 text-xs md:text-sm">
        These are the small projects, I built while learning.
      </p>
      <p className="text-slate-300 text-xs md:text-sm">
        You can visit any project by running the command `npm run {" <project_name>"}`
      </p>

      <div className="relative mt-3 h-full w-full max-w-6xl scroll-bar grid grid-cols-1 md:grid-cols-2 gap-2">
        <ProjectCard
          name="TaskForge"
          command="docker run task-forge"
          description="A task management web app. Built with Typescript, Next.js, Tailwind, dnd-kit, Shadcn, etc. You can build your Agency. Invite team members. Create and Manage multiple projects with multiple tickets."
          previewUrl="/projects/task-forge.png"
        />
        <ProjectCard
          name="TaskForge"
          command="docker run task-forge"
          description="A task management web app. Built with Typescript, Next.js, Tailwind, dnd-kit, Shadcn, etc. You can build your Agency. Invite team members. Create and Manage multiple projects with multiple tickets."
          previewUrl="/projects/task-forge.png"
        />
        <ProjectCard
          name="TaskForge"
          command="docker run task-forge"
          description="A task management web app. Built with Typescript, Next.js, Tailwind, dnd-kit, Shadcn, etc. You can build your Agency. Invite team members. Create and Manage multiple projects with multiple tickets."
          previewUrl="/projects/task-forge.png"
        />
        <ProjectCard
          name="TaskForge"
          command="docker run task-forge"
          description="A task management web app. Built with Typescript, Next.js, Tailwind, dnd-kit, Shadcn, etc. You can build your Agency. Invite team members. Create and Manage multiple projects with multiple tickets."
          previewUrl="/projects/task-forge.png"
        />
      </div>
    </div>
  )
}

export default Page
