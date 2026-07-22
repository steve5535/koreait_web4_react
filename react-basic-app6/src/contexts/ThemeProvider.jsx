import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const isDark = theme === "dark";

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const changeTheme = (nextTheme) => {
        setTheme(nextTheme);
    };

    const value = useMemo(
        () => ({
            theme,
            isDark,
            toggleTheme,
            changeTheme,
        }),
        [theme, isDark]
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme은 ThemeProvider 안에서 사용해야 합니다.");
    }

    return context;
}

export default ThemeProvider