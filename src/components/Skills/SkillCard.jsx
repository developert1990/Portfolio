import React from "react";

export const SkillCard = ({ data }) => {
    console.log("data", data);
    return (
        <>
            {data.map((skill, index) => {
                return (
                    <div key={index}>
                        <span key={index}>
                            <a href={skill.link} target="_blank" rel="noopener noreferrer">
                                <img src={skill.imgSrc} alt={skill.skillName} rounded className="image-style m-1"></img>
                                <span> {skill.skillName}</span>
                            </a>
                        </span>
                    </div>
                );
            })}
        </>
    );
};
