import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

export const HamburgerIcon = () => {
    const [isOpen, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!isOpen);
    };

    return <Hamburger toggled={isOpen} toggle={handleToggle} rounded />;
};
