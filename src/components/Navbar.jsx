import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark"; // returns true/false
  });

  useEffect(() => {
    console.log("Dark mode is:", darkMode); // 🔍 Debug log
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="h-5.5 flex justify-between items-center p-6 backdrop-blur-xl bg-white/10 dark:bg-white/5 border-b border-white/20 sticky top-0 z-50 text-black dark:text-white">
      <h1 className="text-xl font-bold">@Fusion</h1>
      <ul className="flex gap-6">
        <li><a href="#hero">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button
            onClick={() => {
              console.log("Toggling dark mode"); // 🔍 Debug log
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
