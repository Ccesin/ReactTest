import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CcesinCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const cvURL = "https://cecg.free.nf/";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={cvURL}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;CV ONLINE
          </Button>
        </Row>
        
        
        <img
          src={pdf}
          alt="Ccesin CV"
          className="img-fluid"
          style={{ maxHeight: "90vw", margin: "33px 0", borderRadius: "6px" }}
        /> 

        {/* <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 0.6 : 0.6} />
          </Document>
        </Row> */}

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={cvURL}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;CV ONLINE
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
