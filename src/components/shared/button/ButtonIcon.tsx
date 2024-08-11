import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export function ButtonIcon({
  children,
  className,
  ...props
}: { children: ReactNode; className?: string } & React.ComponentProps<
  typeof Button
>) {
  return (
    <Button
      {...props}
      variant="outline"
      className={`flex-row-center p-2 border rounded-full ${className}`}
    >
      {children}
    </Button>
  );
}
