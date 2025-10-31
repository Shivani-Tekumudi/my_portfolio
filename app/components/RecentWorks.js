'use client'

import ProjectCard from "./ProjectCard";
import { Tabs,TabList,Tabtrigger,TabContent } from "./Tab";
import { useState } from "react";

export default function Projects(){
const [activeTab, setActiveTab] = useState(0);

  function handleClick(index) {
    setActiveTab(index);
  }

  const imgArr=[{
                  id:0,
                  type:"developing",
                   img:'/project/dashboard.jpg',
                  title: 'Internal Admin Dashboard',
                  role: 'Front-End Developer',
                  description:'Designed and developed a responsive dashboard interface for internal team use. Focused on improving usability and simplifying data management.'
                  },
                  {
                  id:1,
                  type:"developing",
                  img:'/project/expense-tracker.jpg',
                  title: 'Expense Tracker',
                  role: 'UI/UX Designer & Front-End Developer',
                  description:'Developed a responsive dashboard interface for internal team use. Focused on improving usability and simplifying data management.'
                  },
                    {
                  id:2,
                  type:"developing",
                  img:'/project/myplotpic-admin.jpg',
                  title: 'Expense Tracker',
                  role: 'UI/UX Designer & Front-End Developer',
                  description:'Developed a responsive dashboard interface for internal team use. Focused on improving usability and simplifying data management.'
                  },
                    {
                  id:3,
                  type:"designing",
                  img:'/project/design-test.jpg',
                  title: 'Expense Tracker',
                  role: 'UI/UX Designer & Front-End Developer',
                  description:'Developed a responsive dashboard interface for internal team use. Focused on improving usability and simplifying data management.'
                  },
                    {
                  id:4,
                  type:"designing",
                  img:'/project/design-ag-land-project.jpg',
                  title: 'Expense Tracker',
                  role: 'UI/UX Designer & Front-End Developer',
                  description:'Developed a responsive dashboard interface for internal team use. Focused on improving usability and simplifying data management.'
                  },
                   {
                  id:5,
                  type:"designing",
                  img:'/project/design-plot-project.jpg',
                  title: 'Expense Tracker',
                  role: 'UI/UX Designer & Front-End Developer',
                  description:'Developed a responsive dashboard interface for internal team use. Focused on improving usability and simplifying data management.'
                  },
                    {
                  id:6,
                  type:"designing",
                  img:'/project/design-flat-project.jpg',
                  title: 'Expense Tracker',
                  role: 'UI/UX Designer & Front-End Developer',
                  description:'Developed a responsive dashboard interface for internal team use. Focused on improving usability and simplifying data management.'
                  },
                    {
                  id:7,
                  type:"designing",
                  img:'/project/design-apartment-project.jpg',
                  title: 'Expense Tracker',
                  role: 'UI/UX Designer & Front-End Developer',
                  description:'Developed a responsive dashboard interface for internal team use. Focused on improving usability and simplifying data management.'
                  },

                  ]

 
 

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
               <div className="grid grid-cols-2 gap-10 text-primary">
            
           {
                    imgArr.map((ele,id) => {
                      if(ele.type=="developing")
                      return(
                        <ProjectCard  key={id} img={ele.img} title={ele.title} role={ele.role}  desc={ele.description}/>
                      )
                    })
                  }
          
        
                    
             
            </div>
            </TabContent>
           
        <TabContent index={1} activeTab={activeTab}>
          <div className="grid grid-cols-2 gap-10 text-primary">
            
           {
                    imgArr.map((ele,id) => {
                      if(ele.type=="designing")
                      return(
                        <ProjectCard  key={id} img={ele.img} title={ele.title} role={ele.role}  desc={ele.description}/>
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