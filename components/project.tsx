import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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
      <p className="text-3xl font-bold pb-5 border-b-[1px]  dark:border-zinc-800">
        Projects
      </p>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 ">
        {items.map((item) => (
          <Link
            key={item.key}
            className="flex flex-col gap-y-5 border-2 border-white dark:border-black/0 hover:border-blue-400 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-5"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={item.image}
              alt={item.key}
              className=" w-full border dark:border-black/0"
              width={2000}
              height={2000}
            />
            <div>
              <Badge variant={"default"} className=" mb-2 -ml-1">
                {item.tag}
              </Badge>
              <p className="text-lg font-bold pb-1">{item.key}</p>
              <p className="text-sm break-words text-zinc-500 dark:text-zinc-400">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
