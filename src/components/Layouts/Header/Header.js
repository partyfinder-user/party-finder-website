import React from "react";

import Logo from "@/components/Helpers/Logo";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="sticky top-0 w-full left-0 right-0 z-40 header-bg border-b border-b-gray-800">
      <div className="container mx-auto p-4">
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-accent-200 text-xs -mb-1">
              Cerca nei pressi di:
            </h1>
            <div className="flex items-center">
              <h1 className="text-white text-xl">Bassano del Grappa</h1>
              <ChevronDownIcon className="mt-1 size-5 text-gray-300" />
            </div>
          </div>
          <div>
            <Logo />
          </div>
        </div>

        <button className="relative flex items-center w-full border border-gray-700 px-4 py-2 pr-11 rounded-full active:shadow-lg">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
            ></path>
          </svg>

          <div className="ml-3 flex-1 text-left overflow-hidden">
            <span className="block font-medium text-sm">Dove vuoi andare?</span>
            <div className="block mt-0.5 text-xs font-light text-neutral-500 dark:text-neutral-400 ">
              <span className="line-clamp-1">
                Ovunque • Tutti gli eventi • Qualsiasi genere
              </span>
            </div>
          </div>

          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full border border-gray-800 text-accent-200">
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block w-4 h-4"
              fill="currentColor"
            >
              <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
            </svg>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
