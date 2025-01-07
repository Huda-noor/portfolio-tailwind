import Link from "next/link";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <section className="relative text-gray-600 body-font custom-background-animation bg-fixed bg-cover bg-center bg-no-repeat z-50  top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col xl:flex-row items-center">
          <a
            href="#"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            aria-label="Home"
          >
            <span className="mt-4 ml-0 text-4xl text-blue-800">
              HUDA NOOR Portfolio
            </span>
          </a>
          <nav className="text-gray-950 mt-4 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="#About" className="mr-5 hover:text-blue-600">
              About
            </Link>
            <Link href="#skills" className="mr-5 hover:text-blue-600">
              Skills
            </Link>
            <Link href="#Contact" className="mr-5 hover:text-blue-600">
              Contact
            </Link>
          </nav>
          <a href="/assets/cv/1.pdf" aria-label="Download CV">
            <button className="inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4">
              Download CV
              <AiOutlineCloudDownload className="ml-2" />
            </button>
          </a>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
