import { user } from "../../../utils/data";
import { UserImage, H1, Paragraph, Section } from "../../common";

export function User() {
  const { image, altImage, name, profession } = user;
  return (
    <Section>
      <UserImage src={image} alt={altImage} />
      <H1 className="text-center text-black font-semibold mt-4 md:mt-5 lg:mt-6">{name}</H1>
      <Paragraph className="text-center text-black font-light md:mt-1 lg:mt-2">{profession}</Paragraph>
    </Section>
  );
};
