import { buttons } from "../../../utils/data";
import { Button } from "../../common";


export function Buttons() {
    return (
        <>
            {buttons.map((button) => {
                return (
                    <Button
                        key={button.id}
                        name={button.name} 
                        href={button.href} 
                    />
                )
            })}
        </>
    )
}