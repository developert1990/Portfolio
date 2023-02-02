import React from "react";
import { Sling as Hamburger } from "hamburger-react";

export const HamburgerIcon = ({ isOpen, setOpen }) => {
    const handleToggle = () => {
        setOpen(!isOpen);
    };

    return <Hamburger toggled={isOpen} toggle={handleToggle} rounded />;
};
