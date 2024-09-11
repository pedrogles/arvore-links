import { buttons } from "../../../utils/data";
import { RectangleButton, CircleButton, Section } from "../../common";

export function Buttons() {
    const { circle: circleButtons, rectangle: rectangleButtons } = buttons;
    return (
        <Section gap="gap-5 md:gap-7">
          {/* Circle Buttons */}
          <div className="flex flex-row justify-center flex-wrap gap-4 md:gap-6">
            {circleButtons.map((button) => {
              return (
                <CircleButton
                  key={button.id}
                  icon={button.icon} 
                  href={button.href}
                  arialLabel={button.arialLabel} 
                />
              )
            })}
          </div>
          {/* Rectangle Buttons */}
          <div className="w-full flex flex-col items-center gap-5 md:gap-6">
            {rectangleButtons.map((button) => {
              return (
                <RectangleButton
                  key={button.id}
                  name={button.name} 
                  href={button.href}
                  arialLabel={button.arialLabel} 
                />
              )
            })}
          </div>
        </Section>
    )
}