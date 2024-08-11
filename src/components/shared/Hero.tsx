"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  const [indexImg, setIndexImg] = useState(0);
  const [isMin, setIsMin] = useState(true);
  const listImg = useMemo(
    () => [
      "/hero1.webp",
      "/hero2.webp",
      "/hero3.webp",
      "/hero4.webp",
      "/hero5.webp",
    ],
    []
  );

  const handleClick = useCallback(
    (num: number) => {
      if (indexImg <= 0 && num === -1) {
        return setIsMin(true);
      }
      if (indexImg >= listImg.length - 1 && num === +1) {
        return setIsMin(false);
      }

      setIndexImg((pre) => pre + num);
    },
    [indexImg, listImg]
  );

  useEffect(() => {
    const num = isMin ? 1 : -1;
    const timeOut = setTimeout(() => handleClick(num), 3500);
    return () => clearTimeout(timeOut);
  }, [handleClick, isMin]);

  return (
    <section className="relative rounded-xl overflow-hidden mb-8 aspect-[16/7]">
      <div className="bg-gradient-to-tl from-black/80 to-black/0 w-full h-full z-10 absolute"></div>
      {listImg.map((img, index) => {
        const translateX = (index - indexImg) * 100;
        return (
          <Image
            key={index}
            style={{ transform: `translateX(${translateX}%)` }}
            className="transition-all duration-500 object-cover"
            alt="Hero image"
            src={img}
            fill
            priority
          />
        );
      })}
      <Button
        onClick={() => handleClick(-1)}
        className={`absolute rounded-full size-10 px-0 py-0 z-10 bottom-5 right-20 ${
          indexImg === 0 && "cursor-not-allowed !bg-white/40"
        }`}
      >
        <ChevronLeftIcon className="size-6" />
      </Button>
      <Button
        onClick={() => handleClick(1)}
        className={`absolute rounded-full size-10 px-0 py-0 z-10 bottom-5 right-6 ${
          indexImg === listImg.length - 1 && "cursor-not-allowed !bg-white/40"
        }`}
      >
        <ChevronRightIcon className="size-6" />
      </Button>
    </section>
  );
}
