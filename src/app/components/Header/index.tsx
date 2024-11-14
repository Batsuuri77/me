import Link from "next/link";
import React from "react";
import { Bars3Icon, MoonIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-center  items-center px-4 py-4 bg-white drop-shadow-md z-50">
      <div className="flex flex-row justify-between items-center my-1 w-10/12">
        <div className="font-light text-center text-xl text-gray-800 ml-4">
          <Link href={"/"}>BATSUURI</Link>
        </div>
        <nav className="hidden sm:flex flex-row justify-between md:gap-14 mr-20 text-lg font-medium items-center">
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Projects</Link>
          <Link href={"/pages/about"}>About</Link>
          <div className="w-28 border-gray-300 border rounded-full p-1 shadow-inner flex flex-row justify-between items-center bg-gray-50">
            <div className="border rounded-full flex justify-center items-center w-8 p-1 shadow-md bg-white">
              <SunIcon className="w-6 h-6"></SunIcon>
            </div>
            <span className="flex justify-end items-center mr-4">DAY</span>
          </div>
          {/* <div className="w-28 border-gray-500 border rounded-full p-1 shadow-inner flex flex-row justify-between items-center bg-switchNight">
            <span className="flex justify-end items-center ml-2 text-white">
              NIGHT
            </span> 
            <div className="border rounded-full flex justify-center items-center w-8 p-1 shadow-md bg-white">
              <MoonIcon className="w-6 h-6"></MoonIcon>
              <SparklesIcon className="w-3 h-3 absolute top-[30px] right-[300px]"></SparklesIcon>
            </div>
          </div> */}
        </nav>
        <div className="flex grow items-center justify-end sm:hidden">
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="w-6 h-6" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
};

export default Header;
