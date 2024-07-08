'use client';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center">
      <motion.div
        animate={{
          y: ["100%", "0%"],
        }}
        transition={{
          duration: 0.5,
          easings: "easeIn",
        }}
        className="text-[10rem] font-[900]"
      >
        Mohit&apos;s Site
      </motion.div>
      <div
        className="text-[10rem] font-[900]"
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
        className="text-[10rem] font-[900] m-0 p-0"
      >
        Mohit&apos;s Site
      </motion.div>
    </div>
  );
}
