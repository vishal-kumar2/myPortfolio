import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

export default function HeroAbout() {
  return (
    <section id="hero" className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-20">
      <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-10 max-w-3xl shadow-2xl border border-white/20 dark:border-white/10">
        <h1 className="text-5xl font-extrabold mb-4">
          Hey Wassup, This is <span className="text-violet-600 dark:text-violet-600">Vishal</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          A passionate Full-Stack Developer who loves solving problems and building web apps using React, Node.js, MongoDB, and more. I believe in clean UI/UX and writing meaningful code.
        </p>
        <div className="flex justify-center gap-6 flex-wrap mb-6">
          <a href="https://drive.google.com/file/d/1wjdGWf7SCPuT_-qY6TYzWYiMVzrMEMq4/view?usp=sharing" target="_blank" download className="flex justify-between items-center bg-violet-600 dark:bg-violet-600 hover:bg-violet-900 dark:hover:bg-violet-800 text-white py-2 px-6 rounded-lg transition">
            Resume <TbFileCv />
          </a>
          <a href="https://github.com/vishal-kumar2" target="_blank" rel="noopener noreferrer" className="bg-gray-800 flex justify-between items-center  hover:bg-gray-900 text-white py-2 px-6 rounded-lg transition">
            GitHub <FaGithub/>
          </a>
          <a href="https://www.linkedin.com/in/vishal-kumar-gupta-012b65216/" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition">
            LinkedIn <FaLinkedin/>
          </a>
        </div>
      </div>
    </section>
  );
}
