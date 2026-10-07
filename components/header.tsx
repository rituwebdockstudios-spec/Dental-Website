"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="relative z-50 w-full bg-[#023181]">
      <nav className="mx-auto flex h-[138px] max-w-[1600px] items-center justify-between px-10 lg:px-[70px]">
        <div>
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo.png"
              alt="Dr. Salu Dental Clinic"
              width={180}
              height={110}
              priority
              className="h-[140px] w-auto object-contain"
            />
          </Link>
        </div>

        <div className="hidden items-center gap-[35px] lg:flex">
          <Link
            href="/"
            className={`rounded-[7px] px-3 py-2 text-[18px] transition ${
              isActive("/")
                ? "bg-white font-semibold text-[#023181]"
                : "font-medium text-white hover:bg-white hover:text-[#023181]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`rounded-[7px] px-3 py-2 text-[18px] transition ${
              isActive("/about")
                ? "bg-white font-semibold text-[#023181]"
                : "font-medium text-white hover:bg-white hover:text-[#023181]"
            }`}
          >
            About
          </Link>

          <Link
            href="/services"
            className={`rounded-[7px] px-3 py-2 text-[18px] transition ${
              isActive("/services")
                ? "bg-white font-semibold text-[#023181]"
                : "font-medium text-white hover:bg-white hover:text-[#023181]"
            }`}
          >
            Services
          </Link>

          <Link
            href="/contact"
            className={`rounded-[7px] px-3 py-2 text-[18px] transition ${
              isActive("/contact")
                ? "bg-white font-semibold text-[#023181]"
                : "font-medium text-white hover:bg-white hover:text-[#023181]"
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center">
          <Link
            href="/appointment"
            className={`hidden rounded-[10px] px-[34px] py-[18px] text-[18px] font-semibold shadow-sm transition md:block ${
              isActive("/appointment")
                ? "bg-[#dce8ff] text-[#023181]"
                : "bg-white text-[#4d82d5] hover:bg-[#f1f6ff]"
            }`}
          >
            Book Appointment
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-[#0B3289] lg:hidden"
          >
            <span className="text-[25px]">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="absolute left-0 top-[138px] w-full overflow-hidden bg-[#023181] px-5 pb-6 pt-3 shadow-lg lg:hidden">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`block rounded-[8px] px-4 py-3 text-[17px] transition ${
                isActive("/")
                  ? "bg-white font-semibold text-[#023181]"
                  : "font-medium text-white hover:bg-white hover:text-[#023181]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className={`block rounded-[8px] px-4 py-3 text-[17px] transition ${
                isActive("/about")
                  ? "bg-white font-semibold text-[#023181]"
                  : "font-medium text-white hover:bg-white hover:text-[#023181]"
              }`}
            >
              About
            </Link>

            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className={`block rounded-[8px] px-4 py-3 text-[17px] transition ${
                isActive("/services")
                  ? "bg-white font-semibold text-[#023181]"
                  : "font-medium text-white hover:bg-white hover:text-[#023181]"
              }`}
            >
              Services
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={`block rounded-[8px] px-4 py-3 text-[17px] transition ${
                isActive("/contact")
                  ? "bg-white font-semibold text-[#023181]"
                  : "font-medium text-white hover:bg-white hover:text-[#023181]"
              }`}
            >
              Contact
            </Link>

            <Link
              href="/appointment"
              onClick={() => setMenuOpen(false)}
              className={`mt-2 block rounded-[8px] px-4 py-3 text-center text-[17px] font-semibold transition ${
                isActive("/appointment")
                  ? "bg-[#dce8ff] text-[#023181]"
                  : "bg-white text-[#4d82d5] hover:bg-[#f1f6ff]"
              }`}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}