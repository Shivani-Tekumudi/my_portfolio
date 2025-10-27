"use client";

import { useState,useEffect } from "react";
import { Moon, moon, sun } from "lucide-react";

export default function Navbar(){
    const [active,setActive] = useState('home');

    useEffect(() => {

        const sections = document.querySelectorAll("section");

        const handleScroll = () =>
             { 
                let current = ""; 
                sections.forEach((section) => { 
                    const sectionTop = section.offsetTop;

                     if (scrollY >= sectionTop - 200) { current = section.getAttribute("id"); } });
                     
                     setActive(current || "home"); };


                     window.addEventListener("scroll", handleScroll); 
                     
                     return () => window.removeEventListener("scroll", handleScroll);

    },[])




    return (
         <nav className="fixed  hidden sm:ml-6 sm:block backdrop-blur-lg flex justify-center gap-6 py-3">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
     
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-13">
           

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