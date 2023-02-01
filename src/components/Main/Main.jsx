import React from "react";
import { About } from "../ About/About";
import { Experiences } from "../Experiences/Experiences";
import { Footer } from "../Footer/Footer";
import { Home } from "../Home/Home";
import { Projects } from "../Project/Projects";
import { Skills } from "../Skill/Skills";
import { Testimonials } from "../Testimonials/Testimonials";

export const Main = () => {
    return (
        <div id="content">
            <div className="main">
                <Home />
                <About />
                <Skills />
                <Projects />
                <Experiences />
                <Testimonials />
                <Footer />
            </div>
        </div>
    );
};
