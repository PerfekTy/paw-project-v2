import { useState } from "react";

import Hamburger from "../ui/hamburger";
import MainNavbar from "./main-navbar.tsx";
import { ModeToggle } from "../ui/theme-switcher.tsx";

export default function NavbarLayout() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="flex flex-col bg-opacity-50 dark:text-white">
      <div
        className={
          mobileMenu
            ? "flex h-screen w-full justify-center dark:border-none border-r-[1px] border-black fixed z-10 dark:bg-navbar bg-navbarLight transition-all duration-300 ease-in-out"
            : "md:flex md:h-screen opacity-0 -translate-x-72 md:translate-x-0 md:opacity-100 justify-center dark:border-none fixed transition-all duration-300 ease-in-out md:static dark:bg-navbar bg-navbarLight"
        }
      >
        <MainNavbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      </div>
      <Hamburger setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      <div className="absolute top-5 right-5 md:hidden">
        <ModeToggle />
      </div>
    </nav>
  );
}
