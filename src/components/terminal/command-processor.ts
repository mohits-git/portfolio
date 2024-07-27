import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React from "react";
import { CommandsHistoryType } from ".";

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
