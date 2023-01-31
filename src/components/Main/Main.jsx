import React from "react";
import { About } from "../ About/About";
import { Contact } from "../Contact/Contact";
import { Home } from "../Home/Home";
import { Skills } from "../Skills/Skills";

export const Main = () => {
    return (
        <div id="content">
            <div className="main">
                <Home />
                <About />
                <Skills />
                <Contact />
            </div>
        </div>
    );
};
