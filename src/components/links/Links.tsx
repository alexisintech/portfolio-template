import Link from "./Link";

let linksList = [
  {
    title: "Portfolio",
    link: "#",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/codelawani",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/codelawani",
  },
  {
    title: "Github",
    link: "https://github.com/codelawani",
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
