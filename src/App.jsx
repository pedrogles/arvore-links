import { links, buttons, projects } from "./utils/data";

import { Navbar, User, CircleLink, Button, Card } from "./components/Index";

export default function App() {
  return (
    <main className="flex flex-col items-center bg-slate-50">  
      <User />
      {/* Links */}
      <section className="flex flex-row flex-wrap justify-center gap-3 md:gap-x-4 lg:gap-x-5">
        {links.map((link) => {
          return (
            <CircleLink
              key={link.id}
              icon={link.icon} 
              href={link.href} 
            />
          )
        })}
      </section>
      {/* Buttons */}
      {buttons.map((button) => {
        return (
          <Button
            key={button.id}
            name={button.name} 
            href={button.href} 
          />
        )
      })}
      {/* Projects */}
      <div className="w-4/5 max-w-sm flex flex-col items-start mt-8 mb-7 md:mt-10 md:mb-8 lg:mt-12 lg:mb-10">
        <h3 className="text-xl text-black md:text-2xl">Projetos Recentes:</h3>
      </div>
      <Card data={projects}/>
    </main>
  );
};