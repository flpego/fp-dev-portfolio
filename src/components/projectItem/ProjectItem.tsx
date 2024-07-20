import { Project } from "../../models/IProject";

import {
  IoLogoJavascript,
  FaReact,
  IoLogoCss3,
  IoLogoHtml5,
} from "../../common/commonIcons";
import "./ProjectItem.css";
interface ProjectProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectProps> = ({ project }) => {
  const getIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "html":
        return <IoLogoHtml5 className="icon tag-html" />;
      case "css":
        return <IoLogoCss3 className="icon tag-css" />;
      case "javascript":
        return <IoLogoJavascript className="icon tag-javascript" />;
      case "react":
        return <FaReact className="icon tag-react" />;
      default:
        return <span>{tag}</span>;
    }
  };

  return (
    <article className="project-item">
      <h4 className="project-item-title">{project.name}</h4>
      <p className="project-item-p">{project.description}</p>
      <p className="project-item-p">
        <a href={project.linkToGH} target="_blank" rel="noopener noreferrer">
          Link GitHub: {project.name}
        </a>
      </p>
      <p className="project-item-p">
        <a
          href={project.linkToDeploy}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link Deploy: {project.name}
        </a>
      </p>
      <p className="project-item-p">Tecnologias:</p>
      <div className="tags-container">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">
            {getIcon(tag)}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectItem;
