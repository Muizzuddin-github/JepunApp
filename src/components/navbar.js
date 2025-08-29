/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-coklat_muda">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:justify-center">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse md:hidden"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="teramo self-center text-2xl font-bold whitespace-nowrap text-coklat">
            Jepun
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   rounded-lg bg-coklat_muda md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-coklat_muda">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-coklat rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#"
                className=" block py-2 px-3 text-coklat rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0 "
              >
                About
              </a>
            </li>
            <li>
              <Link
                href="/service-fasilitas"
                className="block py-2 px-3 text-coklat rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0 "
              >
                Services & Facilities
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-coklat rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0 "
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-coklat rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-coklat_tua md:p-0 "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
