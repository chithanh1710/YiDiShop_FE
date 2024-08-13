"use client";

import { useMenu } from "@/contexts/MenuProvider";
import { ButtonMenuClose } from "../button/ButtonToggleMenu";
import Link from "next/link";
import {
  CircleHelpIcon,
  HeartIcon,
  HomeIcon,
  InfoIcon,
  ShoppingBasketIcon,
  ShoppingCart,
} from "lucide-react";
import ButtonLink from "../button/ButtonLink";
import { ItemMenuHaveList } from "./ItemMenuHaveList";
import { ItemMenu } from "./ItemMenu";

export function Menu() {
  const { menu, setMenu } = useMenu();

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
          className="fixed top-0 left-0 w-full h-screen bg-black/70 z-40"
        />
      )}
    </>
  );
}
