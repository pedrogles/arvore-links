
import "./navbar.scss";

export default function Navbar({ logo, alt }) {
  return (
    <header id="navbar">
      <img src={logo} alt={alt} />
    </header>
  );
}
