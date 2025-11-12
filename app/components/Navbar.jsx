"use client";

import { useState,useEffect } from "react";
import { Moon, moon, sun } from "lucide-react";

export default function Navbar(){
   const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const headerOffset = 100; // height of your fixed header/navbar

    const handleScroll = () => {
      let current = "";
      const scrollPos = window.scrollY + headerOffset + 1;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      setActive(current || "home");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount to check if user reloaded mid-page

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          const headerOffset = 100; 
          const elementPosition = target.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Handle clicks or page reload with hash
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // run once if reloaded with hash

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);




    return (
         <nav className="fixed  hidden sm:ml-6 xl:block backdrop-blur-lg flex justify-center gap-6 py-3 xl:w-[66%]">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
     
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        
        <div className="hidden sm:ml-6 lg:block">
          <div className="flex lg:space-x-6 xl:space-x-13">
           

           {["home", "about", "projects", "contact"].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className={`rounded-md px-3 py-2 text-base font-normal transition-all duration-200 ${
            active === item
              ? "nav-active text-gray-950"
              : "text-gray-950 nav-inactive"
          }`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      ))}

            <a href="" className="rounded-full px-3 py-2 text-base font-medium mode"><Moon size={24} className="" /></a>
            
            <a href="#contact" className="btn-contact rounded-full px-5 py-2 text-lg font-medium text-white hover:bg-white/5 hover:text-white">Hire me</a>
            
          </div>
        </div>
      </div>
     
    </div>
  </div>

 
</nav>
    )
}