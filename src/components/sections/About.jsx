import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import BlurText from "../ui/BlurText";

import Lanyard from "../ui/Lanyard";

import profileImg from "../../assets/profile.jpeg";

const stats = [
  { value: 2, suffix: "+", label: "Tahun Pengalaman" },
  { value: 10, suffix: "+", label: "Proyek Selesai" },
  { value: 3, suffix: "+", label: "Klien Puas" },
];

const CounterItem = ({ value, suffix, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, { duration: 2000 });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) springValue.set(value);
  }, [isInView, value, springValue]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-4">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span className="text-indigo-400">{suffix}</span>
      </div>
      <div className="text-sm text-neutral-400 uppercase tracking-wider font-medium">{label}</div>
    </div>
  );
};

const About = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative w-full py-24 px-6 bg-black text-white overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-80" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-neutral-900/40 backdrop-blur-md border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 p-8 md:p-12 items-start">

            <div className="flex flex-col items-center justify-center md:sticky md:top-10">

              <div className="hidden md:flex justify-center items-start -mt-14 w-full h-[400px] relative cursor-grab active:cursor-grabbing">
                <Lanyard
                  position={[0, 0, 15]}
                  gravity={[0, -40, 0]}
                  fov={20}
                />
              </div>

              <div className="md:hidden relative w-40 h-40 mb-8 rounded-full overflow-hidden border-2 border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

            </div>

            <div className="md:col-span-2 flex flex-col justify-center">
              <BlurText
                text="Tentang Saya"
                animateBy="words"
                direction="top"
                className="text-3xl md:text-5xl font-bold mb-6 text-white"
                transition={{ duration: 0.6 }}
              />

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h3 variants={itemVariants} className="text-xl text-indigo-400 font-medium mb-4">
                  Perpaduan logika kode & estetika desain.
                </motion.h3>

                <motion.div variants={itemVariants} className="space-y-4 text-neutral-300 leading-relaxed text-base md:text-lg">
                  <p>
                    Saya bukan hanya menulis kode; saya menciptakan pengalaman.
                    Sebagai Frontend Developer, saya menggabungkan keahlian teknis
                    dalam <span className="text-white font-semibold">React</span> & <span className="text-white font-semibold">Tailwind</span> dengan
                    insting desain yang tajam.
                  </p>
                  <p>
                    Tujuan saya sederhana: Membangun aplikasi web yang cepat,
                    responsif, dan menyenangkan untuk digunakan—di mana setiap
                    transisi dan interaksi terasa alami.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-8">
                  <a
                    href="/cv-refki.pdf"
                    download
                    className="
                      group relative inline-flex items-center gap-3 px-8 py-3.5
                      bg-white text-black font-bold rounded-full overflow-hidden
                      hover:bg-neutral-200 transition-transform duration-300
                      hover:scale-105 active:scale-95
                      shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]
                    "
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Download size={18} className="group-hover:animate-bounce" />
                      Download CV
                    </span>
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-neutral-300/50 to-transparent skew-x-12 group-hover:animate-shine" />
                  </a>
                </motion.div>

                <motion.div variants={itemVariants} className="w-full h-[1px] bg-white/10 my-10" />

                <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 border-l border-white/10 pl-4 md:pl-0 md:border-l-0">
                  {stats.map((item, i) => (
                    <CounterItem
                      key={i}
                      value={item.value}
                      suffix={item.suffix}
                      label={item.label}
                    />
                  ))}
                </motion.div>

              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;