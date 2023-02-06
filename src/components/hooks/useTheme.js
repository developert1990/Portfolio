import { useEffect, useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState("sea");

    const changeTheme = (theme) => {
        setTheme(theme);
    };

    useEffect(() => {
        const root = document.documentElement;
        const { main, shadow, tint } = selectTheme(theme);
        root?.style.setProperty("--main-color", main);
        root?.style.setProperty("--main-shadow", shadow);
        root?.style.setProperty("--main-tint", tint);
    }, [theme]);

    const selectTheme = (type) => {
        switch (type) {
            case "sea":
                return { main: "#86bafd", shadow: "#86bafdd4", tint: "#86bafd2d" };
            case "tree":
                return { main: "#64ffda", shadow: "#64ffdad4", tint: "#86fdcf2d" };
            case "sun":
                return { main: "#ff648f", shadow: "#ff648fd4", tint: "#fd86af2d" };
            default:
                break;
        }
    };

    return [theme, changeTheme];
};
