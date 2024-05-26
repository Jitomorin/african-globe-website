"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
  { name: "Log in", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Fast and Easy</span>
                  <span className="block bg-gradient-to-r from-primary-400 to-primary bg-clip-text pb-3 text-transparent sm:pb-5">
                    Loans
                  </span>
                </h1>
                <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                  For Civil Servants, TSC Members and Salaried Employees
                  countrywide
                </p>
                <div className="mt-10 sm:mt-12">
                  <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                    <div className="sm:flex sm:justify-center lg:justify-start">
                      <div className="mt-3 sm:mt-0">
                        <button
                          onClick={() => {
                            router.push("/apply-loan");
                          }}
                          type="submit"
                          className="block w-full rounded-md bg-gradient-to-r from-primary-400 to-primary px-4 py-3 font-medium text-white shadow transition-all ease-in-out hover:to-primary-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/hero/medical1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
