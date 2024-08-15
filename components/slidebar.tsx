"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";

const SHEET_SIDES = ["top"] as const;

export function Slidebar() {
  return (
    <div>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={side}
            className="h-[400px] flex flex-col items-center justify-center gap-y-5"
          >
            <SheetClose asChild>
              <Link href="#home">
                <Button variant="link">About</Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="#experience">
                <Button variant="link">Experience</Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="#education">
                <Button variant="link">Education</Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="#certificate">
                <Button variant="link">Certificate</Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="#skills">
                <Button variant="link">Skills</Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="#projects">
                <Button variant="link">Projects</Button>
              </Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
