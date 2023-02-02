import React from "react";
import Avatar from "../Avatar/Avatar_wrapper";
import SAITICON from "../../assets/imgs/education/saitLogo.png";
import UNIVERSITY_ICON from "../../assets/imgs/education/gyungsangUniversity.png";
import { Fade } from "react-awesome-reveal";

export const About = () => {
    return (
        <section id="about">
            <Fade delay={0.1} cascade damping={0.1} className="numbered-heading">
                About Me
            </Fade>
            <div className="about-detail">
                <div className="avatar-wrapper">
                    <Avatar />
                </div>
                <div>
                    <p>
                        Hi there! I am <strong>&nbsp;Sangmean Hong. </strong>
                        Write as many codes as I can. Make as many dreams as I can, I am a front-end developer who believes that code can change someone's world. The rapid growth in information Technology is reflected by the complex programming advancements made in many industries.
                    </p>
                    <p>
                        The programmers working on self-driving vehicles in the automotive industry demonstrate the impact on society of continuous advancements through problem solving and programming. A string interest in new technology and my desire to learn were deciding factors in my education and career choice. I look forward to the opportunity to demonstrate my skills and contribute to the
                        success of my employer by making significant contributions to all projects assigned to me.
                    </p>
                    <div>
                        <div className="educations">
                            <div className="education">
                                <img src={SAITICON} alt="sait" className="education-logo" />
                                <div className="education-detail">
                                    <div>
                                        Southern Alberta Institute of Technology - Information Technology <br /> Jan 2020 ~ Aug 2021
                                    </div>
                                </div>
                            </div>
                            <div className="education">
                                <img src={UNIVERSITY_ICON} alt="gyungsang" className="education-logo" />
                                <div className="education-detail">
                                    <div>
                                        GyeongSang National University - Electronics Engineering <br /> Mar 2009 ~ Feb 2014
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
