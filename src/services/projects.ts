import { Project } from "../models/IProject";

export interface ProjectsData {
  projects: Project[];
}

export const getProjects = async (): Promise<ProjectsData> => {
  try {
    const response = await fetch("/data/projects.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: ProjectsData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // Re-lanza el error para manejarlo en el componente que llama a getProjects
  }
};
