import React from 'react';
import "./navbar.scss"
import {RollingText, SpinText} from "../text";
import {useThemeToggle} from "../theme";

function NavBar() {
    const {themeToggle} = useThemeToggle();

    const style = {
        fontSize: "1.6rem",
        height: "30px"
    }

    const navItems = [
        {
            text: "Home",
            link: "/",
            style: style
        },
        {
            text: "About",
            link: "/about",
            style: style
        },
        {
            text: "Work",
            link: "/work",
            style: style
        },
        {
            text: "Skills",
            link: "/skills",
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