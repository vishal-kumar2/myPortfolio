import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroAbout from "./components/HeroAbout";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ParticlesBg from "./components/ParticlesBg";

function App() {
  return (
      <div className="relative min-h-screen font-sans bg-white dark:bg-black dark:text-white transition-colors duration-500">
      {/* Global background rendered once behind all pages */}
      <ParticlesBg />
        <Router>
        <div className="relative z-10">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <HeroAbout />
                  <Skills />
                  <Projects />
                  <Contact />
                  <Footer/>
                </>
              }
            />

            {/* All Projects Page */}
            
          </Routes>
        </div>
      
    </Router>
    </div>
  );
}

export default App;
