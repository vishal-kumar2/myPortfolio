// src/data/projectsData.js
import currencyconv from "../assets/currencyconv.jpg"
import trackcoin from "../assets/cointracker.avif"

const projects = [
  {
    title: "Currency converter",
    image: currencyconv,
    tech: ["React", "Tailwind", "Particles.js"],
    github: "https://github.com/yourusername/portfolio",
    featured: true,
  },
  {
    title: "cointracker",
    image: trackcoin,
    tech: ["Node.js", "Socket.io", "React"],
    github: "https://github.com/yourusername/chatapp",
    featured: true,
  },
  {
    title: "E-commerce Site",
    image: "/projects/ecommerce.png",
    tech: ["Next.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    featured: true,
  },
  {
    title: "E-commerce Site",
    image: "/projects/ecommerce.png",
    tech: ["Next.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    featured: true,
  },
  // Add more...
];

export default projects;
