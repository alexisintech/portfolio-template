import { NavBar } from "@/components/index/NavBar";
import { Banner } from "@/components/index/Banner";
import { About } from "@/components/index/About";
import { Skills } from "@/components/index/Skills";
import { Projects } from "@/components/index/Projects";
import { Footer } from "@/components/index/Footer";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>codelawani | Full Stack Software Engineer</title>
        <meta
        name="description"
        content="Goodluck (Nico) Lawani is an insatiably inquisitive  software engineer who is passionate about full stack web   development. Take a minute to learn a little about him  and see a few of his projects."/>
      </Head>
      <div className="Home">
        <NavBar />
        <Banner />
        <Projects />
        <About />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default Home;
