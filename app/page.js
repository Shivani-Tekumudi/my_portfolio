import Image from "next/image";
import Navbar from "./components/Navbar";
import { CircleSmall, Download } from "lucide-react";
import About from "./components/About";
import Projects from "./components/RecentWorks";
import Contact from "./components/Contact";
import AnimatedSection from "./components/AnimatedSection";
import Hero from "./components/Hero";

export default function Home() {
  return (

    
    <div className="w-full max-w-9xl mx-auto p-10  bg-main">
   
      <div className="lg:flex ">
    
 <div className="z-40 flex-none sm:w-[50%] md:w-[50%]  lg:w-[30%] xl:w-[30%] md:justify-center mx-auto">
  

      <div className="lg:sticky top-10  profile-card-bg text-white overflow-hidden rounded-3xl shadow-lg  flex flex-col items-start p-6 xl:p-8">
     
      <h2 className="font-bold mb-2 text-shadow  text-3xl/8  text-primary">Shivani Tekumudi</h2>
    <Image src="/mypic.png" alt="mypic" width={460}
        height={290} className="my-2" />
    
    <h3 className="text-xl/8 font-bold text-primary2">UI/UX Designer & <br/>
Frontend Developer</h3>
    
    <h5 className="text-lg/8 font-semibold text-secondary"> Based in: </h5>
 
     <h3 className="text-xl font-bold text-primary3">   Andhra Pradesh, India</h3>


     <button className="btn btn-primary mt-6 ">Let’s work together</button>
    {/* </div> */}

  
  
   </div>
    

   </div>

  


   <main className=" min-w-0 w-full flex-auto lg:static lg:w-[70%] xl:w-[70%] lg:max-h-full lg:overflow-visible">

  <Navbar />


      {/* Section 1: Hero */}
      <section
        id="home"
        className="hero-section flex flex-col lg:justify-center  sm:px-6 lg:px-8"
      >
<Hero />
   
      </section>

      {/* Section 2: About */}
      <section
        id="about"
        className="flex flex-col lg:justify-center  sm:px-6 lg:px-8 "
      >
         <AnimatedSection>
       <About /></AnimatedSection>
      </section>

      {/* Section 3: Work */}
      <section
        id="projects"
        className="flex flex-col lg:justify-center  sm:px-6 lg:px-8 "
      >
         <AnimatedSection>
       <Projects /></AnimatedSection>
      </section>

      {/* Section 4: Contact */}
      <section
        id="contact"
        className=" flex flex-col lg:justify-center  sm:px-6 lg:px-8  "
      >
          <AnimatedSection>
        <Contact /></AnimatedSection>
      </section>
    </main>
     
    </div></div>
  );
}
