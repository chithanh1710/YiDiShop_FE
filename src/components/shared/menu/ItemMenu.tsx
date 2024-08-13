import { ReactNode } from "react";

export function ItemMenu({ children }: { children: ReactNode }) {
  return (
    <div className="py-2 w-full hover:bg-slate-400 px-4 rounded-lg cursor-pointer">
      {children}
    </div>
  );
}
