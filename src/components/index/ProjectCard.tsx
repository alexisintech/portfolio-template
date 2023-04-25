import { Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Github } from "react-bootstrap-icons";
import { BoxArrowUpRight } from "react-bootstrap-icons";

export type ProjectProps = {
  title: string;
  description: string,
  imgUrl: string,
  githubUrl?: string,
  deployedUrl: string,
  tech: string[],
}

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubUrl,
  deployedUrl,
  tech,
}: ProjectProps) => {
  return (
    <Col size={12} md={6}>
      <div className="proj-imgbx">
        <Image
          src={imgUrl}
          height="350"
          width="700"
          alt={description}
          loading="lazy"
        />
        <div className="proj-txtx">
          <h3>{title}</h3>
          <div className="d-flex justify-content-center gap-5 mb-3">
            {githubUrl && (
              <a
                href={githubUrl}
                rel="noreferrer"
                target="_blank"
                aria-label="github for the project's source code"
              >
                <Github className="icon-sizing" />
              </a>
            )}
            {deployedUrl && (
              <a
                href={deployedUrl}
                rel="noreferrer"
                target="_blank"
                aria-label="live project"
              >
                <BoxArrowUpRight className="icon-sizing" />
              </a>
            )}
          </div>
          <div className="d-flex justify-content-center gap-2">
            <h4 className="fs-5 fw-light">Skills:</h4>
            {tech.map((techImage) => (
              <OverlayTrigger
                key={techImage}
                trigger={["hover", "focus"]}
                placement="bottom"
                overlay={
                  <Tooltip id={`tooltip-${techImage}`}>{techImage}</Tooltip>
                }
              >
                <Image
                  src={`/assets/imgs/${techImage}.webp`}
                  className="proj-tech"
                  alt={techImage}
                  loading="lazy"
                />
              </OverlayTrigger>
            ))}
          </div>
        </div>
      </div>
    </Col>
  );
};
