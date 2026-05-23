import React from "react";
import {
    FaHtml5,
    FaCss3,
    FaReact,
    FaJs,
    FaFigma,
    FaGoogle,
    FaAmazon,
} from "react-icons/fa";

import { SiMongodb, SiRedis } from "react-icons/si";
import { RiNetflixFill } from "@remixicon/react";

const skills = [
    { icon: <FaHtml5 color="#E34F26" size={50} /> },
    { icon: <FaCss3 color="#1572B6" size={50} /> },
    { icon: <FaReact color="#61DAFB" size={50} /> },
    { icon: <FaJs color="#F7DF1E" size={50} /> },
    { icon: <FaFigma color="#F24E1E" size={50} /> },
    { icon: <SiMongodb color="#47A248" size={50} /> },
    { icon: <SiRedis color="#FF4438" size={50} /> },
];

const experiences = [
    {
        icon: <FaGoogle color="#4285F4" size={50} />,
        company: "Google",
        role: "Software Engineer",
        duration: "Sept 2023 - Present",
    },
    {
        icon: <RiNetflixFill color="#E50914" size={50} />,
        company: "Netflix",
        role: "Frontend Developer",
        duration: "Jan 2022 - Aug 2023",
    },
    {
        icon: <FaAmazon color="#FF9900" size={50} />,
        company: "Amazon",
        role: "Backend Developer",
        duration: "Jun 2021 - Dec 2021",
    },
];

const Experience = () => {
    return (
        <section id="Experience" className="p-10 md:p-24">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-12">
                Experience
            </h1>

            <div className="flex flex-col lg:flex-row gap-12">

                {/* Skills Section */}
                <div className="flex flex-wrap gap-4 lg:w-1/2 items-start">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="w-20 h-20 flex items-center justify-center bg-zinc-950 rounded-xl shadow-lg hover:scale-110 transition duration-300"
                        >
                            {skill.icon}
                        </div>
                    ))}
                </div>

                {/* Experience Cards */}
                <div className="flex flex-col gap-6 lg:w-1/2">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-6 bg-slate-950/50 p-6 rounded-2xl shadow-md hover:scale-[1.02] transition duration-300"
                        >
                            <div>{exp.icon}</div>

                            <div className="text-white">
                                <h2 className="text-xl font-semibold">
                                    {exp.role}, {exp.company}
                                </h2>

                                <p className="text-sm text-gray-400 mb-3">
                                    {exp.duration}
                                </p>

                                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-300">
                                    <li>Worked as Frontend Developer</li>
                                    <li>Worked as Backend Developer</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;