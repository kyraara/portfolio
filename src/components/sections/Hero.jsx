import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from "lucide-react";

import ProfileCard from "../ui/ProfileCard";
import AuroraBackground from "../ui/AuroraBackground";

import profileImg from "../../assets/profile.jpeg";
import grain from "../../assets/grain.jpg";

const Hero = () => {
    const handleContactClick = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative isolate min-h-screen flex items-center justify-center px-6 pt-24 md:pt-10 overflow-hidden bg-black"
        >
            <div className="absolute inset-0 z-0 opacity-60">
                <div className="block md:hidden w-full h-full bg-gradient-to-b from-indigo-900/40 to-black" />
                <div className="hidden md:block w-full h-full">
                    <AuroraBackground />
                </div>
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0 mix-blend-overlay" />
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center z-10 relative">
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 order-2 md:order-1">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                        </span>
                        <span className="text-neutral-300 text-xs font-mono uppercase tracking-widest">
                            Available for work
                        </span>
                    </motion.div>

                    <div className="space-y-2">
                        <div className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                            <DecryptedText text="KyRa" />
                        </div>

                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-white bg-clip-text text-transparent"
                        >
                            Fullstack Developer
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-sm font-mono text-neutral-500 tracking-wide pt-2"
                        >
                            <span className="text-indigo-400">const</span> stack = [
                            <span className="text-white">'React'</span>,
                            <span className="text-white">'Tailwind'</span>,
                            <span className="text-white">'Motion'</span>]
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-neutral-400 text-base md:text-lg max-w-lg leading-relaxed"
                    >
                        Membangun antarmuka web yang <span className="text-white font-medium">bersih</span>, <span className="text-white font-medium">konsisten</span>, dan <span className="text-white font-medium">performa tinggi</span>.
                        Fokus pada detail UI dan interaksi mikro yang memanjakan pengguna.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center gap-6 pt-4 w-full md:w-auto"
                    >
                        <button
                            onClick={handleContactClick}
                            className="group relative px-8 py-3.5 rounded-full bg-white text-black font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Contact Me <ExternalLink size={16} />
                            </span>
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-neutral-300/50 to-transparent skew-x-12 group-hover:animate-shine" />
                        </button>

                        <div className="flex items-center gap-4">
                            <SocialButton href="#" icon={<Github size={20} />} label="Github" />
                            <SocialButton href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
                            <SocialButton href="#" icon={<Mail size={20} />} label="Email" />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                    className="flex justify-center md:justify-end order-1 md:order-2 relative"
                >
                    <div className="absolute inset-0 bg-indigo-500/30 blur-[80px] rounded-full z-0 transform translate-y-10" />

                    <div className="relative z-10">
                        <ProfileCard
                            name="Refki"
                            title="Full Stack Developer"
                            handle="refki.dev"
                            status="Coding"
                            grainUrl={grain}
                            avatarUrl={profileImg}
                            enableTilt
                            behindGlowEnabled={false}
                            onContactClick={handleContactClick}
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 flex flex-col items-center gap-2 pointer-events-none"
            >
                <span className="text-[10px] uppercase tracking-widest opacity-70">Scroll</span>
                <ArrowDown size={18} />
            </motion.div>
        </section>
    );
};

const Magnetic = ({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

const SocialButton = ({ href, icon, label }) => (
    <Magnetic>
        <a
            href={href}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-indigo-500/50 transition-colors"
            aria-label={label}
        >
            {icon}
            <span className="absolute -top-10 px-2 py-1 bg-neutral-800 text-[10px] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                {label}
            </span>
        </a>
    </Magnetic>
);

const DecryptedText = ({ text }) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    const [displayText, setDisplayText] = useState(text);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let iteration = 0;
            const interval = setInterval(() => {
                setDisplayText((prev) =>
                    prev.split("").map((letter, index) => {
                        if (index < iteration) return text[index];
                        return letters[Math.floor(Math.random() * letters.length)];
                    }).join("")
                );
                if (iteration >= text.length) clearInterval(interval);
                iteration += 1 / 3;
            }, 30);
            return () => clearInterval(interval);
        }
    }, [isInView, text]);

    return (
        <span ref={ref} className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            {displayText}
        </span>
    );
};

export default Hero;