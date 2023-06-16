import React from "react";
import { AiOutlineGithub, AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="flex justify-center items-center text-white font-kanit mx-20 mb-20 md:my-0">
      <div className=" grid grid-flow-row gap-8 md:gap-4 md:grid-cols-2 sm:w-[80%]">
        <div className="bg-[#202020] drop-shadow-projects rounded-xl px-4 py-4">
          <div>
            <p>
              <a
                className="border-b-[2px]"
                href="https://github.com/Kr-dev1"
                target="blank"
              >
                Kasturi
              </a>{" "}
              <span>/</span>{" "}
              <a
                className="border-b-[2px]"
                href="https://github.com/Kr-dev1/CryptoWiki/"
                target="blank"
              >
                CryptoWiki
              </a>
            </p>
          </div>
          <div className="py-6 md:px-8">
            <p>Tech Stack :</p>
            <div className="flex gap-4">
              <p className="uppercase text-react">React</p>
              <p className="uppercase text-javascript">Javascript</p>
              <p className="uppercase text-css">Css</p>
              <p className="uppercase text-tailwind">Tailwind</p>
              <p className="uppercase text-firebase">firebase</p>
            </div>
          </div>
          <div className="px-8">
            <p>
              The CryptoWiki integrates with Coingecko API and Firebase for
              watchlist management and user authentication. It offers users a
              comprehensive view of the cryptocurrency market by displaying the
              top 30 coins by market capitalization and top 7 trending coins
              with real-time data and detailed information. Users can create
              accounts, securely log in, and personalize their experience by
              adding coins to their watchlist, which is securely stored in
              Firebase.
            </p>
          </div>
          <div className="flex items-center justify-center gap-10 mt-12 drop-shadow-projects">
            <a href="https://cryptowiki.surge.sh/" target="blank">
              <div className="flex items-center">
                <AiOutlineHome />
                <p>HomePage</p>
              </div>
            </a>
            <a href="https://github.com/Kr-dev1/CryptoWiki/" target="blank">
              <div className="flex items-center">
                <AiOutlineGithub />
                <p>Github</p>
              </div>
            </a>
          </div>
        </div>
        <div className="bg-[#202020] drop-shadow-projects rounded-xl px-4 py-4">
          <div>
            <p>
              <a
                className="border-b-[2px]"
                href="https://github.com/Kr-dev1"
                target="blank"
              >
                Kasturi
              </a>{" "}
              <span>/</span>{" "}
              <a
                className="border-b-[2px]"
                href="https://github.com/Kr-dev1/Filmagnet/"
                target="blank"
              >
                Filmagnet
              </a>
            </p>
            <div className="py-6 md:px-8">
              <p>Tech Stack :</p>
              <div className="flex gap-4">
                <p className="uppercase text-react">React</p>
                <p className="uppercase text-javascript">Javascript</p>
                <p className=" uppercase text-tailwind">tailwind</p>
              </div>
            </div>
            <div className="sm:px-8">
              <p>
                Filmagnet is a film search app built using React and the TMDB
                API. It provides users with a curated selection of recent
                trending movies and TV shows from the past week. The app
                features separate pages for browsing all movies and TV shows,
                allowing users to explore a vast collection of entertainment
                content. Additionally, it includes a search box that enables
                users to find specific TV shows and movies based on their
                preferences.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 pt-12 drop-shadow-projects">
            <a href="https://filmagnet.surge.sh/" target="blank">
              <div className="flex items-center">
                <AiOutlineHome />
                <p>HomePage</p>
              </div>
            </a>
            <a href="https://github.com/Kr-dev1/Filmagnet/" target="blank">
              <div className="flex items-center">
                <AiOutlineGithub />
                <p>Github</p>
              </div>
            </a>
          </div>
        </div>
        <div className="bg-[#202020] drop-shadow-projects rounded-xl px-4 py-4">
          <div>
            <p>
              <a
                className="border-b-[2px]"
                href="https://github.com/Kr-dev1"
                target="blank"
              >
                Kasturi
              </a>{" "}
              <span>/</span>{" "}
              <a
                className="border-b-[2px]"
                href="https://github.com/Kr-dev1/Qr-code-gen/"
                target="blank"
              >
                Qr Everything
              </a>
            </p>
          </div>
          <div className="px-6 md:py-8">
            <p>Tech Stack : </p>
            <div className="flex gap-4">
              <p className=" text-html uppercase">Html</p>
              <p className="text-css uppercase">Css</p>
              <p className="text-javascript uppercase">Javascript</p>
            </div>
          </div>
          <div className="px-8">
            <p>
              The QR code generator is a JavaScript-based application that
              allows users to generate and download custom QR codes based on
              their input. Users can enter various types of data, such as text,
              URLs, contact information, or even WiFi credentials, and the
              application will dynamically generate a QR code representing that
              data.
            </p>
          </div>
          <div className="flex items-center justify-center gap-10 pt-12 drop-shadow-projects">
            <a href="https://qr-everything.netlify.app" target="blank">
              <div className="flex items-center">
                <AiOutlineHome />
                <p>HomePage</p>
              </div>
            </a>
            <a href="https://github.com/Kr-dev1/Qr-code-gen" target="blank">
              <div className="flex items-center">
                <AiOutlineGithub />
                <p>Github</p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#202020] drop-shadow-projects rounded-2xl h-[300px]">
          <p>Work in progress.....</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
