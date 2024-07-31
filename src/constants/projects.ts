export const PROJECTS = [
  {
    name: "TaskForge",
    command: "docker run task-forge",
    description: "A task management web app. Built with Typescript, Next.js, Tailwind, dnd-kit, Shadcn, etc. You can build your Agency. Invite team members. Create and Manage multiple projects with multiple tickets.",
    previewUrl: "/projects/task-forge.png",
    link: "https://task-forge-flax.vercel.app",
    github: "https://github.com/mohits-git/task-forge"
  },
  {
    name: "ChatApp",
    command: "docker run chat-app",
    description: "A chat application. Built with JavaScript, React.js, Tailwind CSS, Node.js, Socket.io, etc. You can chat with anyone in real-time.",
    previewUrl: "/projects/chat-app.png",
    link: "https://chat-app-delta-murex.vercel.app/",
    github: "https://github.com/mohits-git/chat-app"
  },
  {
    name: "StaticFusion",
    command: "python3 src/main.py",
    description: "A static site generator. Built with Python. You can create a static website by writing markdown files, by easily converting your markdown files into html files (static stite) with Static Fusion.",
    previewUrl: "/projects/static-fusion.png",
    github: "https://github.com/mohits-git/static-fusion"
  },
  {
    name: "MazeQuest",
    command: "bash maze-quest/main.sh",
    description: "A Python GUI with Tkinter to build random mazes and solve with multiple algorithms. You can build random mazes customizing size of the maze. And solve the maze using DFS, BFS or A* search algorithm.",
    previewUrl: "/projects/maze-quest.png",
    github: "https://github.com/mohits-git/maze-quest"
  },
  {
    name: "Git TS",
    command: "git-ts init",
    description: "A simple git cli tool. Built with TypeScript. You can initialise a git repository, add files, hash blobs, trees, commits, view commits/objects contents, etc.",
    previewUrl: "/projects/git-ts.png",
    github: "https://github.com/mohits-git/git-ts"
  },
  {
    name: "HTTP Server TS",
    command: "./http-server-ts.sh",
    description: "A simple http server built with TypeScript. You can listen to requests, parse requests, send responses, etc. This HTTP server is built using the Net | Node module, to create stream-based TCP servers.",
    previewUrl: "/projects/http-server-ts.png",
    github: "https://github.com/mohits-git/http-server-ts"
  }
]

export const COMMANDS = [
  "docker run task-forge",
  "docker run chat-app",
  "python3 src/main.py",
  "bash maze-quest/main.sh",
  "git-ts init",
  "./http-server-ts.sh"
];
