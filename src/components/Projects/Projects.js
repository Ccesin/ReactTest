import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import html from "../../Assets/Projects/no-framework-code.png";
import react from "../../Assets/Projects/react.png";
import wordpress from "../../Assets/Projects/wordpress.png";
import magento from "../../Assets/Projects/magento.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple"> Servicios </strong> que ofrezco
        </h1>
        <p style={{ color: "white" }}>
          Estas son algunas de las tecnologias que pongo a tu disposicion
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={wordpress}
              isBlog={false}
              title="Wordpress"
              description="WordPress es la plataforma de gestión de contenido más popular del mundo, y por buenas razones. Su flexibilidad, escalabilidad y facilidad de uso lo convierten en la opción ideal para cualquier tipo de negocio, ya sea un blog personal, una tienda en línea o un sitio corporativo."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={magento}
              isBlog={false}
              title="Magento"
              description="Magento es una de las plataformas de comercio electrónico más potentes y flexibles del mercado. Su capacidad para manejar grandes volúmenes de productos y su amplia gama de características hacen de Magento la opción ideal para empresas que buscan crecer y expandirse en el mundo digital."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="MERN Stack"
              description="El stack MERN es una de las combinaciones más populares y efectivas para el desarrollo de aplicaciones web. Al utilizar JavaScript en todo el stack, desde el cliente hasta el servidor, garantizamos una experiencia de desarrollo fluida y coherente. Esto permite una mayor eficiencia y una mejor colaboración en el proceso de desarrollo."
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={html}
              isBlog={false}
              title="HTML + CSS + JS"
              description="HTML, CSS y JavaScript son los pilares fundamentales del desarrollo web. Juntos, permiten crear sitios web dinámicos y responsivos que se adaptan a cualquier dispositivo. Con estas tecnologías, puedo construir desde páginas estáticas hasta aplicaciones web interactivas que cumplen con tus necesidades específicas."
              ghLink=""
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
