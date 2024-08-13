import Image from "next/image";
import Link from "next/link";

const items = [
  {
    name: "/images/certificate/borntodev.png",
    key: "Coding Problem Solving",
    desc: "BorntoDev",
    link: "/images/certificate/borntodevCer.png",
  },
];

export default function Certificate() {
  return (
    <div id="certificate" className="flex flex-col gap-y-5 pt-28">
      <p className="text-3xl font-bold pb-5 border-b-[1px]  dark:border-zinc-800">
        Certificate
      </p>
      <ol className="flex flex-col">
        {items.map((item, index) => (
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="flex items-center gap-x-12 sm:gap-x-32 border-2 border-white dark:border-black/0 lg:hover:border-blue-400 lg:dark:hover:border-blue-400 lg:hover:bg-blue-50 lg:dark:hover:bg-blue-900/20 sm:px-10 py-5">
            <Image
              key={index}
              src={item.name}
              alt={item.key}
              width={800}
              height={800}
              className="size-24 "
            />
            <div>
              <h3 className=" font-semibold ">{item.key}</h3>
              <p className=" text-zinc-500 dark:text-zinc-400  ">{item.desc}</p>
            </div>
          </Link>
        ))}
      </ol>
    </div>
  );
}
