"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const menus = [
  { name: "About", link: "#home" },
  { name: "Experience", link: "#experience" },
  { name: "Education", link: "#education" },
  { name: "Certificate", link: "#certificate" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
];

const SHEET_SIDES = ["top"] as const;

export function Slidebar() {
  return (
    <>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger>
            <Button variant="outline" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={side}
            className="h-[400px] flex flex-col items-center justify-center gap-y-5"
          >
            {menus.map((item, index) => (
              <SheetClose key={index} asChild>
                <Link href={item.link}>
                  <Button variant="link">{item.name}</Button>
                </Link>
              </SheetClose>
            ))}
          </SheetContent>
        </Sheet>
      ))}
    </>
  );
}
