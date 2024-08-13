"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skillImage } from "./config/images";

const items = [
  { name: skillImage.JavaScript, title: "JavaScript" },
  { name: skillImage.TypeScript, title: "TypeScript" },
  { name: skillImage.HTML, title: "HTML" },
  { name: skillImage.CSS, title: "CSS" },
  { name: skillImage.React, title: "React" },
  { name: skillImage.Redux, title: "Redux" },
  { name: skillImage.NextJS, title: "Next JS" },
  { name: skillImage.NodeJS, title: "Node JS" },
  { name: skillImage.Express, title: "Express JS" },
  { name: skillImage.TailwindCSS, title: "Tailwind CSS" },
  { name: skillImage.MUI, title: "Material UI" },
  { name: skillImage.StyledComponents, title: "Styled" },
  { name: skillImage.FramerMotion, title: "Framer Motion" },
  { name: skillImage.Vite, title: "Vite" },
  { name: skillImage.Bun, title: "Bun" },
  { name: skillImage.Figma, title: "Figma" },
  { name: skillImage.Git, title: "Version Control" },
  { name: skillImage.Jira, title: "Jira" },
];

export default function Skill() {
  return (
    <div id="skills" className="flex flex-col gap-y-5 pt-28">
      <p className="text-3xl font-bold pb-5 border-b-[1px]  dark:border-zinc-800">
        Skills
      </p>
      <div className="flex flex-wrap justify-center gap-20 py-5 ">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              key={index}
              src={item.name}
              alt={item.title}
              width={256}
              height={256}
              className="size-14"
            />
            <p className="text-center text-xs font-medium text-nowrap absolute pt-[70px]">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
