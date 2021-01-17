import React, {useEffect, useState} from 'react';
import './styles/theme-toggle.scss'
import {useTheme} from "./ThemeContext";


function useThemeToggle() {
    const {theme, setTheme} = useTheme()
    const [checked, setChecked] = useState(theme === "dark")

    useEffect(
        () => {
            console.log("checked", checked)
        }, [checked]
    )

    const themeToggle = (
        <>
            <div className="theme-toggle-wrapper">
                <input className="theme-toggle-input" type="checkbox"
                       checked={checked}
                       onChange={(e) => {
                           setChecked(e.target.checked)
                           // fetch the new theme
                           const newTheme = theme === "dark" ? "light" : "dark"
                           // update user' theme
                           setTheme(newTheme)
                       }}
                       id="dn"/>
                <label htmlFor="dn" className="theme-toggle">
                    <span className="toggle__handler">
                      <span className="theme-toggle-crater theme-toggle-crater--1"></span>
                      <span className="theme-toggle-crater theme-toggle-crater--2"></span>
                      <span className="theme-toggle-crater theme-toggle-crater--3"></span>
                    </span>
                    <span className="theme-toggle-star theme-toggle-star--1"></span>
                    <span className="theme-toggle-star theme-toggle-star--2"></span>
                    <span className="theme-toggle-star theme-toggle-star--3"></span>
                    <span className="theme-toggle-star theme-toggle-star--4"></span>
                    <span className="theme-toggle-star theme-toggle-star--5"></span>
                    <span className="theme-toggle-star theme-toggle-star--6"></span>
                </label>
            </div>
        </>
    );

    return {theme, themeToggle}
}

export default useThemeToggle;