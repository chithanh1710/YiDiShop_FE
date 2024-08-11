import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export function ButtonIcon({ children }: { children: ReactNode }) {
  return (
    <Button
      variant="outline"
      className="flex-row-center p-2 border rounded-full"
    >
      {children}
    </Button>
  );
}
