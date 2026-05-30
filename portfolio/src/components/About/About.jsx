import React from "react";
import aboutImg from "../../assets/abouttechgirl.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
    return (
        <div id="#About"
         className="text-white flex justify-center px-6 md:px-20 py-16">

            <div className="bg-black bg-opacity-30 rounded-2xl p-8 md:p-12 shadow-xl max-w-6xl w-full">

                <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center md:text-left">
                    About
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-10">

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src={aboutImg}
                            alt="About"
                            className="w-64 md:w-80 object-cover"
                        />
                    </div>

                    {/* Content */} 
                    <div className="space-y-8">

                        {/* Item 1 */}
                        <div className="flex gap-4">
                            <IoArrowForward size={28} className="mt-1 text-[#465697]" />

                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold">
                                    Frontend Developer
                                </h3>

                                <p className="text-gray-300 mt-2 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex gap-4">
                            <IoArrowForward size={28} className="mt-1 text-[#465697]" />

                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold">
                                    Database Developer
                                </h3>

                                <p className="text-gray-300 mt-2 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex gap-4">
                            <IoArrowForward size={28} className="mt-1 text-[#465697]" />

                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold">
                                    Backend Developer
                                </h3>

                                <p className="text-gray-300 mt-2 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;