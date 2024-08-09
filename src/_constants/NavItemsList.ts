import { INavItem } from "@/_components/NavItem";

export const navItems: Array<Omit<INavItem, "pathname">> = [
  {
    route: "/",
    text: "Home",
  },
  {
    route: "/about",
    text: "About",
  },
  // {
  //   route: "/services",
  //   text: "Services",
  // },
  {
    route: "/projects",
    text: "Projects",
  },
  // {
  //   route: "/news",
  //   text: "News",
  // },
  // {
  //   route: "/shop",
  //   text: "Shop",
  // },
  {
    route: "/contact",
    text: "Contact",
  },
];
