import React from "react";
import { About } from "../ About/About";
import { Contact } from "../Contact/Contact";
import { Home } from "../Home/Home";
import { Projects } from "../Project/Projects";
import { Skills } from "../Skill/Skills";

export const Main = () => {
    return (
        <div id="content">
            <div className="main">
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </div>
    );
};