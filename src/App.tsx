import "./App.css";
import Header from "./components/header/Header";
import AboutMe from "./components/aboutMe/AboutMe";
import ProjectList from "./components/projectList/ProjectList";
import Title from "./components/utils/Title";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
      <div>
        <Title text={"Proyectos"} level={4} className="titles" />
        <ProjectList />
      </div>

      <Footer />
    </>
  );
}

export default App;
