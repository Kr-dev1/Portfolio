import React from "react";
import heroimg from "../assets/hero.png";
import Resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <div className="flex items-center justify-center md:mt-[60px] text-white drop-shadow-custom">
      <div className="flex flex-col md:flex-row items-center w-[90%] md:w-[80%]  bg-[#202020] px-10 py-10 rounded-2xl font-kanit">
        <div>
          <img className="min-w-[200px] px-4 mr-2 pb-10" src={heroimg} loading="lazy"/>
        </div>
        <div>
          <p className="py-2">
            Hi, I'm KasturiRangan. I'm based in Bangalore, India.
          </p>
          <p>
            As a <span className=" font-pacifico px-2">Front-end Developer</span>
            with a keen eye for visual communication, I listen to every little
            feedback I get from the audience about my design. I'm Papassionate
            about developing the highest quality ReactJS products.
          </p>
          <p className="py-2">Tech I use:</p>
          <div className="flex gap-3 flex-wrap">
            <img
              className="w-6 h-6 md:w-8 md:h-8"
              src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
              alt="Javascript"
            />
            <img
              className="w-6 h-6 md:w-8 md:h-8"
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt="React"
            />
            <img
              className="w-6 h-6 md:w-8 md:h-8"
              src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/tailwind-css-icon.svg"
              alt="Tailwind"
            />
            <img
              className="w-6 h-6 md:w-8 md:h-8"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024"
              alt="Bootstrap"
            />
            <img
              className="w-6 h-6 md:w-8 md:h-8"
              src="https://img.icons8.com/?size=512&id=nMeAkcoE7aTF&format=png"
              alt="Figma"
            />
            <img
              className="w-6 h-6 md:w-8 md:h-8"
              src="https://img.icons8.com/?size=512&id=QBqFNfPPB2Kx&format=png"
              alt="Sass"
            />
            <img
              className="w-6 h-6 md:w-8 md:h-8"
              src="https://img.icons8.com/?size=512&id=gFw7X5Tbl3ss&format=png"
              alt="Material UI"
            />
          </div>
          <div>
            <button className="mt-5 bg-slate-400 text-black px-2 py-2 rounded-2xl flex items-center drop-shadow-nav">
              <a href={Resume} download="kasturi's resume">
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
