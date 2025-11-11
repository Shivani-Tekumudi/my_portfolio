"use client";
import { useEffect } from "react";

export default function ScrollTrigger() {
useEffect(() => {

    const handleHashChange = () => {
        const target = document.querySelector(window.location.hash);

         if (target) {
        target.style.opacity = "0";
        target.style.transform = "translateY(40px)";
        setTimeout(() => {
          target.style.transition = "all 0.6s ease";
          target.style.opacity = "1";
          target.style.transform = "translateY(0)";
        }, 50);
      }
    };
     window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return null;
}