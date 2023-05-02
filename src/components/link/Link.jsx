import "../../styles/link/link.scss";

export default function Link({ Icon, Href }) {
  return (
    <>
      <a className="link" href={Href}>
        {Icon}
      </a>
    </>
  );
}
