import { createContext, useCallback, useState } from "react";
import { projects } from "../utils/data";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [cardData, setCardData] = useState({ currentProject: projects[0], index: 0});
    const { currentProject, index } = cardData;
    const handleNext = useCallback(() => {
        index === projects.length - 1 ? 
        setCardData({currentProject: projects[0], index: 0}) : 
        setCardData({currentProject: projects[index + 1], index: index + 1});
    }, [cardData])
    const handlePrev = useCallback(() => {
        index === 0 ? 
        setCardData({currentProject: projects[projects.length - 1], index: projects.length - 1}) : 
        setCardData({currentProject: projects[index - 1], index: index - 1});
    }, [cardData]);
    return (
        <CardContext.Provider value={{ handlePrev, index, handleNext, project: currentProject }}>
            {children}
        </CardContext.Provider>
    )
};