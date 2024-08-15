/* eslint-disable react/jsx-key */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

interface EducationItem {
  img: string;
  key: string;
  desc: String;
  date: string;
  link: string;
}

interface EducationListProps {
  items: EducationItem[];
}

const Education: React.FC<EducationListProps> = ({ items }) => {
  return (
    <div id="education" className="flex flex-col gap-y-5 pt-28">
      <p className="text-3xl font-bold pb-5 border-b-[1px]  dark:border-zinc-800">
        Education
      </p>
      <ol className="grid lg:grid-cols-2">
        {items.map((item) => (
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-12 sm:gap-x-32 border-2 border-white dark:border-black/0 lg:hover:border-blue-400 lg:dark:hover:border-blue-400 lg:hover:bg-blue-50 lg:dark:hover:bg-blue-900/20 sm:px-10 py-5">
            <Image
              src={item.img}
              alt={item.img}
              width={140}
              height={140}
              className=" w-24"
            />
            <div>
              <h3 className=" font-semibold text-nowrap">{item.key}</h3>
              <p className=" text-zinc-500 dark:text-zinc-400 pb-2 ">
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

export default Education;
