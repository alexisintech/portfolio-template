import Hero from "@/components/links/Hero";
import Links from "@/components/links/Links";
import Footer from "@/components/links/Footer";
import Head from "next/head";

function LinksIndex() {
  return (
    <>
      <Head>
        <title>alexisintech | Full Stack Software Engineer</title>
        <meta
          name="description"
          content="Alexis Aguilar's social links, all in one place for convenience."
        />  
      </Head>
      <div className="links-index min-h-screen bg-black text-white">
        <div className="container mx-auto flex min-h-screen flex-col items-center text-center">
          <Hero />
          <Links />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default LinksIndex;
