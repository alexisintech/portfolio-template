import { NavBar } from "@/components/main/NavBar";
import { Banner } from "@/components/main/Banner";
import { About } from "@/components/main/About";
import { Skills } from "@/components/main/Skills";
import { Projects } from "@/components/main/Projects";
import { Footer } from "@/components/main/Footer";
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