import { CardImage, CardButtons, CardDescription } from "..";

export function Card() {
    return (
        <div className="w-4/5 flex flex-col items-center gap-3 md:gap-4">
            <div>
                <CardImage />
                <CardButtons />
            </div>
            <CardDescription />
        </div>
    );
};