import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

import "../../styles/links/links.scss";

export default function Links() {
    return (
        <div id="links">
            <a className="links-email" href="mailto:pedrogabriellima@gmail.com">
                <HiOutlineMail className="email-icon"/>
            </a>
            <a className="links-phone" href="tel:+5583996082302">
                <HiOutlinePhone className="phone-icon" />
            </a>
        </div>
    );
};