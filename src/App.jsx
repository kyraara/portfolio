import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ComingSoon from "./components/ComingSoon";
import NotFound from "./components/NotFound";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* === SETUP SEO DI SINI === */}
      <Helmet>
        {/* Judul Tab Browser */}
        <title>Refki | Fullstack Developer Portfolio</title>

        {/* Deskripsi untuk Google Search */}
        <meta name="description" content="Portfolio resmi Refki. Fullstack Developer spesialis React, Tailwind, dan 3D Web Experiences." />

        {/* --- OPEN GRAPH (Untuk WhatsApp, LinkedIn, Facebook) --- */}
        <meta property="og:title" content="Refki - Creative Developer" />
        <meta property="og:description" content="Lihat karya-karya web interactive dan 3D terbaru saya." />
        <meta property="og:image" content="https://portfolio-refki.vercel.app/og-image.png" /> {/* Ganti dengan link deploy Vercel Anda nanti */}
        <meta property="og:url" content="https://portfolio-refki.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* --- TWITTER CARD (Untuk Twitter/X) --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Refki - Creative Developer" />
        <meta name="twitter:description" content="Lihat karya-karya web interactive dan 3D terbaru saya." />
        <meta name="twitter:image" content="https://portfolio-refki.vercel.app/og-image.png" />
      </Helmet>
      {/* === END SEO === */}

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
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white selection:bg-indigo-500 selection:text-white">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;