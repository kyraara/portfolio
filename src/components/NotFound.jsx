import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiAlertTriangle } from "react-icons/fi";

const NotFound = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center px-6"
        >
            {/* Background Effect (Sama dengan halaman lain agar konsisten) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-80" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Background Text Besar (Efek visual) */}
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-bold text-white/[0.03] pointer-events-none select-none">
                404
            </h1>

            <div className="relative z-10 text-center max-w-lg">
                {/* Icon Floating */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="mx-auto mb-6 w-20 h-20 bg-neutral-900 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl"
                >
                    <FiAlertTriangle className="text-4xl text-red-500" />
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
                    Halaman Tidak Ditemukan
                </h2>

                <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                    Ups! Sepertinya Anda tersesat di antariksa. Halaman yang Anda cari tidak ada atau telah dipindahkan.
                </p>

                <Link
                    to="/"
                    className="group relative inline-flex items-center gap-3 px-8 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <FiHome className="text-lg" />
                        Kembali ke Bumi
                    </span>
                    {/* Shimmer Effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-neutral-300/50 to-transparent skew-x-12 group-hover:animate-shine" />
                </Link>
            </div>

            <div className="absolute bottom-8 text-neutral-600 text-sm font-mono">
                Error Code: 404_PAGE_NOT_FOUND
            </div>
        </motion.section>
    );
};

export default NotFound;