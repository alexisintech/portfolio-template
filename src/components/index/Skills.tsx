import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="skills-bx wow zoomIn">
              <h2 className="text-center">Tools and Technologies</h2>
              <div className="d-flex justify-content-center mt-5">
                <div className="icon-container">
                  {[
                    "html",
                    "css",
                    "react",
                    "mui",
                    "tailwind",
                    "bootstrap",
                    "javascript",
                    "typescript",
                    "node",
                    "express",
                    // "next",
                    // "prisma",
                    "mongoDB",
                    "postgresql",
                    "git",
                  ].map((toolName) => (
                    <OverlayTrigger
                      key={toolName}
                      trigger={["hover", "focus"]}
                      placement="bottom"
                      overlay={
                        <Tooltip id={`tooltip-${toolName}`}>{toolName}</Tooltip>
                      }
                    >
                      <Image
                        src={`/assets/imgs/${toolName}.webp`}
                        alt={toolName}
                        loading="lazy"
                      />
                    </OverlayTrigger>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
