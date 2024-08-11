"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataBrand } from "@/interfaces/RootBrand";
import { createQueryString } from "@/lib/utils";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export function ButtonTypeToggle({
  data,
  type,
}: {
  data: DataBrand;
  type: "Toggle" | "List";
}) {
  const [brand, setBrand] = useState("New");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleClick(name: string) {
    setBrand(name);
    const params = createQueryString("brand", name, searchParams);
    router.replace(`${pathname}?${params}`);
  }

  return type === "Toggle" ? (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full" asChild>
        <Button>
          {brand} <CaretDownIcon className="ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleClick("New")}>
          New
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleClick("Popular")}>
          Popular
        </DropdownMenuItem>
        {data.brand.map((item) => (
          <DropdownMenuItem
            onClick={() => handleClick(item.name)}
            key={item._id}
          >
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <>
      <Button
        className={`${
          brand === "New"
            ? "text-yellow-400 dark:text-red-400"
            : "bg-slate-900/50 dark:text-white dark:bg-slate-50/50"
        }`}
        onClick={() => handleClick("New")}
      >
        New
      </Button>
      <Button
        className={`${
          brand === "Popular"
            ? "text-yellow-400 dark:text-red-400"
            : "bg-slate-900/50 dark:text-white dark:bg-slate-50/50"
        }`}
        onClick={() => handleClick("Popular")}
      >
        Popular
      </Button>
      {data.brand.map((item) => (
        <Button
          className={`${
            brand === item.name
              ? "text-yellow-400 dark:text-red-400"
              : "bg-slate-900/50 dark:text-white dark:bg-slate-50/50"
          }`}
          onClick={() => handleClick(item.name)}
          key={item._id}
        >
          {item.name}
        </Button>
      ))}
    </>
  );
}
