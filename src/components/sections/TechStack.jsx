import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiVite,
    SiNextdotjs,
    SiPostgresql,
    SiMongodb,
    SiFigma,
    SiFramer
} from "react-icons/si";


const techStack = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
];

const TechStack = () => {
    return (
        <section className="py-20 bg-black text-white overflow-hidden relative">

            <div className="text-center mb-12 px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Tech <span className="text-indigo-500">Stack</span>
                </h2>
                <p className="text-neutral-400 max-w-lg mx-auto">
                    Teknologi dan tools yang saya gunakan untuk membangun aplikasi web berkinerja tinggi.
                </p>
            </div>

            <div className="relative flex flex-col gap-6 mask-gradient">

                <div className="flex overflow-hidden relative w-full">
                    <motion.div
                        className="flex gap-8 px-4 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 20,
                            repeat: Infinity,
                        }}
                    >
                        {[...techStack, ...techStack].map((tech, index) => (
                            <SkillCard key={`row1-${index}`} tech={tech} />
                        ))}
                    </motion.div>
                </div>

                <div className="flex overflow-hidden relative w-full">
                    <motion.div
                        className="flex gap-8 px-4 whitespace-nowrap"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{
                            ease: "linear",
                            duration: 25,
                            repeat: Infinity,
                        }}
                    >
                        {[...techStack, ...techStack].map((tech, index) => (
                            <SkillCard key={`row2-${index}`} tech={tech} />
                        ))}
                    </motion.div>
                </div>

            </div>

            <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </section>
    );
};

const SkillCard = ({ tech }) => {
    return (
        <div className="
      flex items-center gap-3 px-6 py-3 
      bg-neutral-900/50 border border-neutral-800 rounded-full 
      hover:border-indigo-500/50 hover:bg-neutral-800 
      transition-colors duration-300 min-w-max cursor-default
    ">
            <span className="text-2xl">{tech.icon}</span>
            <span className="font-medium text-neutral-300">{tech.name}</span>
        </div>
    );
};

export default TechStack;