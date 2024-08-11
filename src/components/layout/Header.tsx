import { Suspense } from "react";
import { NavbarBrand } from "../shared/Navbar/NavbarBrand";
import { NavbarMenu } from "../shared/Navbar/NavbarMenu";
import { SkeletonNavBrand } from "../shared/skeleton/SkeletonNavBrand";

export default function Header() {
  return (
    <header className="mb-8 bg-background text-foreground">
      <NavbarMenu />
      <Suspense fallback={<SkeletonNavBrand />}>
        <NavbarBrand />
      </Suspense>
    </header>
  );
}
