"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.left = `${e.clientX}px`;
      ref.current.style.top = `${e.clientY}px`;
      ref.current.style.opacity = "1";
    };
    const handleLeave = () => {
      if (ref.current) ref.current.style.opacity = "0";
    };
    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        pointerEvents: "none",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(212,175,119,0.10) 0%, rgba(212,175,119,0.04) 50%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        opacity: 0,
        transition: "opacity 0.35s ease",
        zIndex: 9999,
        left: "-100px",
        top: "-100px",
        mixBlendMode: "screen",
      }}
    />
  );
}

export default CursorGlow;
