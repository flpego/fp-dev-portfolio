import "./Skills.css";
import * as icon from "../../common/commonIcons";
import Title from "../utils/Title";
const Skills = () => {
  return (
    <section className="section-skills">
      <article className="article-skills">
        <Title text={"Habilidades técnicas"} level={2} className="titles" />

        <ul>
          <li className="icon-container">
            <icon.IoLogoHtml5 className="icon tag-html" />
            <span className="tooltip">Html5</span>
          </li>
          <li className="icon-container">
            <icon.IoLogoCss3 className="icon tag-css" />
            <span className="tooltip">Css3</span>
          </li>
          <li className="icon-container">
            <icon.IoLogoJavascript className="icon tag-javascript" />
            <span className="tooltip">JavaScript</span>
          </li>
          <li className="icon-container">
            <icon.FaReact className="icon tag-react" />
            <span className="tooltip">React</span>
          </li>
          <li className="icon-container">
            <icon.FaAngular className="icon tag-angular" />
            <span className="tooltip">Angular</span>
          </li>
          <li className="icon-container">
            <icon.FaSass className="icon tag-sass" />
            <span className="tooltip">Sass</span>
          </li>
        </ul>
      </article>
      <article className="article-skills">
        <Title text={"Dev Tools y Diseño"} level={2} className="titles" />

        <ul>
          <li className="icon-container">
            <icon.FaGithub className="icon tag-github" />
            <span className="tooltip">Github</span>
          </li>
          <li className="icon-container">
            <icon.IoLogoVercel className="icon " />
            <span className="tooltip">Vercel</span>
          </li>
          <li className="icon-container">
            <icon.RiTailwindCssFill className="icon tag-tailwind" />
            <span className="tooltip">Tailwind</span>
          </li>
          <li className="icon-container">
            <icon.FaBootstrap className="icon tag-bootstrap" />
            <span className="tooltip">Bootstrap</span>
          </li>
          <li className="icon-container">
            <icon.IoLogoFigma className="icon tag-figma" />
            <span className="tooltip">Figma</span>
          </li>
 
        </ul>
      </article>
    </section>
  );
};

export default Skills;
