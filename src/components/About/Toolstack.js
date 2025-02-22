import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiAsana,
  SiLinux,
  SiTrello
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiAsana />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiTrello />
      </Col>
    </Row>
  );
}

export default Toolstack;
