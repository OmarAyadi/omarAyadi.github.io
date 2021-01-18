import React from 'react';
import './styles/theme-toggle.scss'
import {useTheme} from "./ThemeContext";


function useThemeToggle() {
    const {theme, setTheme} = useTheme()

    const themeToggle = (
        <>
            <div className="themeToggle">
                <div className="themeToggle-mask" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <div className={`themeToggle-icon-wrapper ${theme!=="dark" ? "themeToggle-active" : ""}`}>
                        <div className="themeToggle-icon"></div>
                    </div>
                    <div className={`themeToggle-icon-wrapper ${theme==="dark" ? "themeToggle-active" : ""}`}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                            <path
                                d="M187.73 151.4c0-55.24 29.34-104.19 76.27-129.72C242.21 9.81 216.56 3 188.15 3 99.15 3 36.2 70.46 36.2 151.4S98.3 299 187.33 299c28.26 0 53.87-6.82 75.69-18.69-46.48-25.31-75.29-73.8-75.29-128.91z"
                                fill="#283445"/>
                        </svg>
                    </div>
                </div>
                <div className="themeToggle-bar"></div>
            </div>
        </>
    );

    return {theme, themeToggle}
}

export default useThemeToggle;