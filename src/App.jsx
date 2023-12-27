import { navbar, user, links, buttons, projects } from "./utils/data";

import { components } from "./utils/components";

import "./styles/app.scss";

export default function App() {
  
  return (
    <main id="app">
      <components.Navbar 
        logo={navbar.logo.src} 
        alt={navbar.logo.alt} 
      />
      <components.User
        image={user.image.src}
        alt={user.image.alt}
        name={user.name}
        description={user.description}
      />
      <section className="links">
        {links.map((link) => {
          return (
            <components.Link
              key={link.id}
              icon={link.icon} 
              href={link.href} 
            />
          )
        })}
      </section>
      {buttons.map((button) => {
        return (
          <components.Button
            key={button.id}
            name={button.name} 
            href={button.href} 
          />
        )
      })}
      <components.Projects projects={projects}/>
    </main>
  );
};