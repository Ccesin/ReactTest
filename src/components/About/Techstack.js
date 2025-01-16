import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiJqueryLogo,
  DiMysql,
  DiWordpress,
  DiMagento,
  DiPhotoshop
} from "react-icons/di";
import {
  SiNextdotjs,
  SiExpress 
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiJqueryLogo />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiWordpress />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiMagento />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiNextdotjs />
      </Col>
    </Row>
  );
}

export default Techstack;
