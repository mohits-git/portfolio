'use client';
import StaggeredText from "@/components/staggered-text";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="px-10 w-screen h-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 h-full">
        <div className="col-span-2 h-full flex flex-col justify-center">
          <div>
            <StaggeredText
              text="Welcome To"
              className="text-[4rem] px-2 my-5"
            />
          </div>
          <motion.div
            animate={{
              y: ["100%", "0%"],
            }}
            transition={{
              duration: 0.5,
              easings: "easeOut",
            }}
            className="text-[10rem] font-[900] p-0 m-0 leading-[9.75rem] mohit-khatri-hollow"
          >
            Mohit&apos;s Site
          </motion.div>
          <div
            className="text-[10rem] font-[900] leading-[9.75rem] mohit-khatri"
          >
            Mohit&apos;s Site
          </div>
          <motion.div
            animate={{
              y: ["-100%", "0%"],
            }}
            transition={{
              duration: 0.5,
              easings: "easeOut",
            }}
            className="text-[10rem] font-[900] m-0 p-0 leading-[9.75rem] mohit-khatri-hollow"
          >
            Mohit&apos;s Site
          </motion.div>
        </div>
        <div className="col-span-1 flex items-center justify-center h-full w-full flex-col">
          <h4 className="text-2xl font-semibold w-full">
            Yo!!
          </h4>
          <p
            className="text-wrap text-lg"
          >
            <StaggeredText
              text={[
                "I'm a full stack web developer, building with JavaScript (& TypeScript).",
                "I try to build cool stuff and the things which I love or am curious about."
              ]}
              speed={0.02}
              y={0}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
