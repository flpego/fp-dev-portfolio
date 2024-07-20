import "./Skills.css";
import * as icon from "../../common/commonIcons";
import Title from "../utils/Title";
const Skills = () => {
  return (
    <section className="section-skills">
      <article className="article-skills">
        <Title text={"Habilidades técnicas"} level={2} className="titles" />

        <ul>
          <li>
            <icon.IoLogoHtml5 className="icon tag-html" />
          </li>
          <li>
            <icon.IoLogoCss3 className="icon tag-css" />
          </li>
          <li>
            <icon.IoLogoJavascript className="icon tag-javascript" />
          </li>
          <li>
            <icon.FaReact className="icon tag-react" />
          </li>
          <li>
            <icon.FaAngular className="icon tag-angular" />
          </li>
          <li>
            <icon.FaSass className="icon tag-sass" />
          </li>
        </ul>
      </article>
      <article className="article-skills">
        <Title text={"Dev Tools y Diseño"} level={2} className="titles" />

        <ul>
          <li>
            <icon.FaGithub className="icon tag-github" />
          </li>
          <li>
            <icon.IoLogoVercel className="icon " />
          </li>
          <li>
            <icon.RiTailwindCssFill className="icon tag-tailwind" />
          </li>
          <li>
            <icon.FaBootstrap className="icon tag-bootstrap" />
          </li>
          <li>
            <icon.IoLogoFigma className="icon tag-figma" />
          </li>
 
        </ul>
      </article>
    </section>
  );
};

export default Skills;
