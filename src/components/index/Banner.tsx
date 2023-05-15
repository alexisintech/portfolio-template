import { useState, useEffect, CSSProperties } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const style: CSSProperties = {
  opacity: 0.75,
};

export const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <div className="d-flex w-full flex-col justify-center justify-items-center text-center align-middle">
          <div className="d-flex w-6/12 justify-center self-center sm:w-4/12 md:w-3/12 lg:w-3/12">
            <Image
              className="rounded-circle"
              width="2000"
              height="2000"
              src="/assets/imgs/profile-pic.webp"
              alt="Headshot of Alexis Aguilar"
            />
          </div>
          <Button variant="outline" className="m-auto">
            <Link
              href={"mailto:alexmerona@gmail.com"}
              className="d-flex flex-row gap-2 no-underline"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0 self-center">
                <span
                  style={style}
                  className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400"
                ></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span>Hire me</span>
            </Link>
          </Button>
        </div>
        <span className="text-2xl">Alexis Aguilar</span>
        <span className="text-base font-normal opacity-50">Florida, USA</span>
      </Container>
    </section>
  );
};
