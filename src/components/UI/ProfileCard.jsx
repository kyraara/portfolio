import React, { useRef, useEffect } from "react";
import "./ProfileCard.css";

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);

export default function ProfileCard({
    avatarUrl,
    name = "Refki",
    title = "Frontend Developer",
    handle = "refki.dev",
    status = "Online",
    onContactClick,
}) {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        if (window.matchMedia("(pointer: coarse)").matches) return;

        const move = (e) => {
            const r = el.getBoundingClientRect();
            const x = clamp(((e.clientX - r.left) / r.width) * 100);
            const y = clamp(((e.clientY - r.top) / r.height) * 100);

            el.style.setProperty("--pointer-x", `${x}%`);
            el.style.setProperty("--pointer-y", `${y}%`);
            el.style.setProperty("--rotate-x", `${(y - 50) / 6}deg`);
            el.style.setProperty("--rotate-y", `${-(x - 50) / 6}deg`);
        };

        const reset = () => {
            el.style.setProperty("--pointer-x", `50%`);
            el.style.setProperty("--pointer-y", `50%`);
            el.style.setProperty("--rotate-x", `0deg`);
            el.style.setProperty("--rotate-y", `0deg`);
        };

        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", reset);

        return () => {
            el.removeEventListener("pointermove", move);
            el.removeEventListener("pointerleave", reset);
        };
    }, []);

    return (
        <div ref={wrapperRef} className="pc-card-wrapper">
            <div className="pc-card">
                <div className="pc-avatar-content">
                    <img src={avatarUrl} alt={name} />
                </div>

                <div className="pc-details">
                    <h3>{name}</h3>
                    <p>{title}</p>
                </div>

                <div className="pc-user-info">
                    <div>
                        <div className="pc-handle">@{handle}</div>
                        <div className="pc-status">{status}</div>
                    </div>
                    <button onClick={onContactClick}>Contact Me</button>
                </div>
            </div>
        </div>
    );
}
