import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import ReactMarkdown from "react-markdown";


export default async function ProjectDetails({ params }) {
  const { id } = await params; 
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) return notFound();

  const sidebarDev= ['Overview','Research','Architecture & Setup','Core Features','Challenges & Learning','Testing','Deployment','Future Scope'];
   const sidebarDesign= ['Overview','Research & Planing','Design & Prototype','Core Features','Challenges & Learning','Testing &feedback','Final Prototype','Future Scope'];

   const isDesignProject = project.category === "designing";
   const sidebarItems = isDesignProject ? sidebarDesign : sidebarDev;

  const sections = Object.keys(project.projectDetails || {});

  return (
    <section className="min-h-screen px-6 xl:px-20   py-10 bg-main text-xl">
      <h1 className="text-5xl  mb-4 text-primary font-bold">{project.title}</h1>
      <p className="text-light font-normal text-grey text-lg text-gray-600 mb-6 xl:mb-14">{project.longDesc}</p>

     <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {/* --- Side Menu --- */}
  <aside className="md:col-span-1  pr-4 md:sticky md:top-20 h-fit self-start">
    <ul className="space-y-3 text-sm">
      {sidebarItems.map((item) => (
        <li
          key={item}
          className="cursor-pointer transition-colors text-xl font-bold pb-2 text-primary4 hover:text-primary"
        >
           <a  href={`#${item.split(" ")[0].toLowerCase()}`}
          className="hover:text-primary transition-colors"
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
        </li>
      ))}
    </ul>
  </aside>

  {/* --- Main Content --- */}
  <article className="md:col-span-3">
          {project.projectDetails.overview && (
    <div id="overview" className=" p-6 bg-transparentder border  border-accent rounded-lg shadow-lg p-6 md:p-8 shadow-sm  rounded-2xl mb-5">
      <h2 className="text-2xl font-semibold mb-3 text-primary">Overview</h2>
      <p className="text-grey leading-relaxed text-lg">
        {project.projectDetails.overview}
      </p>
       <Image alt="skill"
                         src={project.image}
                         width="0"
                         height="0"
                         sizes="80vw"
                         className="w-full h-auto rounded-2xl"
                     />
    </div>
  )}

      {project.projectDetails.researchAndPlanning && (
    <div id="research" className=" p-6  md:p-8 sbg-transparentder border  border-accent rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold mb-3 text-primary">Research</h2>
      <div  className="text-grey leading-relaxed text-lg">
      <ReactMarkdown  >
        {project.projectDetails.researchAndPlanning}
      </ReactMarkdown ></div>
      
    </div>
  )}


 {project.projectDetails.architectureAndSetup && (
    <div id="architecture" className=" p-6  md:p-8 sbg-transparentder border  border-accent rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold mb-3 text-primary">{isDesignProject?'Design & Prototype':'Architecture & Setup'}</h2>
      <div  className="text-grey leading-relaxed text-lg">
      <ReactMarkdown  >
        {project.projectDetails.architectureAndSetup}
      </ReactMarkdown ></div>

      <h4> Tools:</h4>
      {project.tools.map((ele,id) => 
      {
        return( 
        <span class="rounded-md px-3 py-2 mr-4 text-base font-normal transition-all duration-200 border  border-accent text-gray-950 bg-card-bg3" key={id}> {ele}</span>)
        
      })}
    </div>
  )}

{project.projectDetails.coreFeaturesOrKeySolutions && (
    <div id="core" className=" p-6  md:p-8 sbg-transparentder border  border-accent rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold mb-3 text-primary">Core Features</h2>
      <div  className="text-grey leading-relaxed text-lg">
       <ReactMarkdown  >
        {project.projectDetails.coreFeaturesOrKeySolutions.join("\n\n")}
      </ReactMarkdown >
      </div>
      
    </div>
  )}

{project.projectDetails.challengesAndLearnings && (
    <div id="challenges"  className=" p-6  md:p-8 sbg-transparentder border  border-accent rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold mb-3 text-primary">Challenges And Learnings</h2>
      <div  className="text-grey leading-relaxed text-lg">
      <ReactMarkdown  >
        {project.projectDetails.challengesAndLearnings}
      </ReactMarkdown ></div>
      
    </div>
  )}

  {project.projectDetails.testingAndFeedback && (
    <div id="testing" className=" p-6  md:p-8 sbg-transparentder border  border-accent rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold mb-3 text-primary">Testing & Feedback</h2>
      <div  className="text-grey leading-relaxed text-lg">
      <ReactMarkdown  >
        {project.projectDetails.testingAndFeedback}
      </ReactMarkdown ></div>
      
    </div>
  )}

 {project.projectDetails.deploymentOrFinalPrototype && (
    <div id="deployment" className=" p-6  md:p-8 sbg-transparentder border  border-accent rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold mb-3 text-primary">{isDesignProject?'Final Prototype':'Deployment'}</h2>
      <div  className="text-grey leading-relaxed text-lg">
      <p><strong>Link:</strong> {project.projectDetails.deploymentOrFinalPrototype.link}</p>
  <p><strong>GitHub:</strong> {project.projectDetails.deploymentOrFinalPrototype.github}</p></div>
      
    </div>
  )}

  {project.projectDetails.reflectionAndFutureScope && (
    <div id="future" className=" p-6  md:p-8 sbg-transparentder border  border-accent rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold mb-3 text-primary">Future Scope</h2>
      <div  className="text-grey leading-relaxed text-lg">
      <ReactMarkdown  >
        {project.projectDetails.reflectionAndFutureScope}
      </ReactMarkdown ></div>
      
    </div>
  )}



        </article>
      </div>
    </section>
  );
}
