import { ThemeContext } from "../../context/ThemeContext";
import React, { useContext } from "react";

export const ThemeToggleButton = () => {
    const { changeTheme } = useContext(ThemeContext);

    return (
        <div id="theme-toggle">
            <select id="theme" name="theme" onChange={(e) => changeTheme(e.target.value)}>
                <option value="sea">Sea</option>
                <option value="tree">Tree</option>
                <option value="sun">Sun</option>
            </select>
        </div>
    );
};
