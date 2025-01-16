import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign:"left" }}>
              PERMITEME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Soy un apasionado del desarrollo web con más de 5 años de experiencia en la creación de sitios y aplicaciones que no solo son visualmente atractivos, sino también funcionales y optimizados para el usuario. 🤷‍♂️
              <br />
              <br />
              Mi viaje en el mundo del desarrollo comenzó con WordPress, donde he perfeccionado mis habilidades en la personalización de temas y la creación de plugins que se adaptan a las necesidades específicas de mis clientes.
              <br />
              <br />
              Con el tiempo, me he ido especializando en tecnologías como:
              <br />
              <i>
                <b className="purple"> HTML, CSS y JavaScript </b>
                <br />
                <b className="purple"> WordPress </b>
                <br />
                <b className="purple"> MERN Stack </b>
              </i>
              <br />
              <br />
              Mi campo de interes se basa en: &nbsp;
              <i>
                <b className="purple">Productos y Tecnologias Web </b> 
              </i>
              <br />
              <br />
              Cada vez que sea posible intento aprender y experimentar con tecnologias como <b className="purple">Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                 Frameworks y Librerias modernas de JavaScript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js, Express.js y Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>MIS REDES</h1>
            <p>
              Sientete libre de  <span className="purple">contactar </span> conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ccesin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/wp-carlos-cesin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
