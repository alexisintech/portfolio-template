import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle, ArrowUpCircle } from "react-bootstrap-icons";
import Image from "next/image";

export const Banner = () => {
  const [showMore, setShowMore] = useState(false);
  const [loopNum, setLoopNum] = useState(0); //start from first role in the array
  const [isDeleting, setIsDeleting] = useState(false); //false, we start with the word being typed out
  const [text, setText] = useState(""); //will be the character of the role being typed out
  const [characterPeriod, setCharacterPeriod] = useState(100); //how much time passes between each character being typed out
  const roles = [
    "Software Engineer",
    "Mental Health Advocate",
    "Community Developer",
  ];
  const period = 500; //how much time passes between each role

  useEffect(() => {
    //update the typing
    let typer = setInterval(() => {
      type();
    }, characterPeriod);

    return () => {
      clearInterval(typer);
    };
    // eslint-disable-next-line
  }, [text]);

  const type = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setCharacterPeriod(40);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setCharacterPeriod(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setCharacterPeriod(100);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col
            xs={12}
            md={7}
            xl={7}
            className="order-2 order-md-1 px-4 text-align"
          >
            <div>
              {/* <span className="tagline">Welcome to my Portfolio</span> */}
              <h1>{`Hi! I'm Alexis,`} </h1>
              <span
                className="txt-role"
                data-period="500"
                data-role='[ "Software Engineer", "Mental Health Advocate", "Community Developer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
              {showMore ? (
                <div>
                  <p>
                    Alexis Aguilar is a full-stack developer who specializes in
                    JavaScript technologies. She has proven client and
                    open-source experience building RESTful API's and delivering
                    responsive, scalable user interfaces. Her background in
                    scientific research and in the medical field has created a
                    solid foundation of team communication, an obsession for
                    detail, an emphasis on humanitarianism, and a passion for
                    analyzing and problem-solving. She's currently seeking
                    frontend, backend, or full stack roles.
                  </p>
                  <a
                    href="#about"
                    className="square-button"
                    aria-label="scroll down to alexisintech's about section"
                  >
                    Learn more about her values
                  </a>
                  <button
                    onClick={() => {
                      setShowMore(false);
                    }}
                  >
                    Show less <ArrowUpCircle />
                  </button>
                </div>
              ) : (
                <div>
                  <p>
                    Alexis Aguilar is a full-stack developer who specializes in
                    JavaScript technologies. She has proven client and
                    open-source experience building RESTful API's and delivering
                    responsive, scalable user interfaces.
                  </p>
                  <button
                    className="mx-auto mx-md-0"
                    onClick={() => {
                      setShowMore(true);
                    }}
                  >
                    Show more <ArrowDownCircle />
                  </button>
                </div>
              )}
            </div>
          </Col>
          <Col
            xs={12}
            md={5}
            xl={5}
            className="order-1 order-md-2 mb-5 mb-md-0"
          >
            <div className="d-flex justify-content-center">
              <Image
                className="rounded-circle"
                width="500"
                height="500"
                src="/assets/imgs/profile-pic.webp"
                alt="Headshot of Alexis Aguilar"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
