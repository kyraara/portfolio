import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, useMotionValue, useSpring, useTransform, useInView, AnimatePresence } from "framer-motion";
import { FiGithub, FiInstagram, FiMail, FiLinkedin, FiSend, FiCheck, FiLoader, FiCopy } from "react-icons/fi";

const Contact = () => {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);
    const [emailCopied, setEmailCopied] = useState(false);

    // --- EMAILJS CONFIG ---
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setError(null);

        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(
                () => {
                    setIsSending(false);
                    setIsSent(true);
                    e.target.reset();
                    setTimeout(() => setIsSent(false), 5000);
                },
                (error) => {
                    setIsSending(false);
                    setError("Gagal mengirim pesan. Silakan coba lagi.");
                    console.error(error.text);
                }
            );
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("refkysyahputra10@gmail.com"); // Ganti email anda
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <section id="contact" className="relative py-24 px-6 bg-black overflow-hidden flex flex-col items-center justify-center">

            {/* Background & Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none mask-gradient-top-bottom" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* --- LEFT: INFO --- */}
                <div className="text-left order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-indigo-400 font-medium tracking-widest text-sm uppercase">Open for Work</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        <DecryptedText text="Let's Start a Project Together" />
                    </h2>

                    <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-md">
                        Tertarik bekerja sama? Isi formulir di samping dan saya akan merespons dalam waktu 24 jam.
                    </p>

                    <div className="flex items-center gap-4 mb-12">
                        <div className="flex items-center gap-3 text-neutral-300">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-indigo-400">
                                <FiMail />
                            </div>
                            <a href="mailto:refkysyahputra10@gmail.com" className="hover:text-white transition-colors text-lg font-medium">
                                refkysyahputra10@gmail.com
                            </a>
                        </div>

                        <button
                            onClick={handleCopyEmail}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all relative group"
                        >
                            {emailCopied ? <FiCheck className="text-green-400" /> : <FiCopy />}
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 whitespace-nowrap">
                                {emailCopied ? "Copied!" : "Copy Email"}
                            </span>
                        </button>
                    </div>

                    <div className="hidden md:block">
                        <Dock />
                    </div>
                </div>

                {/* --- RIGHT: FORM --- */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="order-1 md:order-2 bg-neutral-900/50 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl relative"
                >
                    <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-neutral-400 mb-2">Nama</label>
                            <input
                                type="text" name="user_name" required
                                className="w-full bg-black/50 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all placeholder:text-neutral-600"
                                placeholder="Nama Anda"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                            <input
                                type="email" name="user_email" required
                                className="w-full bg-black/50 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all placeholder:text-neutral-600"
                                placeholder="Email Anda"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-400 mb-2">Pesan</label>
                            <textarea
                                name="message" rows="4" required
                                className="w-full bg-black/50 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all placeholder:text-neutral-600 resize-none"
                                placeholder="Ceritakan tentang proyek Anda..."
                            ></textarea>
                        </div>

                        <AnimatePresence>
                            {error && (
                                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-sm flex items-center gap-2">
                                    ⚠️ {error}
                                </motion.p>
                            )}
                        </AnimatePresence>

                        <button
                            type="submit" disabled={isSending || isSent}
                            className={`relative w-full py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 group ${isSent ? "bg-green-500 text-black cursor-default" : "bg-white text-black hover:bg-neutral-200"} ${isSending ? "opacity-80 cursor-wait" : ""}`}
                        >
                            <div className="relative z-10 flex items-center justify-center gap-2">
                                {isSent ? (
                                    <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center gap-2">
                                        <FiCheck className="text-xl" /> <span>Pesan Terkirim!</span>
                                    </motion.div>
                                ) : (
                                    <>
                                        <span>{isSending ? "Mengirim..." : "Kirim Pesan"}</span>
                                        {isSending ? <FiLoader className="animate-spin" /> : (
                                            <motion.div animate={isSending ? { x: 50, y: -50, opacity: 0 } : { x: 0, y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                                                <FiSend className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                            </motion.div>
                                        )}
                                    </>
                                )}
                            </div>
                        </button>
                    </form>
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
                </motion.div>

                <div className="md:hidden flex justify-center mt-8 order-3">
                    <Dock />
                </div>
            </div>
        </section>
    );
};

// --- SUB-COMPONENTS (DecryptedText & Dock) ---
const DecryptedText = ({ text }) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    const [displayText, setDisplayText] = useState(text);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isInView) {
            let iteration = 0;
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                setDisplayText((prev) =>
                    prev.split("").map((letter, index) => {
                        if (index < iteration) return text[index];
                        return letters[Math.floor(Math.random() * letters.length)];
                    }).join("")
                );
                if (iteration >= text.length) clearInterval(intervalRef.current);
                iteration += 1 / 2;
            }, 30);
        }
        return () => clearInterval(intervalRef.current);
    }, [isInView, text]);

    return <span ref={ref} className="inline-block cursor-default bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">{displayText}</span>;
};

const socialLinks = [
    { icon: <FiGithub />, href: "#", label: "GitHub" },
    { icon: <FiLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <FiInstagram />, href: "#", label: "Instagram" },
    { icon: <FiMail />, href: "mailto:refkysyahputra10@gmail.com", label: "Email" },
];

const Dock = () => {
    let mouseX = useMotionValue(Infinity);
    return (
        <div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="mx-auto md:mx-0 flex h-16 w-fit items-end gap-4 rounded-2xl bg-neutral-900/80 border border-white/10 px-4 pb-3 backdrop-blur-md shadow-2xl"
        >
            {socialLinks.map((link, i) => <DockIcon key={i} mouseX={mouseX} link={link} />)}
        </div>
    );
};

const DockIcon = ({ mouseX, link }) => {
    let ref = useRef(null);
    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });
    let widthSync = useTransform(distance, [-150, 0, 150], [40, 85, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
    return (
        <motion.a ref={ref} href={link.href} target="_blank" rel="noopener noreferrer" style={{ width, height: width }} className="relative flex items-center justify-center rounded-full bg-neutral-800 border border-neutral-700 text-neutral-400 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white transition-colors aspect-square group">
            <span className="text-xl md:text-2xl pointer-events-none group-hover:scale-110 transition-transform">{link.icon}</span>
            <span className="absolute -top-10 text-[10px] bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 pointer-events-none whitespace-nowrap">{link.label}</span>
        </motion.a>
    );
};

export default Contact;