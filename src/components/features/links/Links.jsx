import { links } from "../../../utils/data";
import { CircleLink } from "../../common";

export function Links() {
    return (
        <section className="flex flex-row flex-wrap justify-center gap-3 md:gap-x-4 lg:gap-x-5">
          {links.map((link) => {
            return (
              <CircleLink
                key={link.id}
                icon={link.icon} 
                href={link.href} 
              />
            )
          })}
        </section>
    )
}