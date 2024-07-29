'use client';
import { ChevronRight, SquareTerminal } from "lucide-react";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import commandProcessor from "./command-processor";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

export type CommandsHistoryType = {
  cmd: string;
  response?: string;
  error?: boolean;
}[];

const Terminal: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [command, setCommand] = useState<string>('');
  const [commandsHistory, setCommandsHistory] = useState<CommandsHistoryType>([]);

  const commandInputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const navigate = useRouter();

  const handleCommand = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    commandProcessor(command, setCommandsHistory, pathname, navigate);
    setCommand('');
  }

  const handleFocus = () => {
    commandInputRef.current?.focus();
    setActive(true);
  }

  const scrollToView = () => {
    terminalEndRef?.current?.scrollIntoView({
      behavior: 'instant', block: 'end'
    });
  }

  useEffect(() => {
    const timeoutId = setTimeout(scrollToView, 350);
    scrollToView();
    return () => clearTimeout(timeoutId);
  }, [commandsHistory, active])

  useEffect(() => {
    let controlKeyPressed = false;
    const handleEscKeyClick = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(false);
      } else if (e.key === "Control") {
        controlKeyPressed = true;
        return;
      } else if (e.key === "l" && controlKeyPressed) {
        setCommandsHistory([]);
      }
      controlKeyPressed = false;
    }

    const handleOutsideClick = (e: MouseEvent) => {
      // @ts-ignore
      if (terminalRef?.current && !terminalRef.current.contains(e.target)) {
        setActive(false);
      }
    }
    document.addEventListener('keydown', handleEscKeyClick);
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('keydown', handleEscKeyClick);
      document.removeEventListener('click', handleOutsideClick);
    }
  }, []);

  return (
    <div className="fixed bottom-2 left-0 w-full flex justify-center z-10">
      <div
        className={cn("mx-2 relative min-h-[65px] overflow-y-scroll scroll-bar max-w-6xl w-full py-2 px-1 md:px-2 flex flex-col space-y-1 border rounded-md underline-offset-4 decoration-gray-300 bg-black", {
          'max-h-[100px]': !active,
          'max-h-[500px]': active
        })}
        onClick={handleFocus}
        ref={terminalRef}
      >
        <div className="absolute top-2 right-2">
          <SquareTerminal width={30} height={30} />
        </div>

        <p className="text-gray-500 px-0.5 text-xs md:text-sm lg:text-base">
          run &apos;help&apos; to get more information (press {" 'esc' "} to minimize)
        </p>

        <div
          className=""
        >
          {commandsHistory.map((cmd, index) => (
            <div
              key={index}
              className="flex flex-col"
            >
              <div
                className="text-gray-200 text-wrap flex items-center overflow-hidden"
              >
                <ChevronRight width={20} height={20} />
                <pre>
                  {cmd.cmd.split(' ').map((word, index) => (
                    <span
                      key={index}
                      className={cn({
                        "text-red-400": index === 0 && cmd.error,
                        "text-green-400": index === 0 && !cmd.error
                      })}
                    >{word}{" "}</span>
                  ))}
                </pre>
              </div>
              {cmd.response && (
                <div
                  className="text-gray-300 text-wrap flex items-center overflow-hidden"
                >
                  <pre>
                    {cmd.response}
                  </pre>
                </div>
              )}
            </div>
          ))}
          <div
            className="relative flex items-center text-wrap overflow-hidden"
          >
            <ChevronRight width={20} height={20} />
            <form
              onSubmit={handleCommand}
              className="inline"
            >
              <input
                style={{
                  "caretColor": "transparent"
                }}
                type="text"
                name="terminal"
                id="terminal"
                className="w-[1px] text-black bg-transparent border-none outline-none focus:outline-none h-[1.5rem]"
                value={command}
                onChange={(e) => {
                  setCommand(e.target.value);
                }}
                ref={commandInputRef}
                autoFocus
                autoComplete="off"
              />
            </form>
            <div
              className="text-wrap w-fit"
            >
              <pre className="text-wrap">
                {command}
                <span className="h-[1.2rem] my-auto bg-white animate-cursor">
                  {" "}
                </span>
              </pre>
            </div>
          </div>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div >
  )
}

export default Terminal
