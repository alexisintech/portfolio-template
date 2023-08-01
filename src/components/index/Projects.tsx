import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectProps } from "./ProjectCard";

export const Projects = () => {
  const projects: ProjectProps[] = [
    // {
    //   title: "Mindfully",
    //   description:
    //     "Mindfully is a website that encourages users to improve their mental health through mindfulness and journaling.",
    //   imgUrl: "/assets/imgs/mindfully1.webp",
    //   githubUrl: "https://github.com/alexisintech/mindfully",
    //   deployedUrl: "https://mindfully.up.railway.app/",
    //   tech: ["bootstrap", "javascript", "node", "express", "mongoDB"],
    // },
    // {
    //   title: "Seize The Day",
    //   description:
    //     "Seize The Day is a task tracking application so that you can organize your day, mindfully.",
    //   imgUrl: "/assets/imgs/seize-the-day.webp",
    //   githubUrl: "https://github.com/alexisintech/seize-the-day",
    //   deployedUrl: "https://seize-the-day.netlify.app/",
    //   tech: ["react", "mui", "javascript", "node", "express", "mongoDB"],
    // },
    // {
    //   title: "CSS Generators API",
    //   description:
    //     "The CSS Generators API provides a directory of efficacious websites that generate CSS design elements.",
    //   imgUrl: "/assets/imgs/cssgeneratorsapi.webp",
    //   githubUrl: "https://github.com/alexisintech/css-generators-api",
    //   deployedUrl: "https://cssgenerators.co/",
    //   tech: ["html", "css", "javascript", "node", "express"],
    // },
    // {
    //   title: "AdminMe",
    //   description:
    //     "More than a dashboard; AdminMe includes three fully interactive data tables, a functional calendar, and four different chart types for displaying analytics.",
    //   imgUrl: "/assets/imgs/adminme.webp",
    //   githubUrl: "https://github.com/alexisintech/adminme",
    //   deployedUrl: "https://adminme.netlify.app/",
    //   tech: ["react", "mui", "javascript"],
    // },
  ];

  const openSource: ProjectProps[] = [
    // {
    //   title: "Coding Resources API",
    //   description:
    //     "The Coding Resources API serves educational content for a wide variety of computer science topics, languages, and technologies related to web development.",
    //   imgUrl: "/assets/imgs/codingresourcesAPI.webp",
    //   githubUrl: "https://github.com/alexisintech/coding-resources-api",
    //   deployedUrl: "https://coding-resources-api.up.railway.app/",
    //   tech: ["html", "css", "javascript", "node", "express"],
    // },
    // {
    //   title: "Full Stack Interview Questions API",
    //   description:
    //     "The Full Stack Interview Questions API consists of 150+ questions that have been asked at behavioural and technical interviews in the Tech field.",
    //   imgUrl: "/assets/imgs/fullstackapi.webp",
    //   githubUrl: "https://github.com/alexisintech/interview-question-api",
    //   deployedUrl: "https://full-stack-interview-prep.up.railway.app/",
    //   tech: ["html", "css", "javascript", "node", "express"],
    // },
    // {
    //   title: "Tic Tac Toe",
    //   description:
    //     "A 2-player tic-tac-toe game with win and draw validation (local only for now).",
    //   imgUrl: "/assets/imgs/tictactoe.webp",
    //   githubUrl: "https://github.com/alexisintech/tic-tac-toe",
    //   deployedUrl: "https://alexisintech-tictactoe.netlify.app/",
    //   tech: ["html", "css", "javascript"],
    // },
  ];

  const clientWork: ProjectProps[] = [
    // {
    //   title: "Reversah",
    //   description:
    //     "Twitch streamer and Faze1 Top 20 Prospect, Reversah, offers custom-designed Valorant merchandise, as famously seen on tik tok. Popular customers include Tiffae, TenZ, Kyedae, and C9 Annie Dro.",
    //   imgUrl: "/assets/imgs/reversah.webp",
    //   githubUrl: "https://github.com/alexisintech/Reversah.ValorantBanner",
    //   deployedUrl: "https://reversah.com/",
    //   tech: ["html", "css", "javascript", "shopify"],
    // },
    // {
    //   title: "Gen-Z Mon-E",
    //   description:
    //     "James Bowman, financial coach and host of the Gen-Z Mon-E podcast, helps people pay down bad debts, begin investing, and ultimately reach financial peace.",
    //   imgUrl: "/assets/imgs/genzmone.webp",
    //   deployedUrl: "https://genzmone.com/",
    //   tech: ["html", "css", "javascript", "wordpress"],
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Open Source</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Client Work</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <p className="mb-5">
                      Whether it's for learning new technologies or
                      strengthening my large range of skills, I am highly
                      passionate about expressing my creativity by developing
                      modern, responsive full-stack web applications.
                    </p>
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p className="mb-5">
                      I've managed, contributed to, and maintained the following
                      open source projects while effectively utilizing
                      documentation, version control, and high-level
                      organization and communication.
                    </p>
                    <Row>
                      {openSource.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p className="mb-5">
                      I have designed and developed interactive, responsive
                      websites under considerably pressing deadlines in order to
                      successfully meet my clients' needs and artistic visions.
                    </p>
                    <Row>
                      {clientWork.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
