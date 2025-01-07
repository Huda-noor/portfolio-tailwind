import React from "react";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

const Footer = () => {
  return (
    <section className="relative text-gray-600 body-font custom-background-animation bg-fixed bg-cover bg-center bg-no-repeat">
      <footer>
        <div className="container px-5 py-8 mx-auto flex flex-col xl:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              Huda Noor Portfolio
            </span>
            <p className="text-sm sm:text-base md:text-xl text-blue-900 mt-2 md:mt-0 md:ml-4 md:border-l-2 border-gray-500 md:pl-4">
              © 2024 Huda Noor Portfolio
            </p>
          </div>
          <div className="flex mt-4 xl:mt-0">
            <a
              href="https://facebook.com"
              className="text-blue-600 mx-2"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFacebook size={24} />
            </a>
            <a
              href="https://github.com"
              className="text-black mx-2"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-700 mx-2"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              className="text-pink-500 mx-2"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              className="text-red-600 mx-2"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiYoutube size={24} />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
