'use client';
import SocialLinks from "@/components/global/social-links";
import StaggeredText from "@/components/staggered-text";
import { PAGES } from "@/constants/pages-links";
import { motion } from "framer-motion";
import Link from "next/link";

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
        <div className="col-span-full lg:col-span-5 flex flex-col lg:items-center justify-center h-full w-full pb-8">
          <h4 className="text-2xl lg:text-xl font-semibold w-full leading-6">
            Hi!
          </h4>
          <div
            className="text-wrap text-sm lg:text-base pt-3 pb-5"
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
          <div className="flex flex-col space-y-3 w-full lg:pr-12">
            {PAGES.slice(1).map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="border border-white px-6 py-3 rounded-lg text-lg flex items-center justify-between space-x-3"
              >
                <span className="shrink-0">
                  {page.text}
                </span>
                <StaggeredText
                  className="text-gray-400 text-sm text-nowrap text-ellipsis overflow-hidden w-64"
                  text={page.cmd}
                  y={0}
                  speed={0.05}
                />
              </Link>
            ))}
          </div>

          <SocialLinks className="w-full my-6 lg:mr-12" />
        </div>

      </div>
    </div>
  );
}
