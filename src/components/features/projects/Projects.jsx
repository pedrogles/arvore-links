import { projects } from "../../../utils/data";
import { Card } from "../../common";

export function Projects() {
    return (
        <>
            <div className="w-4/5 max-w-sm flex flex-col items-start mt-8 mb-7 md:mt-10 md:mb-8 lg:mt-12 lg:mb-10">
                <h3 className="text-xl text-black md:text-2xl">Projetos Recentes:</h3>
            </div>
            <Card data={projects}/>
        </>
    )
}