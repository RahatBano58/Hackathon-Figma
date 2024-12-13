"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <main className="border-b-2 bg-neutral-100">
      <div className="w-full flex items-center justify-center bg-white h-[70px]">
        {/* Container for content */}
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
          {/* Logo */}
          <div>
            <h1 className="title-font font-extrabold text-blue-950 tracking-widest text-xl">
              Hekto
            </h1>
          </div>

          {/* Links - Sliding mobile nav */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[70%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-5 lg:gap-x-7 xl:gap-x-10 sm:text-md md:text-sm lg:text-md text-white md:text-black font-bold font-sans">
              <li className="p-4 hover:underline text-pink-600 hover:text-pink-600 underline-offset-2">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/">Pages</Link>
              </li>
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/ProductDetails">Products</Link>
              </li>
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/shopGrid">Shop</Link>
              </li>
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-x-4 items-center">
            {/* Search bar - hidden on small screens */}
            <div className="hidden lg:flex w-full bg-gray-200 rounded-md items-center">
              <input
                className="w-full p-1 rounded-md bg-gray-200 outline-none"
                type="search"
                placeholder="Search..."
              />
              <Search className="text-xl ml-3 bg-pink-600 px-1 py-1 text-white" />
            </div>

            {/* Toggle Button for mobile */}
            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggle}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
