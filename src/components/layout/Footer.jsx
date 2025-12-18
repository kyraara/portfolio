import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-black py-8 border-t border-white/5 relative z-50">
            <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-2">

                <p className="text-neutral-600 text-sm font-mono text-center">
                    Designed & Built by <span className="text-neutral-400 hover:text-white transition-colors cursor-default">KyRa</span> © 2025
                </p>

                <p className="text-neutral-800 text-xs text-center">
                    Built with React, Tailwind & Framer Motion
                </p>

            </div>
        </footer>
    );
};

export default Footer;