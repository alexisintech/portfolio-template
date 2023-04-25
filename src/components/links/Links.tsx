import Link from "./Link";

let linksList = [
  {
    title: "Portfolio",
    link: "https://alexisin.tech",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/alexisintech/",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/alexisintech",
  },
  {
    title: "Github",
    link: "https://github.com/alexisintech",
  },
  {
    title: "Bluesky",
    link: "https://bsky.app/profile/alexisin.tech",
  },
];

const Links = () => {
  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center gap-6">
      {linksList.map((link, index) => (
        <Link key={index} title={link.title} to={link.link} />
      ))}
    </div>
  );
};

export default Links;
