'use client'

import ProjectCard from "./ProjectCard";
import { Tabs,TabList,Tabtrigger,TabContent } from "./Tab";
import { useState } from "react";
import { projects } from "@/data/projects";

export default function Projects(){
const [activeTab, setActiveTab] = useState(0);

  function handleClick(index) {
    setActiveTab(index);
  }

 

 
 

    return(
         <div className="sm:px-6 lg:px-8">
        <h2 className="text-4xl  lg:text-3xl font-semibold text-primary mb-5 mt-4 mb-2">Recent Works</h2>
        <p className="text-light section-description text-2xl text-gray-600">
          Each project I work on combines thoughtful design and functional development. I start by understanding the user flow, wireframing layouts in Figma, and crafting clean, modern interfaces. Once the design is finalized, I bring it to life focusing on performance, responsiveness, and a smooth user experience.
        </p>

        <div className="pt-5"> 
         <Tabs>
        <TabList>
        <Tabtrigger index={0} activeTab={activeTab} onClick={() => handleClick(0)}>
           Developing
        </Tabtrigger>
  <Tabtrigger index={1} activeTab={activeTab} onClick={() => handleClick(1)}>
           Designing
        </Tabtrigger>
        </TabList>
        <div className="pt-5">
              <TabContent index={0} activeTab={activeTab}>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-primary">
            
           {
                    projects.map((ele,idx) => {
                      if(ele.category=="developing")
                      return(
                        <ProjectCard  key={idx} id={ele.id} img={ele.image} title={ele.title} role={ele.role}  desc={ele.shortDesc}/>
                      )
                    })
                  }
          
        
                    
             
            </div>
            </TabContent>
           
        <TabContent index={1} activeTab={activeTab}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-primary">
            
           {
                    projects.map((ele,idx) => {
                      if(ele.category=="designing")
                      return(
                       <ProjectCard  key={idx} id={ele.id} img={ele.image} title={ele.title} role={ele.role}  desc={ele.shortDesc}/>
                      )
                    })
                  }
          
        
                    
             
            </div>
        </TabContent>
        </div>
         </Tabs>
        </div></div>
    )
}