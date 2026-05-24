import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[70vh] bg-[#0a0a0a] text-white flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full top-10 left-10"></div>

      <div className="absolute w-72 h-72 bg-pink-500/10 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="relative z-10 max-w-3xl text-center"
      >
        {/* Heading */}
        <h2
          className="text-5xl md:text-7xl mb-8"
          style={{ fontFamily: "Playfair Display" }}
        >
          Contact Me
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-lg leading-8 mb-12">
          I’m currently focusing on frontend development and building
          modern web experiences using React. Feel free to connect
          with me for collaborations, internships or opportunities.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">

          <a
            href="#"
            className="w-14 h-14 rounded-full border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-2xl hover:scale-110 hover:border-purple-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            className="w-14 h-14 rounded-full border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-2xl hover:scale-110 hover:border-purple-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            className="w-14 h-14 rounded-full border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-2xl hover:scale-110 hover:border-purple-400 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;