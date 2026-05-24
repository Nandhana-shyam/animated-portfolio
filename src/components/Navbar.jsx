import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "-100px 0px -100px 0px",
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    sections.forEach((section) => {
      observer.unobserve(section);
    });

    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const navItems = ["home", "about", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -250, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-center gap-10 text-sm uppercase tracking-[4px]">

        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`relative transition duration-300
            ${
              activeSection === item
                ? "text-purple-400"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            {item}

            {activeSection === item && (
              <motion.div
                layoutId="activeSection"
                className="absolute left-0 -bottom-2 w-full h-2px bg-purple-400"
              />
            )}
          </a>
        ))}

      </div>
    </motion.nav>
  );
}

export default Navbar;