import { BackpackIcon, HeartIcon, PersonIcon } from "@radix-ui/react-icons";
import { ButtonToggle } from "../button/ButtonToggle";
import { ButtonIcon } from "../button/ButtonIcon";
import { Logo } from "../Logo";
import { ButtonMenuOpen } from "../button/ButtonToggleMenu";

export function NavbarMenu() {
  return (
    <nav className="flex-row-between mb-6">
      <ButtonMenuOpen />
      <Logo className="sm:block hidden" />
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
        <div className="ml-2">
          <ButtonToggle />
        </div>
      </div>
    </nav>
  );
}
