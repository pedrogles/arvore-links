import "../../styles/main/main.scss";

import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import Button from "../button/Button";
import Link from "../link/Link";
import Projects from "../projects/Projects";
import User from "../user/User";

export default function Main() {
    return (
        <main id="main">
            <div className="main-items">
                <User />
                <div className="links">
                    <Link icon={<HiOutlineMail/>} href="mailto:pedrogabriellima@gmail.com"/>
                    <Link icon={<HiOutlinePhone/>} href="tel:+5583996082302"/>
                </div>
                <Button name="Whatsapp" href="https://api.whatsapp.com/send?phone=5583996082302"/>
                <Button name="Portfólio" href=""/>
                <Button name="LinkedIn" href="https://www.linkedin.com/in/pedrogles/"/>
                <Button name="Github" href="https://github.com/pedrogles"/>
                <Projects />
            </div>
        </main>
    );
};