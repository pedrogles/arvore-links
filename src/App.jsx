import { navbar, user, links, buttons, projects } from "./utils/data";

import Components from "./utils/components";

import "./styles/app.scss";

export default function App() {
  
  return (
    <div id="app">
      <Components.Navbar 
        LogoSrc={navbar.logo.src} 
        LogoAlt={navbar.logo.alt} 
      />
      <Components.User
        Image={user.image.src}
        ImageAlt={user.image.alt}
        Name={user.name}
        Description={user.description}
      />
      <div className="links">
        {links.map((link) => {
          return (
            <Components.Link
              key={link.id}
              Icon={link.icon} 
              Href={link.href} 
            />
          )
        })}
      </div>
      {buttons.map((button) => {
        return (
          <Components.Button
            key={button.id}
            Name={button.name} 
            Href={button.href} 
          />
        )
      })}
      <Components.Projects Projects={projects}/>
    </div>
  );
};