import React from "react";

const themeColours = {
    light: {
        color: "#343434",
        backgroundColor: "whitesmoke",
        inverseColor: "#2f2f2f"
    },
    dark: {
        color: "#fff",
        backgroundColor: "#2f2f2f",
        inverseColor: "whitesmoke"
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
        return themeFromCookie.indexOf("light") !== -1 ? "light" : "dark"
    }

    // use dark mode by default
    const [themeName, setThemeName] = React.useState<ThemeName>(
        getThemeFromCookies()
    );

    const setTheme = (name: ThemeName) => {
        document.body.style.setProperty("--theme-color", themeColours[name].color);
        document.body.style.setProperty(
            "--theme-background-color",
            themeColours[name].backgroundColor
        );
        document.body.style.setProperty(
            "--theme-inverse-color",
            themeColours[name].inverseColor
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
