import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white">

      <Hero />
      <Navbar/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;