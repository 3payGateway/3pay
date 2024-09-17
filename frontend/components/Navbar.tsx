"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flexBetween font-poppins bg-customLBlue max-container padding-container p-[10px] relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={60} height={20} />
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-customDBlue flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter">
        {/* Desktop View */}
        <div className="w-3/5 flex items-center justify-end lg:mr-8 hidden lg:flex">
          <label className="flex items-center justify-center bg-white rounded-full w-8 h-8 hover:shadow-gray-400 shadow-sm transition-all">
            <a
              aria-label="get source code"
              title="get source code"
              href="https://github.com/3payGateway/3pay"
            >
              <SiGithub size={14} />
            </a>
          </label>
        </div>

        <div className="lg:flexCenter hidden lg:block">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        {/* Mobile View */}
        <div className="flex items-center lg:hidden">
          <label className="flex items-center justify-center bg-white rounded-full w-8 h-8 hover:shadow-gray-400 shadow-sm transition-all mr-4">
            <a
              aria-label="get source code"
              title="get source code"
              href="https://github.com/3payGateway/3pay"
            >
              <SiGithub size={14} />
            </a>
          </label>
          <Image
            src="/menu.png"
            alt="menu"
            width={32}
            height={32}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {menuOpen && (
        <ul className="absolute top-4 right-0 w-full bg-customLBlue shadow-md flex flex-col items-center gap-6 py-4 lg:hidden">
          <Image
            src="/close.png"
            alt="close menu"
            width={22}
            height={22}
            className="absolute top-2 right-6 cursor-pointer"
            onClick={toggleMenu}
          />
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-customDBlue text-customD cursor-pointer transition-all hover:font-bold"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
