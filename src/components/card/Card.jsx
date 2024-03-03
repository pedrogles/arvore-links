import { useState } from "react";

import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";

export default function Card({ data: projects }) {
    const [index, setIndex] = useState(0);
    const handleNext = () => {
        const blinkButton = document.getElementById("card-right-arrow");
        blinkButton.style.animation = "stop";  
        if(index === projects.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }; 
    const handlePrev = () => {
        if(index === 0){
            setIndex(projects.length - 1);
        } else { 
            setIndex(index - 1); 
        }
    };
    return (
        <>
            {/* Card */}
            <div className="w-4/5 max-w-sm">
                <div className="flex flex-col items-center justify-center">
                    <img className="max-h-80 w-4/5 object-cover border border-gray-800 rounded-ss-md rounded-se-md" 
                        src={projects[index].image} 
                        alt={projects[index].alt} 
                    />
                    <div className="flex items-center justify-between w-4/5 border border-t-0 border-gray-800 rounded-bl-md rounded-br">
                        <button className="bg-transparent cursor-pointer px-4 py-6" onClick={handlePrev}>
                                <MdArrowBackIosNew className="text-black text-lg"/>
                        </button>
                        <p className="grid place-items-center text-lg">{index + 1}</p>
                        <button className="bg-transparent cursor-pointer px-4 py-6" onClick={handleNext}>
                                <MdArrowForwardIos 
                                    id="card-right-arrow" 
                                    className="text-black text-lg animate-pulse"
                                />
                        </button>
                    </div>
                </div>
            </div>
            {/* Description */}
            <div className="w-4/5 max-w-sm flex flex-col items-center mb-32">
                <div className="w-4/5 max-w-sm flex flex-col items-center">
                    <h4 className="text-base font-medium text-center text-black mt-4 md:text-xl md:mt-6 lg:text-2xl lg:mt-8">
                        {projects[index].name}
                    </h4>
                    <div className="flex flex-col items-center">
                        <a 
                            className="flex flex-row items-center gap-1 mt-1 text-base text-black underline md:text-lg md:mt-2 lg:text-xl lg:mt-3"
                            href={projects[index].href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            download="Portfólio-Renato-César.pdf">
                                {projects[index].type}
                                <BiLinkExternal className="text-xs text-black md:text-base" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};