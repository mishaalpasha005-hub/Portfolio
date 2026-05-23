import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return (
        <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 relative">

            <span className="text-xl font-bold tracking-wide">
                Port<span className="text-[#fbbf24]">folio</span>
            </span>

            {/* Menu Icon */}
            {menu ? (
                <RiCloseLine
                    size={30}
                    className="md:hidden absolute right-10 top-6 cursor-pointer"
                    onClick={() => setMenu(false)}
                />
            ) : (
                <RiMenu2Line
                    size={30}
                    className="md:hidden absolute right-10 top-6 cursor-pointer"
                    onClick={() => setMenu(true)}
                />
            )}

            {/* Navbar Links */}
            <ul
                className={`${menu ? "block" : "hidden"} 
                w-full md:w-auto mt-4 md:mt-0 font-semibold
                bg-black md:bg-transparent rounded-xl md:flex gap-6
                text-center p-4 md:p-0`}
            >

                <a href="#About">
                    <li className="p-2 hover:text-[#fbbf24]">
                        About
                    </li>
                </a>

                <a href="#Experience">
                    <li className="p-2  hover:text-[#fbbf24]">
                        Experience
                    </li>
                </a>

                <a href="#Projects">
                    <li className="p-2  hover:text-[#fbbf24]">
                        Projects
                    </li>
                </a>

                <a href="#Footer">
                    <li className="p-2  hover:text-[#fbbf24]">
                        Contact
                    </li>
                </a>

            </ul>

        </nav>
    );
};

export default Navbar;