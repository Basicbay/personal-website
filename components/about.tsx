"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";
import { Mail, Smartphone, Copy } from "lucide-react";
import Link from "next/link";
import Alert from "./ui/alert";

export default function About() {
  const [showAlert, setShowAlert] = useState(false);

  function copyText(entryText: string): void {
    setShowAlert(true);
    navigator.clipboard
      .writeText(entryText)
      .then(() => {
        console.log("Text copied successfully!");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  }

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="grid md:grid-cols-2 gap-5 text-center sm:text-left pt-28">
      <Image
        src={"/images/me3.png"}
        alt="avatar"
        className=" dark:bg-black/25 bg-zinc-100 mx-auto w-[300px] "
        width={3024}
        height={3024}
      ></Image>

      <div className="flex flex-col gap-y-5 items-center sm:items-start">
        <p className="text-5xl font-extrabold leading-tight">
          Nattagrit Ridtikhab
        </p>
        <div className="text-lg sm:text-xl font-medium text-zinc-400 pb-2 ">
          Frontend Developer | 1+ Years of Experience | Expertise in React,
          Typescript and Next.js — I’m Always learning and exploring new things
          !
        </div>

        <div className="flex items-center gap-x-3 ">
          <Button variant="default" size={"sm"} className="h-fit py-1">
            <Link
              href={"/images/pdf/nattagrit.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-base font-bold"
            >
              Resume
            </Link>
          </Button>
          <Link
            href={"https://github.com/Basicbay"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="mdi:github"
              className="text-4xl dark:hover:text-zinc-200 hover:text-zinc-800"
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/nattagrit-ridtikhab"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="mdi:linkedin"
              className="text-4xl dark:hover:text-zinc-200 hover:text-zinc-800"
            />
          </Link>
        </div>
        <div className="flex flex-col items-start gap-y-2 -ml-3">
          <Button
            variant="ghost"
            size={"sm"}
            onClick={() => copyText("0867499315")}
          >
            <div className="text-lg font-semibold flex items-center gap-x-[71px]">
              <div className="flex items-center gap-x-5">
                <Smartphone />
                0867499315
              </div>
              <Copy size={15} className="text-zinc-400" />
            </div>
          </Button>
          <Button variant="ghost" size={"sm"}>
            <Link
              href="mailto: nattagrit.r@gmail.com"
              target="_blank"
              className="text-lg font-semibold flex items-center gap-x-5"
            >
              <Mail /> nattagrit.r@gmail.com
            </Link>
          </Button>
        </div>
      </div>

      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 text-sm z-50 ">
        {showAlert && (
          <Alert
            message="Copied PhoneNumber"
            type="success"
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}
