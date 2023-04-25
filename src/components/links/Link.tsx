type LinkProps = {
  title: string,
  to: string,
}

const Link = ({ title, to }: LinkProps) => {
  return (
    <div>
      <a href={to} className="no-underline" target="_blank">
        <div className="button text-lg no-underline">{title}</div>
      </a>
    </div>
  );
};

export default Link;
