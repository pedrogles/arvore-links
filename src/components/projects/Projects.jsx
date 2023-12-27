import { MdArrowForwardIos, MdArrowBackIosNew, MdOutlineInfo } from "react-icons/md";

import { useState } from "react";

import "./projects.scss";

export default function Projects({ projects }) {
    const [index, setIndex] = useState(0);
    const handleNext = () => {
        const blinkButton = document.querySelector('.carousel-right-button');
        blinkButton.style.animation = "stop";  
        if(index === projects.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }
    const handlePrev = () => {
        if(index === 0){
            setIndex(projects.length - 1);
        } else { 
            setIndex(index - 1); 
        }
    }
    const handleClickInfo = () => {
        const button = document.querySelector(".info-button");
        const mensage = document.querySelector(".info-mensage");
        if(button && mensage) {
            mensage.style.display === "none" ? mensage.style.display = "block" : mensage.style.display = "none";
        };
    }
    return (
        <section className="projects">
            <h3 className="projects-title">Projetos Recentes:</h3>
            <div className="carousel">
                <div className="carousel-items">
                    <img className="carousel-image" src={projects[index].image} alt={projects[index].alt} />
                    <div className="carousel-buttons">
                        <button className="carousel-left-button" onClick={handlePrev}>
                            <MdArrowBackIosNew className="icon-button"/>
                        </button>
                        <p className="carousel-index">{index + 1}</p>
                        <button className="carousel-right-button" onClick={handleNext}>
                            <MdArrowForwardIos className="icon-button"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="carousel-description">
                <h4 className="project-name">{projects[index].name}</h4>
                <div className="carousel-description-anchor">
                    <a 
                        className="anchor"
                        href={projects[index].href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        download="Portfólio-Renato-César.pdf">
                            {projects[index].type}
                    </a>
                    <button className="info-button" onClick={handleClickInfo}>
                        <MdOutlineInfo className="info-icon" />
                    </button>
                    <div className="info-mensage">
                        <p>Clique no link acima para acessar o projeto.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}