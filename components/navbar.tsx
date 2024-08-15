import React from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";

import { Slidebar } from "./slidebar";
import Link from "next/link";
import { MenuList } from "./ui/menuList";

export default function Navbar() {
  return (
    <div id="home" className="z-10 w-full pb-5">
      <div className="fixed left-0 top-0 w-full border-b bg-gradient-to-b backdrop-blur-2xl dark:border-zinc-800 ">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between p-5">
          <div className="flex items-center gap-x-2">
            <Link href={"#home"} scroll={true} className=" font-bold text-2xl">
              <span className=" font-black text-3xl bg-gradient-to-b from-blue-300 to-blue-700 bg-clip-text text-transparent">
                N{" "}
              </span>
              attagrit
            </Link>
          </div>
          <div className="hidden md:flex">
            <MenuList />
          </div>
          <div className="flex gap-x-3">
            <ModeToggle />
            <div className="md:hidden"><Slidebar /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
