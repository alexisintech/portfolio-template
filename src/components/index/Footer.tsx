import { Container, Row } from "react-bootstrap";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center justify-content-center gap-2">
            <div className="brand">
              <span>Let's </span>
              <span>Connect!</span>
            </div>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/codelawani/"
                rel="noreferrer"
                target="_blank"
                aria-label="linkedin"
              >
                <Image
                  src="/assets/imgs/linkedin.svg"
                  height="50"
                  width="50"
                  alt="linkedin logo"
                  loading="lazy"
                />
              </a>
              <a
                href="https://github.com/codelawani"
                rel="noreferrer"
                target="_blank"
                aria-label="github"
              >
                <Image
                  src="/assets/imgs/github.svg"
                  height="50"
                  width="50"
                  alt="github logo"
                  loading="lazy"
                />
              </a>
              <a
                href="https://twitter.com/codelawani"
                rel="noreferrer"
                target="_blank"
                aria-label="twitter"
              >
                <Image
                  src="/assets/imgs/twitter.svg"
                  height="50"
                  width="50"
                  alt="twitter logo"
                  loading="lazy"
                />
              </a>
            </div>
            <hr style={{ width: "200px" }} />
          </div>
        </Row>
      </Container>
    </footer>
  );
};
