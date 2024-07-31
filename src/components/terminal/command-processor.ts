import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React from "react";
import { CommandsHistoryType } from ".";
import { COMMANDS, PROJECTS } from "@/constants/projects";

const commandProcessor = (
  command: string,
  setCommandsHistory: React.Dispatch<
    React.SetStateAction<CommandsHistoryType>
  >,
  pathname: string,
  navigate: AppRouterInstance,
) => {
  const input = command.trim().toLowerCase().split(' ');
  const cmd = input[0];
  const args = input.slice(1);
  switch (cmd) {
    case "help":
      setCommandsHistory((prevHistory) => [
        ...prevHistory,
        {
          cmd: command,
          response: help
        }
      ]);
      break;
    case "clear":
      setCommandsHistory([]);
      break;
    case "pwd":
      setCommandsHistory((prevHistory) => [
        ...prevHistory,
        {
          cmd: command,
          response: `/home/mohitssite${pathname}`
        }
      ])
      break;
    case "cd":
      let page = args[0]?.split('/')?.pop()
      if (args[0] === '/') page = "/"
      if (page !== undefined) {
        if (page === "~") page = "/";
        navigate.push(`/${page}`);
      } else {
        navigate.push(`/`);
      }
      setCommandsHistory((prevHistory) => [
        ...prevHistory,
        { cmd: command }
      ]);
      break;
    case COMMANDS.includes(command) ? cmd : "break":
      if (cmd !== "break") {
        const project = PROJECTS.find((project) => project.command === command);
        if(!project) return;
        setCommandsHistory((prevHistory) => [
          ...prevHistory,
          {
            cmd: command,
            response: `Opening ${project.name}...`,
            error: false
          }
        ]);
        setTimeout(() => {
          window.open(project?.link || project.github, "_blank");
        }, 1500);
        break;
      }
    default:
      setCommandsHistory((prevHistory) => [
        ...prevHistory,
        {
          cmd: command,
          response: `zsh: command not found: ${command}`,
          error: true
        }
      ]);
  }
}

export default commandProcessor;


const help = `  # Commands:-
  clear               Clear Terminal
  pwd                 Print working directory (current page)
  cd                  To navigate between pages

  # KeyBoard Shortcuts:-
  control-L           Clear Terminal
  esc                 Minimize Terminal
`
