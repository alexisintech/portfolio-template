import { Col, Container, Row } from "react-bootstrap";
import Widget from "./Widget";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <h2 className="larger-h2">About</h2>
            <p className="subheading">
              Goodluck (Nico) Lawani is more than just an incredibly inquisitive
              full-stack web developer; she's your shoulder to lean on. She
              prioritizes making an impact by consistently practicing her values
              of kindness, empathy, and diligence. Click on the widgets below to
              read more about the unique perspective he brings to the tech
              community.
            </p>
            <Row>
              <Widget
                title="Previously"
                imgUrl="/assets/imgs/labcoat.webp"
                description="In her final 2 years at Stetson University, Alexis conducted
                Herpetology + Invasive Species research while also serving her
                peers as both a Biology and Writing Teaching Assistant. After
                receiving a B.S. in both Biology and Chemistry, she was
                privileged to help her community as a veterinary technician in
                gold standard animal hospitals for over 2.5 years. People-first has always been her mentality."
              />
              <Widget
                title="Community"
                imgUrl="/assets/imgs/shaking-hands.webp"
                description="As a Man of Color in tech, Nico is passionate about
                supporting others, especially those from underrepresented groups.
                Her experiences with BPD and Autism have helped her gain profound
                perspective and fathomless empathy. In her free time, you can find
                her pair programming, community learning, helping fellow developers
                optimize their design and code, or chatting about tech in twitter spaces and streams."
              />
              <Widget
                title="Mantra"
                imgUrl="/assets/imgs/seedling.webp"
                description="Nico is incredibly passionate about his mantra:
                'constantly learning, forever growing.' After surviving an adverse childhood,
                she spends every day creating a life to be proud of. Through reading, journaling,
                and spirituality, she dedicates herself to nurturing meaningful relationships,
                finding balance between stress versus positivity, and prioritizing consistent, active growth."
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
