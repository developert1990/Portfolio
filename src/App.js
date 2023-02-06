import { useTheme } from "./components/hooks/useTheme";
import { ThemeContext } from "./context/ThemeContext";
import React, { useEffect } from "react";
import { Main } from "./components/Main/Main";
import { Navigation } from "./components/Navigation/Navigation";
import cssVariables from "./styles/_variables.scss";

function App() {
    const [theme, changeTheme] = useTheme();
    console.log("cssVariables", cssVariables);

    return (
        <div id={`app theme-${theme}`}>
            <ThemeContext.Provider value={{ theme, changeTheme }}>
                <Navigation />
                <Main />
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
