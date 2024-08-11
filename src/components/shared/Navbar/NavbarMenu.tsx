import {
  BackpackIcon,
  HamburgerMenuIcon,
  HeartIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { ButtonToggle } from "../button/ButtonToggle";
import { ButtonIcon } from "../button/ButtonIcon";
import { Logo } from "../Logo";

export function NavbarMenu() {
  return (
    <nav className="flex-row-between mb-4">
      <ButtonIcon>
        <HamburgerMenuIcon className="size-5" />
      </ButtonIcon>
      <Logo />
      <div className="flex-row-center gap-2">
        <ButtonIcon>
          <HeartIcon className="size-5" />
        </ButtonIcon>
        <ButtonIcon>
          <BackpackIcon className="size-5" />
        </ButtonIcon>
        <ButtonIcon>
          <PersonIcon className="size-5" />
        </ButtonIcon>
        <ButtonToggle />
      </div>
    </nav>
  );
}
