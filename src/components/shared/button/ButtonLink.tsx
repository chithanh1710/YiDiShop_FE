import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { ReactNode } from "react";

export default function ButtonLink({
  href,
  children,
  className,
  variant,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}) {
  return (
    <Button variant={variant} className={className} asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
