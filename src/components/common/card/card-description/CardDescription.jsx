import { BiLinkExternal } from "react-icons/bi";
import { H3 } from "../../texts/h3/H3";
import { useCardContext } from "../../../../hooks/useCardContext";

export function CardDescription() {
    const { project } = useCardContext();
    const { name, href, type } = project;
    return(
        <div className="flex flex-col items-center">
            <H3 className="text-center text-black">{name}</H3>
            <div className="flex flex-col items-center">
                <a 
                    className="flex flex-row flex-wrap justify-center items-center gap-1 text-base text-center font-light text-black underline md:text-lg lg:text-xl"
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    download="Portfólio-Renato-César.pdf"
                    aria-label="Link para abrir projeto">
                        {type}
                        <BiLinkExternal className="text-xs text-black md:text-base" />
                </a>
            </div>
        </div>
    )
};