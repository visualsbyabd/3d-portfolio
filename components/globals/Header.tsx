"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Experience", href: "#timeline" },
  { title: "Projects", href: "#projects" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(window.scrollY > 10);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`lg:max-w-7xl w-[90vw] max-w-[90vw] px-2 py-4 flex flex-row items-center justify-between ${scrolled ? "bg-gray-500/10 backdrop-blur-md" : "bg-transparent"} duration-500 ease rounded-xl fixed left-1/2 -translate-x-1/2`}
    >
      <div className="flex flex-row items-center justify-start gap-2">
        <Link href="/" className="text-xl lg:text-2xl font-lufga font-bold">
          <div className=" flex flex-row items-center justify-start gap-2">
            <Image
              className="h-full max-w-8 max-h-8 object-contain"
              src="/tregurus-logo.png"
              alt="Logo"
              width={500}
              height={500}
            />
            Abdullah&apos;s
          </div>
        </Link>
      </div>
      <div className="hidden md:flex flex-row items-center justify-center gap-4">
        {navItems.map((navItem) => (
          <Link
            key={navItem.title}
            href={navItem.href}
            className="font-lufga font-medium text-primary/50 hover:text-primary duration-500 ease"
          >
            {navItem.title}
          </Link>
        ))}
      </div>

      <Link
        href={"#contact"}
        className="flex flex-row items-center justify-center gap-1 bg-primary text-background font-montserrat font-semibold fill-background rounded-md px-2 py-1 border-2 border-primary"
      >
        Contact Me
      </Link>
    </header>
  );
};
export default Header;
