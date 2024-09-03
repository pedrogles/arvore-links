import NavbarComponent from "./common/navbar/Navbar";
import UserComponent from "./features/user/User";
import CircleLinkComponent from "./common/circlelink/CircleLink";
import ButtonComponent from "./common/button/Button";
import CardComponent from "./common/card/Card";

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