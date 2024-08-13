"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./button";
import { twMerge } from "tailwind-merge";

interface MenuListProps {
  className?: string;
  children?: React.ReactNode;
}

export function MenuList({ className }: MenuListProps) {
  return (
    <NavigationMenu >
      <NavigationMenuList >
        <NavigationMenuItem className={twMerge("flex", className)}>
          <Link href="#experience" legacyBehavior passHref>
            <Button variant={"link"}>Experience</Button>
          </Link>
          <Link href="#education" legacyBehavior passHref>
            <Button variant={"link"}>Education</Button>
          </Link>
          <Link href="#certificate" legacyBehavior passHref>
            <Button variant={"link"}>Certificate</Button>
          </Link>
          <Link href="#skills" legacyBehavior passHref>
            <Button variant={"link"}>Skills</Button>
          </Link>
          <Link href="#projects" legacyBehavior passHref>
            <Button variant={"link"}>Projects</Button>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
