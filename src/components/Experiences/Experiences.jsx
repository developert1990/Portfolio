import React from "react";
import { Fade } from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { experiences } from "../../assets/data/experiences";

export const Experiences = () => {
    return (
        <section id="experiences">
            <Fade delay={0.1} cascade damping={0.1} className="numbered-heading">
                Where I've Worked
            </Fade>
            <Tabs>
                <TabList>
                    {experiences.map((experience, index) => {
                        return <Tab key={index}>{experience.company}</Tab>;
                    })}
                </TabList>
                <div className="tab-detail">
                    {experiences.map((experience, index) => {
                        return (
                            <TabPanel key={index}>
                                <h1 className="experience-role">{experience.role}</h1>
                                <h2 className="experience-period">{`${experience.startDate} to ${experience.endDate}`}</h2>

                                <a href={experience.link[0].href} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="experience-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                                        <title>LinkedIn</title>
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                                <div className="experience-feature">
                                    {experience.features.map((feature, index) => {
                                        return <div key={index} dangerouslySetInnerHTML={{ __html: feature }}></div>;
                                    })}
                                </div>
                            </TabPanel>
                        );
                    })}
                </div>
            </Tabs>
        </section>
    );
};
