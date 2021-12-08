import React from "react";

import hero from "../../assets/hero.png";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-milk mb-8">
      <div className="w-3/5 -mt-16">
        <img src={hero.src} className="object-cover h-1/3" alt="Hero" />
      </div>
      <div className="text-center">
        <h4 className="text-2xl text-pink-400">An Initiative by SMU Ellipsis</h4>
        <h2 className="text-6xl font-bold my-8 text-pink-300">Project Heartcode</h2>
        <p className="text-lg px-72 mb-8">
          A community service project organised by Singapore Management
          University, School of Information Systems. Project HeartCode serves to
          provide less privileged youths the opportunity to explore their
          interest in IT through solving real world problems with IT
          innovations.
        </p>
      </div>
      <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
    </div>
  );
};

export default Hero;
