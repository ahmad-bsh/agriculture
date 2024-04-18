import { usePathname } from "next/navigation";
import React from "react";
import NavItem, { INavItem } from "./NavItem";
import { navItems } from "@/_constants/NavItemsList";

function Navbar() {
  const pathname = usePathname();
  return (
    <div className="z-10 absolute w-full">
      <div className="absolute inset-0 z-10 w-full">
        <div className="flex max-w-7xl h-[75%] mx-auto h-full w-full justify-center items-center gap-8">
          <div className="navbar-center hidden xl:flex">
            <ul className="flex px-1 gap-x-5">
              {navItems.map((item) => (
                <NavItem key={item.route} pathname={pathname} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <img
        src="/navbar-bg.png"
        className="min-h-20 object-cover object-center z-10"
      />
    </div>
  );
}

export default Navbar;
