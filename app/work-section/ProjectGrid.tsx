import ProjectCard from "./ProjectCard";
import { devProjects, ProjectProps } from "./projectDetails";

const ProjectGrid = () => {
  // Create a reversed copy of the projects array
  const reversedProjects = [...devProjects].reverse();

  return (
    <>
      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
        {reversedProjects.map((project: ProjectProps) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            image={project.image}
            available={project.available}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectGrid;