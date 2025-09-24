import { useEffect, useRef, useState } from "react";
import skills from "../data/skillsData";
import skillsProgress from "../data/skillsProgress";

const Skills = () => {
  const progressRefs = useRef([]);
  const [visibleBars, setVisibleBars] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updated = new Set(visibleBars);

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            updated.add(index);
          }
        });

        // Only update state if new entries were added
        if (updated.size !== visibleBars.size) {
          setVisibleBars(new Set(updated));
        }
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleBars]);

  return (
    <section
      id="skills"
      className="min-h-screen py-13 px-5  text-black dark:text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>

      {/* Skill Logos Carousel */}
      <div
        className="flex overflow-x-auto gap-6 scrollbar-hide px-2 py-4 mb-12"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-40 rounded-2xl bg-white dark:bg-gray-900 shadow-md flex flex-col items-center justify-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-20 h-20 highlight mb-2 cursor-auto object-contain"
            />
            <p className="text-center font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Animated Progress Bars */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillsProgress.map((skill, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (progressRefs.current[index] = el)}
          >
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-gray-600 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full">
              <div
                className={`bg-blue-500 dark:bg-blue-400 h-2 rounded-full transition-all duration-1000 ease-out`}
                style={{
                  width: visibleBars.has(index) ? `${skill.level}%` : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
