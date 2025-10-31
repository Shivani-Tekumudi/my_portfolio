import Image from "next/image";
import Navbar from "./components/Navbar";
import { CircleSmall, Download } from "lucide-react";
import About from "./components/About";
import Projects from "./components/RecentWorks";
import Contact from "./components/Contact";

export default function Home() {
  return (

    
    <div className="w-full max-w-9xl mx-auto p-10  bg-main">
      
      <div className="lg:flex">
 <div className="z-40 flex-none w-full lg:w-[30%] xl:w-[30%]">
      <div className="lg:sticky top-10 profile-card-bg text-white overflow-hidden rounded-3xl shadow-lg w-full flex flex-col items-start p-6 xl:p-8">
       
      
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
        <div className="sm:px-6 lg:px-8">
          <p className="text-secondary text-3xl"> 👋 Hi</p>
        <h1 className="text-4xl  lg:text-5xl font-semibold text-primary mb-5 mt-4">I’m Shivani </h1>
        <p className="text-4xl  lg:text-5xl  text-primary font-semibold mb-5">UI/UX Designer & </p>
        <p className="text-4xl  lg:text-5xl  text-primary font-semibold">Frontend Developer</p>

        <div className="flex mt-8">
          <div className="">
 <a href="#contact" className="btn-contact rounded-full px-5 py-2 text-lg font-medium text-white hover:bg-white/5 hover:text-white">My Works</a>
          </div>
          <div className=" lg:mx-2">
 <a href="#contact" className="btn-contact rounded-full px-5 py-2 text-lg font-medium text-white hover:bg-white/5 hover:text-white"> <Download className="inline"/><span>Download CV </span></a>
          </div>
        </div>

        </div>
      </section>

      {/* Section 2: About */}
      <section
        id="about"
        className="flex flex-col lg:justify-center  sm:px-6 lg:px-8 "
      >
       <About />
      </section>

      {/* Section 3: Work */}
      <section
        id="projects"
        className="flex flex-col lg:justify-center  sm:px-6 lg:px-8 "
      >
       <Projects />
      </section>

      {/* Section 4: Contact */}
      <section
        id="contact"
        className=" flex flex-col lg:justify-center  sm:px-6 lg:px-8  "
      >
        <Contact />
      </section>
    </main>
     
    </div></div>
  );
}
