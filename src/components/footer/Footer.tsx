
import "./Footer.css"
import Title from "../utils/Title";
import {FaLinkedin, FaRegCopyright, FaGithub} from  "../../common/commonIcons";
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
            <div>
                <Title text={'"Viviendo, aprendiendo y creciendo cada día."'} level={3} className="titles"/>
            </div>
            <div className="footer-link-container">
                <p>Contactame  <a href="mailto:your.email@example.com">your.email@example.com</a></p>
               
            </div>
       
            <div className="footer-link-container">
                <a href="https://www.linkedin.com/in/flavio-pegoraro-dev/" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="footer-icon linkedin"/>
                </a>
                <a href="https://github.com/flpego" target="_blank" rel="noopener noreferrer"> <FaGithub className="footer-icon github"/>
                </a>
            </div>
          <p><FaRegCopyright /> 2024 Flavio Pegoraro. All rights reserved.</p>

        </div>
      </footer>
    )
  }

  export default Footer