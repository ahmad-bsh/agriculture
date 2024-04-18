"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { Phone } from "@/_icons/contact/Phone";
import { Email } from "@/_icons/contact/Email";
import { Address } from "@/_icons/contact/Address";
import Link from "next/link";
import { navItems } from "@/_constants/NavItemsList";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";
import SocialMediaLinkItem from "./SocialMediaLinkItem";
import { socialMedia } from "@/_constants/socialMedia";

interface IContact {
  name: string;
  value: string;
  icon: React.ReactNode;
}

const ContactItem = ({ name, value, icon }: IContact) => {
  return (
    <div className="px-6 py-4 flex justify-center items-center gap-5">
      <div>{icon}</div>
      <div>
        <div className="text-sm text-gray-500">{name}</div>
        <div className="text-md font-bold">{value}</div>
      </div>
    </div>
  );
};

function Header() {
  const contacts: Array<IContact> = [
    {
      name: "Call Anytime",
      value: "+ 98 (000) - 9630",
      icon: <Phone />,
    },
    {
      name: "Send email",
      value: "ambed@agrios.com",
      icon: <Email />,
    },
    {
      name: "380 St Kilda Road",
      value: "Melbourne, Australia",
      icon: <Address />,
    },
  ];

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const close = () => setDrawerOpen(false);
  const pathname = usePathname();
  return (
    <header className="">
      <div className="h-28 flex justify-center">
        <div className="hidden xl:flex max-w-7xl w-full  items-center">
          <div className="relative aspect-[170/51.5] max-w-[170px] w-full">
            <Image src={"/logo.png"} alt="" fill />
          </div>
          <div className="hidden flex-1 xl:flex justify-end ">
            <div className=" flex items-center justify-center gap-5">
              {socialMedia.map((media) => (
                <SocialMediaLinkItem key={media.link} {...media} />
              ))}
            </div>
            {contacts.map((contact, index) => (
              <div key={contact.name}>
                <ContactItem {...contact} />
                {index < contacts.length - 1 ? (
                  <div className="divider divider-horizontal before:bg-agri-50 after:bg-agri-50"></div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div className="xl:hidden navbar bg-base-100">
          <div className="navbar-start">
            <div className="xl:hidden drawer z-20">
              <input
                id="my-drawer"
                type="checkbox"
                className="drawer-toggle"
                checked={isDrawerOpen}
                onChange={() => {}}
              />
              <div
                className="drawer-content"
                onClick={() => setDrawerOpen(true)}
              >
                <label htmlFor="my-drawer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                  onClick={close}
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  {navItems.map((item) => (
                    <NavItem
                      key={item.route}
                      pathname={pathname}
                      onClick={close}
                      {...item}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="navbar-center xl:hidden">
            <a>
              <div className="relative aspect-[170/51.5] min-w-[150px] lg:min-w-[170px] w-full">
                <Image src={"/logo.png"} alt="" fill />
              </div>
            </a>
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
