import { MdArrowForwardIos, MdArrowBackIosNew, MdOutlineInfo } from "react-icons/md";

import { useState } from "react";

import "../../styles/projects/projects.scss";

export default function Projects({ Projects }) {
    const [index, setIndex] = useState(0);
    const handleNext = () => {
        if(index === Projects.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }
    const handlePrev = () => {
        if(index === 0){
            setIndex(Projects.length - 1);
        } else { 
            setIndex(index - 1); 
        }
    }
    const handleClickInfo = () => {
        const mensage = document.querySelector(".info-mensage");
        if(mensage.style.display === "none") {
            mensage.style.display = "block";
        } else {
            mensage.style.display = "none";
        }
    }
    return (
        <section className="projects">
            <h3>Projetos Recentes:</h3>
            <div className="carousel">
                <button className="carousel-button" onClick={handlePrev}>
                    <MdArrowBackIosNew />
                </button>
                <div className="carousel-items">
                    <img src={Projects[index].image} alt={Projects[index].alt} />
                </div>
                <button className="carousel-button" onClick={handleNext}>
                    <MdArrowForwardIos />
                </button>
            </div>
            <div className="carousel-description">
                <h4>{Projects[index].name}</h4>
                <div className="carousel-description-link">
                    <a 
                        href={Projects[index].href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        download="Portfólio-Renato-César.pdf">
                            {Projects[index].type}
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