"use client";
import React from "react";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import Link from "next/link";

const Header = () => {
  const scrollPosition = useScrollPosition();
  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrollPosition > 0
          ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
          : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-0 md:mb-0"
        >
          <div className=" ">
            <img
              className="object-contain"
              src="/logos/logo_no_bg.png"
              width={160}
              height={160}
            />
          </div>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/types-of-loans" className={`mr-5 hover:text-gray-900`}>
            Types of Loans
          </Link>
          <Link
            href="/faq"
            className="mr-5 hover:text-gray-900"
          >{`FAQ’s`}</Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/apply-loan" className="mr-5 hover:text-gray-900">
            Apply Loan
          </Link>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
