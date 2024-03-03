import NavbarComponent from "./navbar/Navbar";
import UserComponent from "./user/User";
import CircleLinkComponent from "./circlelink/CircleLink";
import ButtonComponent from "./button/Button";
import CardComponent from "./card/Card";

export function Navbar() {
    return <NavbarComponent />
};

export function User() {
    return <UserComponent />
};

export function CircleLink({ icon, href }) {
    return <CircleLinkComponent icon={icon} href={href} />
};

export function Button({ name, href }) {
    return <ButtonComponent name={name} href={href} />
};

export function Card({ data }) {
    return <CardComponent data={data} />
};