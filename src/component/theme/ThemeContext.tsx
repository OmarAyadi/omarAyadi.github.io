import React from "react";

const lightThemeColor = "whitesmoke"
const darkThemeColor = "#323232"

export const themeColours = {
    light: {
        backgroundColor: lightThemeColor,
        inverseColor: darkThemeColor,
        boat : {
            seaColor : "#2BE3FA",
            waveColor : lightThemeColor
        }
    },
    dark: {
        backgroundColor:darkThemeColor,
        inverseColor: lightThemeColor,
        boat : {
            seaColor : lightThemeColor,
            waveColor : "#749DD6"
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
        document.body.style.setProperty(
            "--theme-background-color",
            themeColours[name].backgroundColor
        );
        document.body.style.setProperty(
            "--theme-inverse-color",
            themeColours[name].inverseColor
        );


        document.body.style.setProperty(
            "--boat-sea-color",
            themeColours[name].boat.seaColor
        );

        document.body.style.setProperty(
            "--boat-wave-color",
            themeColours[name].boat.waveColor
        );

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
