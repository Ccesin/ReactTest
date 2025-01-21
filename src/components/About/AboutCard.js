import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Mi nombre es <span className="purple"> Carlos E. Cesin G. </span> de <span className="purple"> Puerto Ordaz, Venezuela.</span>
            <br />
            <br />
            Actualmente soy Desarrollador web en la empresa <span className="purple"> Softcode </span> de España.
            <br />
            <br />
            Curso el 9no semestre de Ingeniería Informática en la <span className="purple"> Universidad Nacional Experimental de Guayana (UNEG). </span>
            <br />
            <br />
            Soy un apasionado del desarrollo web con más de 5 años de experiencia en la creación de sitios y aplicaciones que no solo son visualmente atractivos, sino también funcionales y optimizados para el usuario. 🤷‍♂️
            <br />
            <br />
            Mi viaje en el mundo del desarrollo comenzó con WordPress, donde he perfeccionado mis habilidades en la personalización de temas y la creación de plugins que se adaptan a las necesidades específicas de mis clientes.
            <br />
            <br />
            
            Mi <strong className="purple"> Filosofía </strong>
            <br />
            
            Creo firmemente que el desarrollo web es una combinación de arte y ciencia. Cada proyecto es una oportunidad  para innovar y crear algo que supere las expectativas de los clientes y usuarios. Estoy comprometido a mantenerme actualizado con las últimas tendencias y tecnologías para ofrecer soluciones que sean efectivas y sostenibles a largo plazo.
            <br />
            <br />
            Aparte de codificar, algunas otras actividades que me encanta realizar :
          </p>
          <ul>
            <li className="about-activity">
              🎮 Jugar Video Juegos
            </li>
            <li className="about-activity">
              🎸 Tocar Guitarra
            </li>
            <li className="about-activity">
              🖌️ Dibujo
            </li>
            <li className="about-activity">
              ✒️ Diseño Gráfico
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", textAlign: "left" }}>
            "Intento crecer y hacer la diferencia un proyecto a la vez"
          </p>
          <footer className="blockquote-footer" style={{ color: "rgb(155 126 172)", textAlign: "left" }}>Carlos E. Cesin G.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
