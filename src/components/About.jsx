import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-[80vh] bg-[#0a0a0a] text-white flex items-center justify-center px-6 py-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
        viewport={{ once: false }}
        className="max-w-4xl"
      >
        <h2
          className="text-5xl md:text-7xl mb-10 text-center"
          style={{ fontFamily: "Playfair Display" }}
        >
          About Me
        </h2>

        <p className="text-zinc-400 text-lg leading-9">
          I am an engineering student passionate about frontend development and
          creating modern web experiences. I enjoy building clean, responsive
          and interactive user interfaces using React and modern frontend
          technologies. My goal is to become a professional frontend developer
          and build applications that combine performance with beautiful design.
        </p>
      </motion.div>
    </section>
  );
}

export default About;