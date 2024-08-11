import { NavbarCategory } from "../shared/Navbar/NavbarCategory";
import { NavbarMenu } from "../shared/Navbar/NavbarMenu";

export default function Header() {
  return (
    <header className="sticky top-3 max-md:top-1 left-0 mb-6">
      <NavbarMenu />
      <NavbarCategory />
    </header>
  );
}
