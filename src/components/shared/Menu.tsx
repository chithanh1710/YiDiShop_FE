"use client";

import { useMenu } from "@/contexts/MenuProvider";
import { ButtonMenuClose } from "./button/ButtonToggleMenu";
import { ReactNode, useEffect, useState } from "react";
import { getBrandApi } from "@/lib/service";
import { Brand } from "@/interfaces/RootBrand";
import Link from "next/link";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CircleHelpIcon,
  HeartIcon,
  HomeIcon,
  InfoIcon,
  ShoppingBasketIcon,
  ShoppingCart,
} from "lucide-react";
import { Button } from "../ui/button";
import ButtonLink from "./button/ButtonLink";

export function Menu() {
  const { menu, setMenu } = useMenu();
  const [loading, setLoading] = useState(false);
  const [listBrand, setListBrand] = useState<Brand[]>([]);
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const data = await getBrandApi();
        setListBrand(data.data.brand);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading)
    return (
      <>
        <aside
          className={`fixed top-0 left-0 flex flex-col gap-4 items-start p-6 w-[260px] z-50 h-screen bg-background transition-all duration-500 ${
            menu ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          <ButtonMenuClose className="self-end" />
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              className="h-10 bg-gray-400 w-full rounded-lg animate-pulse"
              key={index}
            ></div>
          ))}
        </aside>
        {menu && (
          <div
            onClick={() => setMenu(false)}
            className="fixed top-0 left-0 w-full h-screen bg-black/50 z-40"
          />
        )}
      </>
    );

  return (
    <>
      <aside
        className={`fixed top-0 left-0 flex flex-col justify-between p-6 w-[260px] z-50 h-screen bg-background transition-all duration-500 ${
          menu ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className="flex flex-col gap-2 items-start">
          <ButtonMenuClose className="self-end" />
          <ItemMenu>
            <Link href="/" className="flex gap-2 items-center">
              <HomeIcon className="size-5" />
              Home
            </Link>
          </ItemMenu>
          <ItemMenu>
            <Link href="/about" className="flex gap-2 items-center">
              <InfoIcon className="size-5" />
              About
            </Link>
          </ItemMenu>
          <ItemMenu>
            <Link href="/cart" className="flex gap-2 items-center">
              <ShoppingBasketIcon className="size-5" />
              Cart
            </Link>
          </ItemMenu>
          <ItemMenu>
            <Link href="/favorite" className="flex gap-2 items-center">
              <HeartIcon className="size-5" />
              Favorite
            </Link>
          </ItemMenu>
          <ItemMenuHaveList
            href="shop"
            icon={<ShoppingCart className="size-5" />}
            name="Shop"
            data={listBrand}
          />
          <ItemMenu>
            <Link href="/favorite" className="flex gap-2 items-center">
              <CircleHelpIcon className="size-5" />
              FAQs
            </Link>
          </ItemMenu>
        </div>
        <div className="flex gap-6">
          <ButtonLink variant="secondary" href="/sign-in">
            Sign In
          </ButtonLink>
          <ButtonLink href="/sign-up">Sign Up</ButtonLink>
        </div>
      </aside>
      {menu && (
        <div
          onClick={() => setMenu(false)}
          className="fixed top-0 left-0 w-full h-screen bg-black/50 z-40"
        />
      )}
    </>
  );
}

function ItemMenu({ children }: { children: ReactNode }) {
  return (
    <div className="py-2 w-full hover:bg-slate-400 px-4 rounded-lg cursor-pointer">
      {children}
    </div>
  );
}

function ItemMenuHaveList({
  name,
  href,
  icon,
  data,
}: {
  data: { _id: string; name: string }[];
  name: string;
  href: string;
  icon: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`py-2 w-full ${
        !isOpen && "hover:bg-slate-400"
      } px-4 rounded-lg cursor-pointer`}
    >
      <button
        onClick={() => setIsOpen((pre) => !pre)}
        className="flex-row-between w-full"
      >
        <div className="flex gap-2">
          {icon}
          {name}
        </div>
        <span>{isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}</span>
      </button>
      {isOpen && (
        <ul className="flex flex-col gap-2 mt-4 ml-5 list-disc">
          {data.map((item) => (
            <li key={item._id}>
              <Link
                className="hover:bg-slate-400 px-2 py-1 rounded-md w-full inline-block"
                href={`${href}/${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
