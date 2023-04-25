import { NavBar } from "@/components/main/NavBar";
import { Banner } from "@/components/main/Banner";
import { About } from "@/components/main/About";
import { Skills } from "@/components/main/Skills";
import { Projects } from "@/components/main/Projects";
import { Footer } from "@/components/main/Footer";

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