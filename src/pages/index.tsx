import { NavBar } from "@/components/NavBar";
import { Banner } from "@/components/Banner";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Banner />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;