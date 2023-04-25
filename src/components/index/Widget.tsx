import Image from "next/image";
import { useState } from "react";
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

type WidgetProps = {
  title: string;
  imgUrl: string;
  description: string;
}

const Widget = ({ title, imgUrl, description }: WidgetProps) => {
  const [show, setShow] = useState(false);

  return (
    <Col xs={12} md={4} className="mb-5 mb-md-0">
      <div className="d-flex flex-column align-items-center text-center">
        <OverlayTrigger trigger={["hover", "focus"]}
        placement="top"
        overlay={<Tooltip id={`tooltip-click-me`}>Click me!</Tooltip>}>
          <Image
            className="about-image"
            src={imgUrl}
            width="200"
            height="200"
            alt={`${imgUrl} emoji`}
            onClick={() => {
              setShow((prev) => !prev);
            }}
          />
        </OverlayTrigger>
        <h2>{title}</h2>
        {show && (
          <div>
            <p>{description}</p>
            {title === "Blog" && (
              <a
                href="https://alexisintech.wixsite.com/blog"
                rel="noreferrer"
                target="_blank"
                className="blog-button"
                aria-label="alexisintech's blog"
              >
                <ArrowRightCircle
                  style={{ fontSize: "2rem", cursor: "pointer" }}
                />
              </a>
            )}
          </div>
        )}
      </div>
    </Col>
  );
};

export default Widget;
