import React from "react";

type Props = {

}

const Page: React.FC<Props> = () => {
  return (
    <div className="px-4 py-3 w-full h-full max-h-[calc(100vh-10vh)] flex flex-col">
      <h1 className="text-3xl">
        Projects
      </h1>
      <p className="text-slate-300 text-xs md:text-sm">
        These are the small projects, I built while learning.
      </p>
      <p className="text-slate-300 text-xs md:text-sm">
        You can visit any project by running the command `npm run {" <project_name>"}`
      </p>

      <div className="relative mt-3 h-full w-full max-w-6xl overflow-y-auto scroll-bar grid grid-cols-1 lg:grid-cols-2 gap-2">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default Page

type ProjectCardProps = {

}

const ProjectCard: React.FC<ProjectCardProps> = () => {
  return (
    <div className="col-span-1 bg-red-200 h-fit w-full">
      <h3 className="">TaskForge</h3>
    </div>
  )
}
