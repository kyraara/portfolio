import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    onClick={scrollToTop}
                    className="
            fixed bottom-8 right-8 z-50
            p-4 rounded-full shadow-lg border border-white/10
            bg-neutral-900/80 backdrop-blur-md text-white
            hover:bg-indigo-600 hover:border-indigo-600 hover:-translate-y-1
            transition-all duration-300 group
          "
                    aria-label="Back to Top"
                >
                    <FiArrowUp className="text-xl group-hover:animate-bounce" />

                    <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-md -z-10 group-hover:bg-indigo-500/40 transition-colors" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;