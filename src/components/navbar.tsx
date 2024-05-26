"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Salary Check Off Loan", href: "/check-off-loan" },
  { name: `FAQ's`, href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Apply Loan", href: "/apply-loan" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  //   const router = useRouter();
  const pathName = usePathname();

  return (
    <Disclosure
      as="nav"
      className={`bg-white shadow sticky top-0 z-40 ${
        scrollPosition > 0
          ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
          : "shadow-none"
      }`}
    >
      {({ open }: any) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="object-contain"
                    src="/logos/logo_no_bg.png"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`inline-flex items-center ${
                        pathName === link.href ? `border-b-4 text-primary ` : ``
                      } hover:border-b-4 px-1 pt-1 text-sm font-semibold border-primary text-gray-500 transition-all ease-in-out`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2 pl-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {links.map((link) => (
                <Disclosure.Button
                  key={link.name}
                  as="a"
                  href={link.href}
                  className={`block ${
                    pathName === link.href
                      ? `border-l-4 text-primary`
                      : `border-none text-indigo-700`
                  }  hover:border-l-4 border-primary bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium transition-all ease-in-out`}
                >
                  {link.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
