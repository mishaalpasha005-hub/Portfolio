import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div
            id="Footer"
            className="flex justify-around items-center bg-[#1a1a1a] text-white p-10 md:p-12"
        >
            <div>
                <h1 className="text-2xl md:text-6xl font-bold">
                    Contact
                </h1>

                <h3 className="text-sm md:text-2xl font-normal">
                    Feel Free to Reach Out
                </h3>
            </div>

            <ul className="text-sm md:text-xl space-y-4">
                <li className="flex items-center gap-2">
                    <MdOutlineEmail size={20} />
                    Myemail@gmail.com
                </li>

                <li className="flex items-center gap-2">
                    <CiLinkedin size={20} />
                    Linkedin.com/username
                </li>

                <li className="flex items-center gap-2">
                    <FaGithub size={20} />
                    Github.com/username
                </li>
            </ul>
        </div>
    );
};

export default Footer;