'use client';
import { cn } from "@/lib/utils";
import React from "react";
import Discord from "@/components/logos/discord";
import Leetcode from "@/components/logos/leetcode";
import X from "@/components/logos/x";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Linkedin } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  className?: string;
}

const defaultAnimation = {
  start: {
    y: "10%",
    opacity: 0,
    scale: 0,
  },
  end: {
    y: "0",
    opacity: 1,
    scale: 1,
  },
}

const SocialLinks: React.FC<Props> = ({ className = "" }) => {
  return (
    <>
      <motion.div
        initial="start"
        whileInView="end"
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          staggerChildren: 0.1,
          duration: 0.25,
        }}
        className={cn(`flex justify-center items-center space-x-3`, className)}>
        <motion.div
          variants={defaultAnimation}
        >
          <Link
            target="_blank"
            href={'https://github.com/mohits-git'}
            className="rounded-full border p-2 w-10 h-10 flex items-center justify-center"
          >
            <GitHubLogoIcon width={20} height={20} />
          </Link>
        </motion.div>
        <motion.div
          variants={defaultAnimation}
        >
          <Link
            target="_blank"
            href={'https://x.com/mohits_twt'}
            className="rounded-full border p-2 w-10 h-10 flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </Link>
        </motion.div>
        <motion.div
          variants={defaultAnimation}
        >
          <button
            onClick={() => {
              try {
                window
                  .navigator
                  .clipboard
                  .writeText("mohits-disc")
                  .then(() => {
                    toast("Discord Username copied to clipboard. Add me on Discord. Let's have a chat...", {
                      duration: 4000,
                    });
                  });
              } catch (error) {
                toast("Couldn't copy to clipboard. nm, add me on discord username: 'mohits-disc'... Let's have a chat :)", {
                  duration: 5000,
                });
              }
            }}
            className="rounded-full border p-2 w-10 h-10 flex items-center justify-center"
          >
            <Discord className="w-5 h-5" />
          </button>
        </motion.div>
        <motion.div
          variants={defaultAnimation}
        >
          <Link
            target="_blank"
            href={'https://linkedin.com/in/mohits-in'}
            className="rounded-full border p-2 w-10 h-10 flex items-center justify-center"
          >
            <Linkedin width={20} height={20} />
          </Link>
        </motion.div>
        <motion.div
          variants={defaultAnimation}
        >
          <Link
            target="_blank"
            href={'https://leetcode.com/u/mohits-lc/'}
            className="rounded-full border p-2 w-10 h-10 flex items-center justify-center"
          >
            <Leetcode className="w-5 h-5 text-white" />
          </Link>
        </motion.div>
      </motion.div>
    </>
  )
}

export default SocialLinks
