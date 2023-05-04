
import "../../styles/navbar/navbar.scss";

export default function Navbar({ LogoSrc, LogoAlt }) {
  return (
    <header id="navbar">
      <img src={LogoSrc} alt={LogoAlt} />
    </header>
  );
}
