"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface MenuProps {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}

const MenuContext = createContext<MenuProps | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState(false);
  const value = { menu, setMenu };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("Menu context error");
  return context;
};
