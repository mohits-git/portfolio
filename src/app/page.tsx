'use client';
import StaggeredText from "@/components/staggered-text";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="px-2 lg:px-6 xl:px-10 w-full h-full flex flex-col items-center">
      <div className="grid grid-cols-12 lg:h-full space-y-10">
        <div className="mt-6 lg:mt-0 col-span-full lg:col-span-7 h-full flex flex-col justify-center">
          <div className="w-full text-center lg:text-left">
            <StaggeredText
              text="Welcome To"
              className="text-[1.75rem] lg:text-[2rem] px-2 mb-2 2xl:mb-5"
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
        <div className="col-span-full lg:col-span-5 flex flex-col lg:items-center justify-center h-full w-full pb-12">
          <h4 className="text-2xl lg:text-xl font-semibold w-full leading-6">
            Hi!
          </h4>
          <div
            className="text-wrap text-sm lg:text-base py-3"
          >
            <StaggeredText
              text={[
                "I'm a full-stack web developer with expertise in JavaScript (TypeScript), building both front-end and back-end of the projects.",
                "I love building cool projects and exploring computer science topics time to time."
              ]}
              speed={0.02}
              y={0}
            />
          </div>
          <div className="flex items-center space-x-4">
          </div>
        </div>

      </div>
    </div>
  );
}
