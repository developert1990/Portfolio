import React from "react";
import { Contact } from "../Contact/Contact";

export const Footer = () => {
    return (
        <div id="footer">
            <div>Designed & Built by SangMean (Jaden) Hong {new Date().getFullYear()}</div>
            <Contact />
        </div>
    );
};
