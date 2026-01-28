"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image"
import { useTranslations } from "next-intl";
import { Moon, Sun } from "lucide-react";
import { useTheme } from './ThemeProvider'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const t = useTranslations('Navbar');
  const { theme, toggleTheme } = useTheme()

  const navLinks = [
    {
      title: t('about'),
      path: "#about",
    },
    {
      title: t('projects'),
      path: "#projects",
    },
    {
      title: t('contact'),
      path: "#contact",
    },
  ];

  return (
    <nav className="backdrop-blur-md bg-white/80 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 fixed mx-auto top-0 left-0 right-0 z-10 shadow-sm">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        
        <div className="mobile-menu block md:hidden order-3">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-500"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-500"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex items-center p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row items-center gap-3 order-1">
          <Link className="transition hover:-translate-y-1" href="https://github.com/martincout" target="_blank">
            <Image 
              src={theme === 'dark' ? "/github-mark-white.png" : "/github-mark.png"} 
              width={30} 
              height={30}
              alt="Github Icon" 
            />
          </Link>
          <Link className="transition hover:-translate-y-1" href="https://www.linkedin.com/in/martincout" target="_blank">
            <Image src="/linkedin.png" width={30} height={30}
              alt="Linkedin Icon" />
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
          >
            {theme === 'dark' ? <Sun className="text-amber-400" size={20} /> : <Moon className="text-slate-700" size={20} />}
          </button>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
