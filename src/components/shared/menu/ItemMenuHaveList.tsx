import { Brand } from "@/interfaces/RootBrand";
import { getBrandApi } from "@/lib/service";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { ButtonMenuClose } from "../button/ButtonToggleMenu";
import { useMenu } from "@/contexts/MenuProvider";
import Link from "next/link";

export function ItemMenuHaveList({
  name,
  href,
  icon,
}: {
  name: string;
  href: string;
  icon: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
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
      <div
        className={`py-2 w-full ${
          !isOpen && "hover:bg-slate-400"
        } px-4 rounded-lg`}
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
          <ul className="flex flex-col gap-2 mt-4 ml-6 list-disc">
            {Array.from({ length: 6 }).map((_, index) => (
              <li
                key={index}
                className="w-full h-8 bg-gray-400 rounded-md animate-pulse"
              ></li>
            ))}
          </ul>
        )}
      </div>
    );

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
        <ul className="flex flex-col gap-2 mt-4 ml-6 list-disc">
          {listBrand.map((item) => (
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
