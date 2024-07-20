import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h4 className="about-me-title">Hola, Soy Flavio</h4>
      <figure className="about-me-figure">
        <img src="public\assets\images\1dev.jpeg" alt="Flavio Pegoraro" />
      </figure>
      <article className="about-me-article">
        <p>
          Hola! Soy Flavio Pegoraro, desarrollador front-end. Mi viaje en el
          mundo del desarrollo web comenzó en 2021 con un curso de HTML y CSS de
          Google, y desde entonces, no he dejado de aprender y crecer en esta
          industria.
        </p>
        <p>
          A lo largo de mi carrera, he aprendido las tecnologías web modernas y
          las mejores prácticas de desarrollo. Además de ser un personal trainer
          certificado y baterista aficionado, he decidido dedicarme
          profesionalmente a mi segunda pasión: el desarrollo web.
        </p>
        <p>
          Si estás buscando un desarrollador front-end comprometido, creativo y
          con una sólida base técnica, me encantaría formar parte de tu equipo y
          contribuir al éxito de tus proyectos.
        </p>
      </article>
    </section>
  );
};

export default AboutMe;
