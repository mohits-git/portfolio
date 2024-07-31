'use client';
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import React from "react";

type Props = {
  github: string;
}

const GithubButton: React.FC<Props> = ({ github }) => {
  return (
    <span
      onClick={(e) => {
        e.stopPropagation()
        window.open(github, "_blank");
      }}
      className="ml-3 px-2 py-0.5 text-xs text-slate-200 bg-white/40 rounded-lg">
      <GitHubLogoIcon width={18} height={18} />
    </span>
  )
}

export default GithubButton
