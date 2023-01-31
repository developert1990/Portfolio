import React from "react";
import { skillsData } from "../../assets/data/skills";
import { API_BASE } from "../../config";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
    return (
        <section id="skills">
            <div className="numbered-heading">My Skills</div>
            <div className="cards">
                <div className="card">
                    {/* <span>1</span> */}
                    <SkillCard data={skillsData["frontend"]} />
                </div>
                <div className="card">
                    {/* <span>2</span> */}
                    <SkillCard data={skillsData["backend"]} />
                </div>
                <div className="card">
                    {/* <span>3</span> */}
                    <SkillCard data={skillsData["CICD"]} />
                </div>
                <div className="card">
                    {/* <span>4</span> */}
                    <SkillCard data={skillsData["Containerization_Platform"]} />
                </div>
                <div className="card">
                    {/* <span>5</span> */}
                    <SkillCard data={skillsData["Testing"]} />
                </div>
                <div className="card">
                    {/* <span>6</span> */}
                    <SkillCard data={skillsData["databases"]} />
                </div>
                <div className="card">
                    {/* <span>7</span> */}
                    <SkillCard data={skillsData["hostingPlatforms"]} />
                </div>
                <div className="card">
                    {/* <span>8</span> */}
                    <SkillCard data={skillsData["versionControl"]} />
                </div>
                <div className="card">
                    {/* <span>9</span> */}
                    <SkillCard data={skillsData["programmingLanguages"]} />
                </div>
            </div>
        </section>
    );
};
