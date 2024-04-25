"use client";

import React, { useState } from "react";
import { Logo } from "../Images/Logo";
import Link from "next/link";
import { User } from "../Images/User";
import { PlusIcon } from "@heroicons/react/16/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";

const menuHeader = [
  "Home",
  "Rentals",
  "Categories",
  "About Us",
  "Contact",
  "Blog",
];

import { Lexend } from "next/font/google";
const lexend = Lexend({
  subsets: ["latin"],
});

const Header = () => {
  const [menuVisible, setMenuVisible] = useState("hidden");

  return (
    <header className="flex justify-between py-5 md:px-8 items-center px-0">
      <Logo />

      <nav
        className={`${menuVisible} w-full h-full bg-rose-100 absolute top-20 md:static md:flex md:w-auto md:h-auto md:justify-center md:bg-inherit`}
      >
        <ul className="flex justify-center items-center mt-10 flex-col  gap-8 lg:gap-12 md:gap-6 md:flex-row md:mt-0">
          {menuHeader.map((name, index) => (
            <Link href="" key={index}>
              <li className="font-bold text-2xl text-gray-800 md:hover:border-b-2 md:hover:border-black md:text-xs">
                {name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <div className="hidden md:flex flex-col items-center md:gap-1 lg:gap-4 lg:flex-row">
        <button className="flex items-center gap-1 text-primary-500 font-normal ">
          <User />
          <span>Sign in</span>
        </button>
        <button className="flex items-center gap-0.5 rounded-3xl bg-primary-500 py-1 px-3 text-white b-none font-normal">
          <PlusIcon className="w-5" />
          <span> Post Listing </span>
        </button>
      </div>

      <Bars3Icon
        className="block w-10 md:hidden"
        onClick={() =>
          menuVisible === "hidden"
            ? setMenuVisible("block")
            : setMenuVisible("hidden")
        }
      />
    </header>
  );
};

export default Header;
