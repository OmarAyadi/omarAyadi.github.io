import React from 'react';
import './theme-toggle.scss'
import {useTheme} from "../ThemeContext";


function useThemeToggle() {
    const {theme, setTheme} = useTheme()

    const createSunRays = (raysNumber: number) => {
        // prepare an array that will contain all the rays
        const sunRays = []

        // loop and push elements into the rsun ray array
        for (let i = 0; i < raysNumber; i++)
            sunRays.push(<small key={i} className="theme-toggle-sun__ray"></small>)

        return sunRays
    }
    const themeToggle = (
        <>
            <div className={`${"theme__" + theme}`} onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark")
            }}>
                <div className="theme-toggle">
                    <span className="theme-toggle-moon"></span>
                    <span className="theme-toggle-sun"></span>
                    {createSunRays(6)}
                </div>
            </div>
        </>
    );

    return {theme, themeToggle}
}

export default useThemeToggle;