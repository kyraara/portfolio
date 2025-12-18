import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring, useTransform } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [

    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Tech", href: "#techStack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Home");

    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollY, scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (latest > 150) {
            setIsScrolled(true);
            if (latest > previous && !isOpen) {
                setHidden(true);
            } else {
                setHidden(false);
            }
        } else {
            setIsScrolled(false);
            setHidden(false);
        }
    });

    return (
        <>
            <motion.div
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-120%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
            >
                <nav
                    className={`
            relative flex flex-col w-[90%] md:w-fit transition-all duration-300
            ${isScrolled
                            ? "bg-neutral-900/80 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-xl rounded-2xl"
                            : "bg-transparent border border-transparent rounded-full"
                        }
          `}
                >
                    <div className="flex items-center justify-between px-3 py-2">

                        <a
                            href="#"
                            className="pl-3 pr-6 text-lg font-bold tracking-tighter text-white flex items-center gap-2 group"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            <div className="w-3 h-3 bg-indigo-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                            <span className="group-hover:text-indigo-400 transition-colors">PORTFOLIO</span>
                        </a>

                        <ul className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setActiveTab(link.name)}
                                        className="relative px-5 py-2 text-sm font-medium text-white transition-colors rounded-full"
                                    >
                                        {activeTab === link.name && (
                                            <motion.div
                                                layoutId="nav-pill"
                                                className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <span className={`relative z-10 transition-colors ${activeTab === link.name ? "text-white" : "text-neutral-400 hover:text-white"}`}>
                                            {link.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="hidden md:block pl-6 pr-1">
                            <a
                                href="/cv-anda.pdf"
                                className="px-5 py-2 text-xs font-bold bg-white text-black rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)]"
                            >
                                Resume
                            </a>
                        </div>

                        <div className="md:hidden pr-1">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                {isOpen ? <FiX /> : <FiMenu />}
                            </button>
                        </div>
                    </div>

                    {isScrolled && (
                        <motion.div
                            className="absolute bottom-0 left-0 h-[2px] bg-indigo-500 rounded-full"
                            style={{ scaleX, transformOrigin: "0%" }}
                            initial={{ width: "100%" }}
                        />
                    )}

                </nav>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="fixed top-24 left-4 right-4 z-40 bg-neutral-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:hidden flex flex-col gap-4 shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => {
                                    setActiveTab(link.name);
                                    setIsOpen(false);
                                }}
                                className="text-lg font-medium text-neutral-300 hover:text-white border-b border-white/5 pb-4 pl-2"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/cv-refki.pdf"
                            className="mt-2 w-full py-4 bg-indigo-600 text-center text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;