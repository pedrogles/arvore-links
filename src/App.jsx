import { navbar, user, links, buttons, projects } from "./utils/data";

import Navbar from "./components/Navbar/Navbar";
import User from "./components/User/User";
import Link from "./components/Link/Link";
import Button from "./components/Button/Button";
import Projects from "./components/Projects/Projects";

import "./styles/app.scss";

export default function App() {
  
  return (
    <div id="app">
      <Navbar 
        LogoSrc={navbar.logo.src} 
        LogoAlt={navbar.logo.alt} 
      />
      <User
        Image={user.image.src}
        ImageAlt={user.image.alt}
        Name={user.name}
        Description={user.description}
      />
      <div className="links">
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              Icon={link.icon} 
              Href={link.href} 
            />
          )
        })}
      </div>
      {buttons.map((button) => {
        return (
          <Button
            key={button.id}
            Name={button.name} 
            Href={button.href} 
          />
        )
      })}
      <Projects Projects={projects}/>
    </div>
  );
};