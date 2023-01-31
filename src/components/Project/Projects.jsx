import React, { useState } from "react";
import { projects } from "../../assets/data/projects";

export const Projects = () => {
    const [active, setActive] = useState();
    const handleClick = (id) => {
        setActive(id === active ? null : id);
    };
    return (
        <section id="projects">
            <div className="numbered-heading">Some Projects I've Built</div>
            <div className="projects">
                {projects.map((project, index) => {
                    return (
                        <div className={`project-card ${project.id === active ? "active" : "inactive"}`} onClick={() => handleClick(project.id)} key={index}>
                            <div className="face face--front">
                                <img style={{ width: "100%" }} src={project.imgSource} alt="pic" />
                                <div className="project-title">{project.title}</div>
                                <div className="project-technics">
                                    {project.technics.map((technic, index) => {
                                        return <img src={technic.imgSource} alt="nodejs" className="tech-image" key={index}></img>;
                                    })}
                                </div>
                            </div>
                            <div className="face face--back">
                                <div className="project-description">{project.description}</div>
                                <div className="project-features">
                                    {project.features.map((feature, index) => {
                                        return (
                                            <div className="feature" key={index}>
                                                {feature}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* <div className="my-projects">
                {projects.map((project, index) => {
                    return (
                        <div className="project">
                            <div className="mac-image">
                                <img style={{ width: "100%" }} src={project.imgSource} alt="pic" />
                            </div>
                            <div className="project-details">
                                <div className="project-title">{project.title}</div>
                                <div className="project-description">{project.description}</div>

                                <div className="card project-features">
                                    {project.features.map((feature, index) => {
                                        return <div key={index}>{feature}</div>;
                                    })}
                                </div>

                                <div className="project-technics">
                                    {project.technics.map((technic, index) => {
                                        return <img src={technic.imgSource} alt="nodejs" className="tech-image"></img>;
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div> */}
        </section>
    );
};
