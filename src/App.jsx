import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-indigo-500 selection:text-white">

      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />

    </div>
  );
}

export default App;