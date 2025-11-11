import Skills from "./Skills";

export default function About(){

  const imgArr1 = ['./logos/html5.svg','./logos/html5.svg'];
  


                  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between cards
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };


    return(
         <div className="sm:px-6 lg:px-8">
        <h2 className="text-4xl  lg:text-3xl font-semibold text-primary mb-5 mt-4 mb-2">About Me</h2>
        <p className="text-light section-description text-2xl text-gray-600">
          I’m Frontend developer & UI/UX Designer. I enjoy turning ideas into live, interactive experiences. From designing in Figma to developing fully functional interfaces, I focus on creating products that are clean, engaging, and easy to use.
        </p>
         <h2 className="text-4xl  lg:text-3xl font-semibold text-primary mb-5 mt-5 mb-2">Education</h2>

        <div> 
         

         
          <div className="flex justify-end">
     <ol className=" overflow-hidden w-full space-y-8">
      <li className="relative flex-1 ">
          <div   className="flex items-center font-medium w-full  ">
              <span className=" bg-transparent border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                  <span className="block w-6 h-6 rounded-full bg-primary shadow-[0_6px_20px_rgba(0,0,0,0.15)] flex items-center justify-center">
                  <span className="block w-2.5 h-2.5 rounded-full bg-main"></span>
                </span>
              </span>
              <div className="block w-full">
                      <div className="card-bg1  border border-rose-300 rounded-2xl p-6 md:p-8 shadow-sm  xl:w-[750px]">
                <div className="text-lg font-bold pb-2 text-primary4">
                  2015 - 2019
                </div>
                <h3 className="text-xl font-bold pb-2 text-primary">
                 B.Tech - Pydah College of engineering & Technology
                </h3>
                <p className="text-sm font-thin text-primary">
                  Visakhapatnam, Andhra Pradesh, India
                </p>
              </div>
              </div>
          </div>
      </li>
    
    
      </ol>


          </div>


      <div className="pt-3">
         <h2 className="text-4xl  lg:text-3xl font-semibold text-primary mb-5 mt-5 mb-2">Experience</h2>
      </div>
  
<div className="flex justify-end">
  
     <ol className=" overflow-hidden w-full space-y-8">
      <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-transparent after:inline-block after:absolute after:-bottom-26 lg:after:-bottom-24 after:left-3 lg:after:left-5 after:border-l-2 after:border-pink-900 after:border-dashed">
          <div   className="flex items-center font-medium w-full  ">
              <span className=" bg-transparent border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                  <span className="block w-6 h-6 rounded-full bg-primary shadow-[0_6px_20px_rgba(0,0,0,0.15)] flex items-center justify-center">
                  <span className="block w-2.5 h-2.5 rounded-full bg-main"></span>
                </span>
              </span>
              <div className="block w-full">
                      <div className="card-bg2 text-primary border border-rose-300 rounded-2xl p-6 md:p-8 shadow-sm xl:w-[750px]">
                <div className="text-lg font-bold pb-2 text-primary4">
                  2024 - Present
                </div>
                <h3 className="text-xl font-bold pb-2">
                  UI Developer  at  My Plot pic
                </h3>
                <p className="text-sm font-thin">
                  Visakhapatnam, Andhra Pradesh, India
                </p>
              </div>
              </div>
          </div>
      </li>
      <li className="relative flex-1  after:h-full  ">
          <div className="flex items-center font-medium w-full  ">
 <span className=" bg-transparent border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                  <span className="block w-6 h-6 rounded-full bg-primary shadow-[0_6px_20px_rgba(0,0,0,0.15)] flex items-center justify-center">
                  <span className="block w-2.5 h-2.5 rounded-full bg-main"></span>
                </span>
              </span>              <div className="block w-full">
                     <div className="card-bg3 text-primary border border-rose-300 rounded-2xl p-6 md:p-8 shadow-sm xl:w-[750px]">
                <div className="text-lg font-bold pb-2 text-primary4">
                  2021 - 2024
                </div>
                <h3 className="text-xl font-bold pb-2">
                  Software Engineer at HR Geckos
                </h3>
                <p className="text-sm font-thin">
                  Visakhapatnam, Andhra Pradesh, India
                </p>
              </div>
              </div>
          </div>
      </li>
    
      </ol>


          </div>
          
      <div className="pt-3">
         <h2 className="text-4xl  lg:text-3xl font-semibold text-primary mb-5 mt-5 mb-2">Core Skills</h2>
      </div>

     <Skills />
       
        </div></div>
    )
}