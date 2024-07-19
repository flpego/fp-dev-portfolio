import { useEffect, useState } from "react";
import { getProjects } from "../../services/projects";
import { Project } from "../../models/IProject";
import ProjectItem from "../projectItem/ProjectItem";
import "./ProjectList.css";

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getDataProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data.projects); // Actualiza el estado con data.projects, que es un arreglo de Project
        console.log(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        // Manejar el error apropiadamente, por ejemplo, mostrando un mensaje al usuario
      }
    };

    getDataProjects();
  }, []);

  return (
    <div>
      <section className="project-list">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
};

export default ProjectList;
