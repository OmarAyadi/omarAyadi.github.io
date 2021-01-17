import React from 'react';
import "./navbar.scss"
import useThemeToggle from "../theme/ThemeToggle";
import {RollingText, SpinText} from "../text";

function NavBar() {
    const {themeToggle} = useThemeToggle();

    const style = {
        fontSize: "1.6rem",
        height: "30px"
    }

    const navItems = [
        {
            text: "About",
            link: "#",
            style: style
        },
        {
            text: "Work",
            link: "#",
            style: style
        },
        {
            text: "Projects",
            link: "#",
            style: style
        },
        {
            text: "Contact",
            link: "#",
            style: style
        },
    ]


    return (
        <div className="nav-bar">
            <div className="nav-bar-left">
                <div className="nav-bar-logo"><SpinText/></div>
            </div>

            <div className="nav-bar-right">
                <div className="nav-bar-items">
                    {
                        navItems.map(
                            ({text, link, style}, index) => (
                                <div key={index} className="nav-bar-item">
                                    <RollingText
                                        text={text}
                                        link={link}
                                        style={style}
                                    />
                                </div>
                            )
                        )
                    }

                </div>
                <div className="nav-bar-theme-toggle">
                    {themeToggle}
                </div>

            </div>
        </div>
    );
}

export default NavBar;