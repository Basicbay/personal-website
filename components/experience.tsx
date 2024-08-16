/* eslint-disable react/jsx-key */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";
import { twMerge } from "tailwind-merge";

interface ExperienceItem {
  img: string;
  key: string;
  desc: String;
  date: string;
  link: string;
}

interface ExperienceListProps {
  items: ExperienceItem[];
}

const Experience: React.FC<ExperienceListProps> = ({ items }) => {
  return (
    <div id="experience" className="flex flex-col gap-y-5 pt-28">
      <p className="text-3xl font-bold pb-5 border-b-[1px]  dark:border-zinc-800">
        Experience
      </p>
      <ol className="grid lg:grid-cols-2">
        {items.map((item,index) => (
          <Link
            href={item.link}
            target={twMerge(index === 3 ? "_self" : ("_blank"))}
            rel="noopener noreferrer"
            className="flex items-center gap-x-12 sm:gap-x-32 border-2 border-white dark:border-black/0 lg:hover:border-blue-400 lg:dark:hover:border-blue-400 lg:hover:bg-blue-50 lg:dark:hover:bg-blue-900/20 sm:px-10 py-5">
            <Image
              src={item.img}
              alt={item.img}
              width={626}
              height={626}
              className="border dark:border-black/0 size-24"
            />
            <div>
              <h3 className=" font-semibold text-nowrap ">{item.key}</h3>
              <p className=" text-zinc-500 dark:text-zinc-400 pb-2">
                {item.desc}
              </p>
              <Badge variant={"outline"} className="-ml-1">
                {item.date}
              </Badge>
            </div>
          </Link>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
