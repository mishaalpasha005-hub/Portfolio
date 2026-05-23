import React from "react";
import BannerImg from "../../assets/banner.avif"

const ProjectCard = ({ title, main }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-4 shadow-lg hover:scale-105  duration-300 max-w-sm">

      <img
        className="w-full h-40 object-cover rounded-xl mb-4"
        src={BannerImg}
        alt={title}
      />

      <h3 className="text-lg md:text-xl font-bold mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-300 leading-relaxed">
        {main}
      </p>

      <div className="mt-4 flex gap-3">

        <button className="bg-[#465697] px-4 py-2 text-sm rounded-full font-semibold hover:opacity-80 duration-300">
          Demo
        </button>

        <button className="bg-[#465697] px-4 py-2 text-sm rounded-full font-semibold hover:opacity-80 duration-300">
          Source Code
        </button>

      </div>
    </div>
  );
};

export default ProjectCard;