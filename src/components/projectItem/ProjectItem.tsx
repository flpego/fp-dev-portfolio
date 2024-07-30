import { Project } from "../../models/IProject";
import * as Icons from "../../common/commonIcons"

import "./ProjectItem.css";
interface ProjectProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectProps> = ({ project }) => {

  const iconMap: Record<string, { icon: JSX.Element; name: string }> = {
    html: { icon: <Icons.IoLogoHtml5 className="icon tag-html" />, name: "HTML5" },
    css: { icon: <Icons.IoLogoCss3 className="icon tag-css" />, name: "CSS3" },
    javascript: { icon: <Icons.IoLogoJavascript className="icon tag-javascript" />, name: "JavaScript" },
    react: { icon: <Icons.FaReact className="icon tag-react" />, name: "React" },
    sass: { icon: <Icons.FaSass className="icon tag-sass" />, name: "Sass" },
  };
  
  const getIcon = (tag: string) => {
    const lowerCaseTag = tag.toLowerCase();
    if (lowerCaseTag in iconMap) {
      const { icon, name } = iconMap[lowerCaseTag];
      return (
        <div className="icon-container">
          {icon}
          <span className="tooltip">{name}</span>
        </div>
      );
    }
    return <span>{tag}</span>;
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
