import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="Projects" className="p-10 md:p-24 text-white">

      <h1 className="text-3xl md:text-5xl font-bold mb-12">
        Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-8">

        <ProjectCard
          title="Simple Store Website"
          main="A simple eCommerce website built using HTML, CSS, Bootstrap 5, and JavaScript for the frontend, powered by Python Django on the backend."
        />

        <ProjectCard
          title="Restaurant Website"
          main="A modern restaurant website named Foodies built using HTML, CSS, Bootstrap 5, and JavaScript for the frontend, powered by Python Django on the backend."
        />

      </div>

    </section>
  );
};

export default Projects;