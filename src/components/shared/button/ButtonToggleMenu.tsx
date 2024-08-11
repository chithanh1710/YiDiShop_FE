"use client";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ButtonIcon } from "../button/ButtonIcon";
import { useMenu } from "@/contexts/MenuProvider";

export function ButtonMenuOpen({ className }: { className?: string }) {
  const { setMenu } = useMenu();
  return (
    <ButtonIcon className={className} onClick={() => setMenu(true)}>
      <HamburgerMenuIcon className="size-5" />
    </ButtonIcon>
  );
}

export function ButtonMenuClose({ className }: { className?: string }) {
  const { setMenu } = useMenu();
  return (
    <ButtonIcon className={className} onClick={() => setMenu(false)}>
      <Cross1Icon className="size-5" />
    </ButtonIcon>
  );
}
