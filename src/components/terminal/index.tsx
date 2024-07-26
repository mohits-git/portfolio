'use client';
import { ChevronRight, SquareTerminal } from "lucide-react";
import React, { useState } from "react";

type Props = {

}

const Terminal: React.FC<Props> = () => {
  const [command, setCommand] = useState<string>('');
  return (
    <div className="fixed bottom-2 left-0 w-full flex justify-center z-10">
      <div className="mx-2 relative min-h-[65px] h-full max-w-5xl w-full py-2 px-1 md:px-2 flex flex-col space-y-1 border rounded-md underline-offset-4 decoration-gray-300 bg-black">
        <div className="absolute top-2 right-2">
          <SquareTerminal width={30} height={30} />
        </div>

        <p className="text-gray-500 px-0.5 text-xs md:text-sm lg:text-base">
          run &apos;help&apos; to get information about the commands
        </p>

        <div className="relative flex items-center text-wrap overflow-hidden">
          <ChevronRight width={20} height={20} />
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
            autoFocus
          />
          <div
            className="text-wrap w-fit"
          >
            <pre className="text-wrap">
              {command}
            </pre>
          </div>
          <span className="w-[7px] h-[1.2rem] my-auto bg-white animate-cursor">
          </span>
        </div>

      </div>
    </div >
  )
}

export default Terminal
