import React from "react";

const lightThemeColor = "whitesmoke"
const darkThemeColor = "#323232"

export const themeColours = {
    light: {
        backgroundColor: lightThemeColor,
        inverseColor: darkThemeColor,
        toggle: {
            sunColor: "#eec413",
        },
        boat: {
            seaColor: "#2BE3FA",
            waveColor: lightThemeColor
        },
        whale: {
            moonColor: "#bcbcbc",
            moonShadowColor: "#818181",
            cloudColor: "#ffc7c7",
            cloudShadowColor: "#fea9a9",
            whaleColor: "slateblue",
            whaleShadowColor: "darkslateblue"
        }
    },
    dark: {
        backgroundColor: darkThemeColor,
        inverseColor: lightThemeColor,
        toggle: {
            sunColor: lightThemeColor,
        },
        boat: {
            seaColor: lightThemeColor,
            waveColor: "#2BE3FA"
        },
        whale: {
            moonColor: lightThemeColor,
            moonShadowColor: "grey",
            cloudColor: lightThemeColor,
            cloudShadowColor: "grey",
            whaleColor: "#a685e2",
            whaleShadowColor: "#9064df"
        }
    }
};

type ThemeName = "light" | "dark";

type ThemeContextType = {
    theme: ThemeName;
    setTheme: (name: ThemeName) => void;
};

const ThemeContext = React.createContext<ThemeContextType>(undefined!);

type Props = {
    children: React.ReactNode;
};

export const ThemeProvider = ({children}: Props) => {
    const getThemeFromCookies: () => ThemeName = () => {

        // fetch the document cookie
        const themeFromCookie = document.cookie

        // fetch the theme from the cookie
        return themeFromCookie.indexOf("dark") !== -1 ? "dark" : "light"
    }

    // use dark mode by default
    const [themeName, setThemeName] = React.useState<ThemeName>(
        getThemeFromCookies()
    );

    const setTheme = (name: ThemeName) => {

        // Theme Colors Css updates
        document.body.style.setProperty("--theme-background-color", themeColours[name].backgroundColor);
        document.body.style.setProperty("--theme-inverse-color", themeColours[name].inverseColor);

        // Toggle Css Updates
        document.body.style.setProperty("--toggle-sun-color", themeColours[name].toggle.sunColor);

        // Boat Css Updates
        document.body.style.setProperty("--boat-sea-color", themeColours[name].boat.seaColor);
        document.body.style.setProperty("--boat-wave-color", themeColours[name].boat.waveColor);

        // whale Css Updates
        document.body.style.setProperty("--whale-moon-color", themeColours[name].whale.moonColor);
        document.body.style.setProperty("--whale-moon-shadow-color", themeColours[name].whale.moonShadowColor);
        document.body.style.setProperty("--whale-cloud-color", themeColours[name].whale.cloudColor);
        document.body.style.setProperty("--whale-cloud-shadow-color", themeColours[name].whale.cloudShadowColor);
        document.body.style.setProperty("--whale-color", themeColours[name].whale.whaleColor);
        document.body.style.setProperty("--whale-shadow-color", themeColours[name].whale.whaleShadowColor);


        setThemeName(name);
    };

    React.useEffect(() => {
        // update document cookie
        document.cookie = "theme=" + themeName
        // update user theme
        setTheme(themeName)
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{theme: themeName, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);
