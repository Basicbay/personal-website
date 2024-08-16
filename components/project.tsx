"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface ProjectItem {
  image: string;
  key: string;
  desc: string;
  tag: string;
  link: string;
}

interface ProjectListProps {
  items: ProjectItem[];
}

const Project: React.FC<ProjectListProps> = ({ items }) => {
  return (
    <div id="projects" className="flex flex-col gap-y-5 pt-28">
      <p className="text-3xl font-bold pb-5 border-b-[1px] dark:border-zinc-800">
        Projects
      </p>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item,index) => (
          <motion.div
            key={item.key}
          >
            <Link
              href={item.link}
              target={twMerge(index === 1 ? "_self" : ("_blank"))}
              rel="noopener noreferrer"
              className="flex flex-col gap-y-5 border-2 border-white dark:border-black/0 lg:hover:border-blue-400 lg:dark:hover:border-blue-400 lg:hover:bg-blue-50 lg:dark:hover:bg-blue-900/20 py-5 sm:px-5"
            >
              <div className="relative overflow-hidden border dark:border-zinc-800">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={item.image}
                    alt={item.key}
                    width={2000}
                    height={2000}
                  />
                </motion.div>
              </div>
              <div>
                <div className="flex gap-x-2">
                  <Badge variant={"default"} className="mb-2 -ml-1">
                    {item.tag}
                  </Badge>
                  <p className="text-lg font-bold pb-1">{item.key}</p>
                </div>
                <p className="text-sm break-words text-zinc-500 dark:text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
