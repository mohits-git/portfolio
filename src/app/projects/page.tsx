import ProjectCard from "@/components/global/project-card";
import SocialLinks from "@/components/global/social-links";
import React from "react";

type Props = {

}

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
            name={project.name}
            command={project.command}
            description={project.description}
            previewUrl={project.previewUrl}
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

const PROJECTS = [
  {
    name: "TaskForge",
    command: "docker run task-forge",
    description: "A task management web app. Built with Typescript, Next.js, Tailwind, dnd-kit, Shadcn, etc. You can build your Agency. Invite team members. Create and Manage multiple projects with multiple tickets.",
    previewUrl: "/projects/task-forge.png"
  },
  {
    name: "ChatApp",
    command: "docker run chat-app",
    description: "A chat application. Built with JavaScript, React.js, Tailwind CSS, Node.js, Socket.io, etc. You can chat with anyone in real-time.",
    previewUrl: "/projects/chat-app.png"
  },
  {
    name: "StaticFusion",
    command: "python3 src/main.py",
    description: "A static site generator. Built with Python. You can create a static website by writing markdown files, by easily converting your markdown files into html files (static stite) with Static Fusion.",
    previewUrl: "/projects/static-fusion.png"
  },
  {
    name: "MazeQuest",
    command: "bash maze-quest/main.sh",
    description: "A Python GUI with Tkinter to build random mazes and solve with multiple algorithms. You can build random mazes customizing size of the maze. And solve the maze using DFS, BFS or A* search algorithm.",
    previewUrl: "/projects/maze-quest.png"
  },
  {
    name: "Git TS",
    command: "git-ts init",
    description: "A simple git cli tool. Built with TypeScript. You can initialise a git repository, add files, hash blobs, trees, commits, view commits/objects contents, etc.",
    previewUrl: "/projects/git-ts.png"
  },
  {
    name: "HTTP Server TS",
    command: "./http-server-ts.sh",
    description: "A simple http server built with TypeScript. You can listen to requests, parse requests, send responses, etc. This HTTP server is built using the Net | Node module, to create stream-based TCP servers.",
    previewUrl: "/projects/http-server-ts.png"
  }
]
