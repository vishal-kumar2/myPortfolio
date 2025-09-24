import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  bg-white/20 dark:bg-white/5 backdrop-blur-md text-black dark:text-white border-t border-gray-300 dark:border-gray-700 py-6 text-center mt-10">
      <p className="text-sm mb-2">
        © {new Date().getFullYear()} Vishal's Portfolio. All rights reserved.
      </p>

      <div className="mt-2 flex justify-center gap-6 text-2xl">
        <a
          href="https://github.com/vishal-kumar2"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/vishal-kumar-gupta-012b65216/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:vishalk73877@email.com"
          className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
