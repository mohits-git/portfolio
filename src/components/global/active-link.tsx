'use client'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
}

const ActiveLink: React.FC<Props> = ({ href, className = "", children }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(`hover:text-gray-200 hover:underline ${className}`, {
        "text-gray-200 underline": pathname === href
      })}
    >
      {children}
    </Link>

  )
}

export default ActiveLink;
