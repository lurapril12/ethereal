"use client";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Feature", path: "#feature" },
  { title: "Explore More", path: "#calltoaction" },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="z-50 fixed w-full px-6 py-4 mt-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl navbar-text">
          <Link href="#">ETHEREAL</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-opacity-80 border border-white/20 backdrop-blur-3xl rounded-3xl px-6 py-2">
          <ul className="flex flex-row space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="navbar-text hover:opacity-50 transition-opacity duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme Toggle & Connect Wallet */}
        <div className="flex items-center space-x-6">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 glass hover:opacity-80 transition-opacity duration-300 rounded-full navbar-text"
          >
            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>

          {/* Connect Wallet */}
          <div className="hidden md:block">
            <ConnectButton />
          </div>

          {/* Mobile Menu Button */}
          <div
            onClick={toggleNav}
            className="md:hidden border rounded p-2 navbar-text border-current ml-4"
          >
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 w-full h-full flex items-center justify-center menu-bg menu-transition ${
          nav ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                onClick={closeNav}
                className="text-3xl navbar-text hover:opacity-50 transition-opacity duration-300"
              >
                {link.title}
              </Link>
            </li>
          ))}

          <button
            onClick={closeNav}
            className="absolute top-10 right-10 p-3 rounded-full glass navbar-text hover:opacity-70"
          >
            <AiOutlineClose size={30} />
          </button>

          <div className="mt-6">
            <ConnectButton />
          </div>
        </ul>
      </div>
    </div>
  );
};
