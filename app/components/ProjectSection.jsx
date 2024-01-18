import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
 const project_data = [
   {
     title: "Portfolio Website",
     id: "project_1",
     stack: "NextJs |  HTML | Tailwind CSS",
     description:
       "Simple responsive portfolio website designed using NextJs and Tailwind CSS",
     githubUrl: "https://github.com/nakulshah05/portfolio",
   },
   {
     title: "Download Aadhaar Service",
     id: "project_2",
     stack: "Java | Spring Boot",
     description:
       "Download an electronic version of your Aadhaar by giving your Aadhaar number or Enrolment ID.",
   },
   {
     title: "Online Demographics Update Service",
     id: "project_3",
     stack: "Java | Spring Boot | MySQL",
     description:
       "Online Demographics Update Service used in myAadhaar.",
   },
 ];
 return (
   <section className="text-white flex flex-col pt-24" id="projects">
     <h2 className="text-4xl font-bold text-white mb-8 text-center">
       My Projects
     </h2>
     <div className="grid gap-10 w-full grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
       {project_data.map(({ title, id, description, stack, githubUrl, applicationUrl }) => (
         <ProjectCard
           title={title}
           key={id}
           description={description}
           stack={stack}
           githubUrl={githubUrl}
           applicationUrl={applicationUrl}
         />
       ))}
     </div>
   </section>
 );
};


export default ProjectSection;