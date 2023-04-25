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
        <title>alexisintech | Full Stack Software Engineer</  title>
        <meta
        name="description"
        content="Alexis Aguilar is an insatiably inquisitive  software engineer who is passionate about full stack web   development. Take a minute to learn a little about her  and see a few of her projects."/>
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