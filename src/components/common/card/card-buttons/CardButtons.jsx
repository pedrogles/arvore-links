import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { SquareButton, Paragraph } from "../..";
import { useCardContext } from "../../../../hooks/useCardContext";

export function CardButtons() {
    const { handlePrev, index, handleNext } = useCardContext();
    return (
        <div className="w-full flex items-center justify-between border border-t-0 border-gray-800 rounded-bl-md rounded-br">
            <SquareButton
                onClick={handlePrev}
                icon={<MdArrowBackIosNew className="text-black text-xl"/>}
                ariaLabel="Botão projeto anterior"
            />
            <Paragraph className="grid place-items-center" ariaLabel="Índice dos Projetos">
                {index + 1}
            </Paragraph>
            <SquareButton
                onClick={handleNext}
                icon={<MdArrowForwardIos className="text-black text-xl"/>}
                ariaLabel="Botão próximo projeto"
            />
        </div>
    );
};