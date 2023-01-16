"use client";

import { useEffect, useRef } from "react";

export const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2 - 100;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block custom-cursor opacity-50 z-50 w-5 h-5 border-[5px] border-rose-400 rounded-full fixed pointer-events-none"
    />
  );
};
