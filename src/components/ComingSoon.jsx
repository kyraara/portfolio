import React from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const ComingSoon = () => {
    const navigate = useNavigate();

    return (
        <motion.section
            initial={{ opacity: 0, x: 20 }}  // Masuk dari kanan sedikit
            animate={{ opacity: 1, x: 0 }}   // Posisi normal
            exit={{ opacity: 0, x: -20 }}    // Keluar ke kiri sedikit
            transition={{ duration: 0.4 }}
            className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center px-6"
        >

            {/* Background Layers (Konsisten dengan Portfolio) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-80" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex flex-col items-center text-center max-w-2xl"
            >
                {/* Icon Container */}
                <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-30 rounded-full animate-pulse" />
                    <div className="relative w-24 h-24 bg-neutral-900 border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl">
                        <FiClock className="text-5xl text-indigo-400" />
                    </div>
                </div>

                {/* Text */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                    Work in Progress
                </h1>

                <p className="text-neutral-400 text-lg md:text-xl mb-10 leading-relaxed">
                    Halaman proyek ini sedang dalam tahap pengembangan (Cooking 👨‍🍳).
                    <br className="hidden md:block" />
                    Saya sedang menyempurnakan detail akhir agar hasilnya maksimal.
                </p>

                {/* Back Button */}
                <button
                    onClick={() => navigate("/")} // Kembali ke Home
                    className="group relative px-8 py-3.5 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        Kembali ke Portfolio
                    </span>
                    {/* Shimmer Effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-neutral-300/50 to-transparent skew-x-12 group-hover:animate-shine" />
                </button>

            </motion.div>

            {/* Footer Kecil */}
            <div className="absolute bottom-8 text-neutral-600 text-sm font-mono">
                System Status: <span className="text-green-500 animate-pulse">● Building...</span>
            </div>

        </motion.section>
    );
};

export default ComingSoon;