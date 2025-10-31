import Image from "next/image";



export default function SkillsCard({img,title}){
    return(
        <div className="skill-card text-center">
        <Image
        alt="skill"
            src={img}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
        />
        <h3 className="font-semibold pt-3"> {title}</h3>
        </div>
    )
}