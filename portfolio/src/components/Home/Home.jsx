import React from "react";
import avatorImg from "../../assets/cartoontechgirl.avif";

const Home = () => {
    return (
   <section className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20">

    <div className="md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight text-center md:text-left">
            Hello, I'm Misha
        </h1>

        <p className="text-sm md:text-xl text-gray-300 leading-relaxed">
            I build clean and creative web experiences. Currently learning, creating, and growing every day.
        </p>

        <button className="mt-5 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 transitiom duration-300 hover-scale-105 font-semibold
        rounded-3xl bg-[#7c3aed">
    
        </button>
    </div>

    <img
        className="w-48 h-48 md:w-[420px] md:h-[420px] object-cover"
        src={avatorImg}
        alt="Avatar"
    />

</section>
    );
};

export default Home;