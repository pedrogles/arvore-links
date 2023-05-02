
import "../../styles/navbar/navbar.scss";

export default function Navbar({ LogoSrc, LogoAlt }) {
  return (
    <div id="navbar">
      <img src={LogoSrc} alt={LogoAlt} />
    </div>
  );
}
