import Image from "next/image";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          <span>code</span>
          <span>lawani</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
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
                />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
