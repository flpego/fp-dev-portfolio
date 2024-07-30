
import "./Footer.css"
import Title from "../utils/Title";
import {FaLinkedin, FaRegCopyright, FaGithub} from  "../../common/commonIcons";
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
            <div>
                <Title text={'"Aprendiendo y creciendo cada día."'} level={3} className="titles"/>
            </div>
            <div className="footer-link-container">
                <p>Contactame:</p>
                <a href="flaviopegoraro2@gmail.com">flaviopegoraro2@gmail.com</a> 
            </div>
       
            <div className="footer-link-container">
                <a href="https://www.linkedin.com/in/flavio-pegoraro-dev/" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="footer-icon tag-linkedin" />
                </a>
                <a href="https://github.com/flpego" target="_blank" rel="noopener noreferrer"> <FaGithub className="footer-icon tag-github"/>
                </a>
            </div>
          <p><FaRegCopyright /> 2024 Flavio Pegoraro. All rights reserved.</p>

        </div>
      </footer>
    )
  }

  export default Footer