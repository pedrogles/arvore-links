import { CardProvider } from "../../../contexts/CardContext";
import { Section, H2, Card } from "../../common";

export function Projects() {
    return (
        <Section gap="gap-6 md:gap-8">
            <H2 className="w-4/5 text-xl text-black">Projetos Recentes:</H2>
            <CardProvider>
                <Card />
            </CardProvider>
        </Section>
    )
};