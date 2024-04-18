import Link from "next/link";
import React from "react";

export interface INavItem {
  pathname: string;
  route: string;
  text: string;
  onClick?: () => void;
}

function NavItem({ pathname, route, text, onClick }: INavItem) {
  return (
    <li className="px-3 py-2" onClick={onClick}>
      <Link href={route}>
        <span className={`${pathname === route ? "font-bold" : ""}`}>
          {text}
        </span>
      </Link>
    </li>
  );
}

export default NavItem;
