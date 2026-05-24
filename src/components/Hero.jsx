import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home"
      className="relative h-screen bg-[#0a0a0a] text-white flex items-center justify-center overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute w-72 h-72 bg-purple-500/30 blur-3xl rounded-full top-10 left-10"></div>

      <div className="absolute w-72 h-72 bg-pink-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
        className="text-center z-10 px-6"
      >
        

        <h1 className="text-6xl md:text-8xl font-bold">
          Nandhana
        </h1>

        <p className="text-zinc-400 mt-6 max-w-xl">
          Building modern, responsive and animated web experiences using React.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a href="#projects">
          <button  className="bg-purple-600 px-6 py-3 rounded-2xl hover:bg-purple-700 transition">
            View Projects
          </button>
          </a>
        
          <a href="#contact">
          <button className="border border-zinc-700 px-6 py-3 rounded-2xl hover:border-zinc-500 transition">
            Contact Me
          </button></a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;