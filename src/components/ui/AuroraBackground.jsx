import { useEffect, useState } from "react";
import Aurora from "./Aurora";

export default function AuroraBackground() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(pointer: coarse)");
        setIsMobile(mq.matches);

        const handler = (e) => setIsMobile(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    if (isMobile) {
        return (
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                aria-hidden
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f630,transparent_65%)]" />
            </div>
        );
    }

    return (
        <div
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
            aria-hidden
        >
            <div className="absolute inset-0">
                <Aurora
                    colorStops={["#3b82f6", "#6366f1", "#3b82f6"]}
                    amplitude={0.6}
                    blend={0.35}
                    speed={0.6}
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />

            <div className="absolute inset-0 opacity-[0.035] noise-layer" />
        </div>
    );
}
