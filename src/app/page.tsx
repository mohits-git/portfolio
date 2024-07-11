'use client';
import StaggeredText from "@/components/staggered-text";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="px-2 lg:px-6 xl:px-10 w-screen h-full flex flex-col items-center overflow-hidden">
      <div className="grid grid-cols-12 lg:h-full space-y-10">
        <div className="col-span-full lg:col-span-7 3xl:col-span-8 h-fit lg:h-full flex flex-col justify-center">
          <div className="w-full text-center lg:text-left">
            <StaggeredText
              text="Welcome To"
              className="text-[1.75rem] lg:text-[2rem] 3xl:text-[2.5rem] px-2 mb-2 2xl:mb-5"
            />
          </div>
          <motion.div
            animate={{
              y: ["100%", "0%"],
            }}
            transition={{
              duration: 0.5,
              easings: "easeIn",
            }}
            className="mohit-khatri-hollow"
          >
            Mohit&apos;s Site
          </motion.div>
          <div
            className="mohit-khatri"
          >
            Mohit&apos;s Site
          </div>
          <motion.div
            animate={{
              y: ["-100%", "0%"],
            }}
            transition={{
              duration: 0.5,
              easings: "easeIn",
            }}
            className="mohit-khatri-hollow"
          >
            Mohit&apos;s Site
          </motion.div>
        </div>
        <div className="col-span-full lg:col-span-5 3xl:col-span-4 flex lg:items-center justify-center h-full w-full flex-col">
          <h4 className="text-2xl lg:text-xl font-semibold w-full">
            Yo!!
          </h4>
          <p
            className="text-wrap  text-sm lg:text-base 3xl:text-lg"
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
