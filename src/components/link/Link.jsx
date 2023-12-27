import "./link.scss";

export default function Link({ icon, href }) {
  return (
    <>
      <a className="link" href={href}>
        {icon}
      </a>
    </>
  );
}
