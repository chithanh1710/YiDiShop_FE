import { Button } from "@/components/ui/button";
import { getBrandApi } from "@/lib/service";
import { ButtonTypeToggle } from "../button/ButtonTypeToggle";
import { Suspense } from "react";
import ButtonLink from "../button/ButtonLink";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export async function NavbarBrand() {
  const { data, results } = await getBrandApi();
  return (
    <nav className="flex flex-col gap-6">
      <div className="flex-row-between gap-2">
        <div className="gap-2 lg:hidden block">
          <Suspense fallback={<Button>Loading...</Button>}>
            <ButtonTypeToggle type="Toggle" data={data} />
          </Suspense>
        </div>

        <div className="w-full border px-4 py-1 rounded-md flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none"
          />
          <div className="rounded-full p-1 bg-slate-100 dark:bg-slate-800">
            <MagnifyingGlassIcon className="size-5" />
          </div>
        </div>

        <ButtonLink className="sm:inline-block hidden" href="/about">
          About
        </ButtonLink>
        <ButtonLink className="sm:inline-block hidden" href="/faqs">
          FAQs
        </ButtonLink>
      </div>
      <div className="gap-2 lg:flex hidden">
        <Suspense fallback={<Button>Loading...</Button>}>
          <ButtonTypeToggle type="List" data={data} />
        </Suspense>
      </div>
    </nav>
  );
}
