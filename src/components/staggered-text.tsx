'use client';
import React from "react";
import { motion } from "framer-motion";

type Props = {
  text: string | string[];
  className?: string;
  speed?: number;
  y?: number;
}


const StaggeredText: React.FC<Props> = ({ text, className = "", speed = 0.1, y = 10 }) => {
  const textArray = Array.isArray(text) ? text : [text];
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: speed,
      }
    }
  }
  return (
    <div className={className}>
      <span className="sr-only">
        {text}
      </span>
      <motion.span
        aria-hidden={true}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: speed }}
      >
        {textArray.map((line, index) => (
          <span key={index} className="block">
            {line.split(' ').map((word, index) => (
              <span
                key={index}
                className="inline-block"
              >
                {word.split('').map((ch, index) => (
                  <motion.span
                    key={index}
                    variants={defaultAnimations}
                    className="inline-block"
                  >
                    {ch}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>

            ))}
          </span>
        ))}
      </motion.span>
    </div>
  )
}

export default StaggeredText
