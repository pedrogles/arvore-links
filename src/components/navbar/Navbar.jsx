import Logo from "../../assets/logo/isologoBlack.png";
import LogoDarkMode from "../../assets/logo/isologo.png";

import { MdDarkMode, MdLightMode} from "react-icons/md";

import "../../styles/header/navbar.scss";

import { useState } from "react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false)
    const handdleDarkMode = () => {
        const header = document.querySelector("#header");
        const footer = document.querySelector("#footer");
        const isologoImage = document.querySelector(".isologo-image");
        const darkModeIcon = document.querySelector(".dark-mode-icon");
        const lightModeIcon = document.querySelector(".light-mode-icon");
        const background = document.querySelector("#main")
        const button = document.querySelectorAll(".button");
        const pFooter = document.querySelector(".p-footer");
        const spanDevName = document.querySelector(".span-dev-name");
        if(darkMode === true) {
            darkModeIcon.style.display = "none";
            lightModeIcon.style.display = "block";
            lightModeIcon.style.color = "#F9F4F4";
            header.style.backgroundColor = "#0e1a70";
            footer.style.backgroundColor = "#0e1a70";
            isologoImage.src = LogoDarkMode;
            background.style.backgroundColor = "#0F0C0C";
            pFooter.style.color = "#F9F4F4";
            spanDevName.style.color = "#F9F4F4";
            for(let i = 0; i < button.length; i++) {
                button[i].style.backgroundColor = "#0e1a70"
                button[i].style.color = "#F9F4F4"
            }
            setDarkMode(false);
        }
        else if(darkMode === false) {
            darkModeIcon.style.display = "block";
            lightModeIcon.style.display = "none";
            header.style.backgroundColor = "#F9F4F4";
            footer.style.backgroundColor = "#F9F4F4";
            isologoImage.src = Logo;
            background.style.backgroundColor = "#0e1a70"
            pFooter.style.color = "#0F0C0C";
            spanDevName.style.color = "#0F0C0C";
            for(let i = 0; i < button.length; i++) {
                button[i].style.backgroundColor = "#F9F4F4"
                button[i].style.color = "#0F0C0C"
            }
            setDarkMode(true);
        }
    }
    return (
        <header id="header">
            <div className="header-isologo">
                <img className="isologo-image" src={Logo} alt="Isologo Pedro Gabriel." />
            </div>
            <div className="header-modes">
                <button className="modes-buttons" onClick={handdleDarkMode}>
                    <MdLightMode className="light-mode-icon" />
                </button>
                <button className="modes-buttons" onClick={handdleDarkMode}>
                    <MdDarkMode className="dark-mode-icon" />
                </button>
            </div>
        </header>
    );
};