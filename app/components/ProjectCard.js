import Image from "next/image";



export default function ProjectCard({img,title,role,desc}){
    return(
        <div className="max-w-sm bg-transparentder border  border-accent rounded-lg shadow-lg ">
<div className="m-3">
    <a href="#" >
        {console.log("Image source:",img)}
         <Image alt="skill"
                   src={img}
                   width="0"
                   height="0"
                   sizes="80vw"
                   className="w-full h-auto"
               />
    </a></div>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-grey">{title}</h5>
        </a>
        <p className="mb-0 font-normal text-grey ">
            <b>Role</b>: {role}   
           </p>


             <p className="mb-3 font-normal text-grey ">
           
           <b> Description</b>: {desc}</p>
       
    </div>
</div>
    )
}