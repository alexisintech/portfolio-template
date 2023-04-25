import Hero from "@/components/links/Hero";
import Links from "@/components/links/Links";
import Footer from "@/components/links/Footer";

function LinksIndex() {
  return (
    <div className="links-index min-h-screen bg-black text-white">
      <div className="container mx-auto flex min-h-screen flex-col items-center text-center">
        <Hero />
        <Links />
        <Footer />
      </div>
    </div>
  );
}

export default LinksIndex;
