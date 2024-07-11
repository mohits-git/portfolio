import { ChevronRight, SquareTerminal } from "lucide-react";
import React from "react";

type Props = {

}

const Terminal: React.FC<Props> = () => {
  return (
    <div className="fixed bottom-2 left-0 w-full flex justify-center">
      <div className="mx-2 mr-8 relative min-h-[65px] h-full max-w-5xl w-full py-2 px-1 md:px-2 flex flex-col space-y-1 border rounded-md underline-offset-4 decoration-gray-300">
        <div className="absolute top-2 right-2">
          <SquareTerminal width={30} height={30} />
        </div>

        <p className="text-gray-500">run &apos;help&apos; to get information about the commands</p>

        <div className="relative flex items-center w-full">
          <ChevronRight width={20} height={20} />
          <input
            type="text"
            name="terminal"
            id="terminal"
            className="w-full bg-transparent border-none outline-none focus:outline-none h-[1.5rem]"
          />
        </div>

      </div>
    </div>
  )
}

export default Terminal
