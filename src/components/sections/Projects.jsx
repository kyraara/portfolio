import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom"; // Import Link untuk navigasi internal

const projects = [
    {
        id: 1,
        title: "Web GIS Cirebon",
        category: "Web App",
        description:
            "Sistem pemetaan digital interaktif untuk menampilkan data demografi dan spasial Kabupaten Cirebon secara real-time.",
        image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tech: ["Vue 3", "Go (Gin)", "Leaflet", "Tailwind"],
        // Link '#' akan otomatis diarahkan ke halaman Coming Soon
        githubUrl: "#",
        demoUrl: "#",
    },
    {
        id: 2,
        title: "Hantaran Nikahan",
        category: "Branding",
        description:
            "Platform landing page estetik untuk jasa hantaran pernikahan, fokus pada galeri visual dan kemudahan pemesanan via WA.",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tech: ["React", "Framer Motion", "Vite"],
        githubUrl: "https://github.com/username/repo", // Contoh link aktif
        demoUrl: "#", // Masih coming soon
    },
    {
        id: 3,
        title: "Portfolio V1",
        category: "Personal",
        description:
            "Website portfolio modern dengan elemen 3D interaktif (Lanyard), efek spotlight, dan animasi performa tinggi.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tech: ["React", "Three.js", "Tailwind"],
        githubUrl: "#",
        demoUrl: "https://portfolio-v1.com",
    },
    {
        id: 4,
        title: "E-Commerce Dashboard",
        category: "Web App",
        description:
            "Dashboard admin komprehensif untuk manajemen produk, pesanan, dan analitik penjualan dengan grafik interaktif.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tech: ["Next.js", "Prisma", "Chart.js"],
        githubUrl: "#",
        demoUrl: "#",
    },
];

const ProjectCard = ({ project }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;
        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => { setIsFocused(true); setOpacity(1); };
    const handleBlur = () => { setIsFocused(false); setOpacity(0); };
    const handleMouseEnter = () => { setOpacity(1); };
    const handleMouseLeave = () => { setOpacity(0); };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative flex flex-col h-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
            {/* Spotlight Effect Layers */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.1), transparent 40%)`,
                }}
            />
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.4), transparent 40%)`,
                    maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                    WebkitMaskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                }}
            />

            {/* Image Container */}
            <div className="relative w-full aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-20" />

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute top-4 left-4 z-30">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-indigo-400 shadow-lg">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative flex flex-col flex-grow p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                        <span
                            key={i}
                            className="px-2.5 py-1 text-[11px] font-mono text-neutral-300 bg-white/5 rounded border border-white/5 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-colors duration-300"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5 
                  translate-y-0 opacity-100 
                  md:translate-y-2 md:opacity-80 md:group-hover:translate-y-0 md:group-hover:opacity-100 
                  transition-all duration-300 ease-out"
                >
                    {/* BUTTON CODE */}
                    {project.githubUrl === "#" ? (
                        // Jika URL '#' -> Link ke Coming Soon
                        <Link
                            to="/coming-soon"
                            className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer"
                        >
                            <FiLock size={16} />
                            <span>Code</span>
                        </Link>
                    ) : (
                        // Jika URL ada -> Link Eksternal
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors hover:underline underline-offset-4"
                        >
                            <FiGithub size={18} />
                            <span>Code</span>
                        </a>
                    )}

                    {/* BUTTON LIVE DEMO */}
                    {project.demoUrl === "#" ? (
                        // Jika URL '#' -> Link ke Coming Soon
                        <Link
                            to="/coming-soon"
                            className="group/btn relative ml-auto overflow-hidden rounded-full bg-neutral-800 px-4 py-1.5 text-sm font-bold text-neutral-500 border border-white/5 hover:bg-neutral-700 transition-all active:scale-95"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Coming Soon
                            </span>
                        </Link>
                    ) : (
                        // Jika URL ada -> Link Eksternal
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative ml-auto overflow-hidden rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-bold text-white transition-transform active:scale-95 hover:bg-indigo-500"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Live Demo <FiExternalLink size={16} />
                            </span>
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover/btn:animate-shine" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...new Set(projects.map((p) => p.category))];

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <section id="projects" className="py-24 px-6 bg-black relative w-full overflow-hidden">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-80 z-0" />

            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <div className="h-0.5 w-10 bg-indigo-500" />
                        <span className="text-indigo-400 font-medium tracking-widest uppercase text-sm">Portfolio</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Karya <span className="text-neutral-500">Terpilih</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-neutral-400 max-w-xl text-lg"
                    >
                        Koleksi proyek yang menunjukkan kemampuan saya dalam membangun solusi web yang kompleks dan berfokus pada pengalaman pengguna.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-3 mt-8"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`
                                   relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300
                                   ${activeCategory === cat ? "text-white" : "text-neutral-400 hover:text-white"}
                                 `}
                            >
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activePill"
                                        className="absolute inset-0 bg-neutral-800 border border-indigo-500/50 rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;