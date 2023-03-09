import { projects } from "../../projects";

import "../../styles/projects/projects.scss";

export default function Projects() {
    return (
        <div id="projects">
            <h3 className="projects-title">Projetos recentes:</h3>
            {projects.map((project, key) => {
                return (
                    <div className="project" key={key}>
                        <img className="image-mobile" src={project.imgMobile} alt={project.alt} />
                        <img className="image-desktop" src={project.imgDesktop} alt={project.alt} />
                        <h4>{project.name}</h4>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" >Visite o site aqui</a>
                    </div>
                )
            })}
        </div>
    )
}