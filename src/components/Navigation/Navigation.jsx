import anime from "animejs";
import React, { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { ThemeToggleButton } from "../ThemeButton/ThemeToggleButton";
import { HamburgerIcon } from "./HamburgerIcon";

export const Navigation = () => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        anime({
            targets: ".nav-anime",
            translateY: [-40, 0],
            delay: anime.stagger(100), // increase delay by 100ms for each elements.
            duration: 2000,
        });
    }, []);

    const navBarRef = useRef(null);
    const menuRef = useRef(null);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            navBarRef.current.classList.add("nav-scrolled");
        } else {
            navBarRef.current.classList.remove("nav-scrolled");
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            window.addEventListener("scroll", handleScroll);
        }, 100);
        return () => {
            clearInterval(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const menuElement = menuRef.current;
        isOpen ? menuElement.classList.add("active") : menuElement.classList.remove("active");
    }, [isOpen]);

    const closeToggle = (id) => {
        document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    // 바깥쪽 클릭 이벤트
    const handleOutsideClick = () => {
        setOpen(false);
    };

    const ref = useOutsideClick(handleOutsideClick);

    return (
        <div id="navigation-wrapper" ref={navBarRef}>
            <div className="navigation" ref={ref}>
                {/* Logo */}
                {/* <a href="/">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                            <path
                                className="my-line"
                                d="M1559 5102 c-79 -21 -156 -69 -207 -128 l-37 -43 -55 19 c-111 39
                                -266 18 -374 -50 -61 -39 -138 -118 -173 -177 -57 -97 -75 -168 -81 -310 l-5
                                -132 -71 -59 c-117 -98 -185 -172 -219 -242 -30 -60 -32 -72 -32 -165 0 -89 3
                                -106 28 -157 74 -151 207 -218 515 -259 l92 -12 0 -123 c0 -67 3 -130 6 -139
                                10 -26 62 -44 94 -33 40 14 50 47 50 172 l0 113 128 7 c317 17 634 97 884 222
                                48 24 90 44 93 44 3 0 5 -116 6 -257 0 -172 4 -270 12 -293 21 -61 102 -68
                                132 -10 l16 30 524 0 c429 0 525 -2 525 -13 0 -24 45 -57 77 -57 22 0 38 8 52
                                26 21 26 21 34 21 713 0 558 3 697 15 746 60 255 285 434 546 435 75 0 199
                                -33 264 -70 114 -65 206 -173 257 -299 l23 -56 5 -1621 c5 -1577 6 -1622 24
                                -1643 25 -27 86 -29 110 -3 15 18 16 138 14 1653 l-3 1634 -27 73 c-43 115
                                -85 181 -177 273 -73 73 -101 93 -181 132 -122 59 -231 82 -355 74 -318 -19
                                -585 -250 -649 -560 -14 -64 -16 -168 -16 -682 l0 -605 -525 0 -525 0 0 188
                                c0 103 -3 210 -6 237 l-6 50 49 30 c74 46 235 178 291 240 151 165 158 374 17
                                524 -87 93 -176 127 -432 166 -41 6 -44 10 -90 92 -83 149 -184 240 -319 290
                                -93 33 -215 40 -305 15z m297 -177 c84 -41 141 -99 197 -200 20 -37 37 -70 36
                                -74 -1 -10 -129 -114 -194 -159 -263 -178 -663 -268 -965 -217 -158 26 -150
                                20 -150 118 0 143 36 239 122 326 96 97 240 129 338 76 104 -57 104 -57 132
                                -46 17 6 37 31 59 71 18 34 48 74 67 88 96 73 232 80 358 17z m572 -400 c85
                                -20 133 -46 175 -95 97 -114 63 -244 -103 -388 -458 -397 -1114 -582 -1710
                                -481 -158 26 -213 45 -264 90 -56 49 -76 93 -76 163 0 78 32 137 117 216 l68
                                64 5 -110 c7 -154 26 -180 155 -209 110 -26 441 -32 585 -11 137 20 312 65
                                430 110 197 77 424 213 545 329 63 61 65 64 65 112 0 40 -9 67 -45 134 -25 45
                                -45 85 -45 87 0 8 35 4 98 -11z m-209 -103 c28 -51 49 -97 46 -102 -19 -30
                                -236 -178 -330 -224 -336 -167 -709 -233 -1040 -185 -114 17 -105 5 -105 131
                                0 99 2 109 17 104 9 -4 61 -14 117 -23 262 -41 637 22 897 152 95 48 219 131
                                289 194 30 27 56 48 56 47 1 0 25 -43 53 -94z"
                            />
                            <path
                                className="my-line"
                                d="M960 2908 c-20 -22 -20 -22 -18 -1178 l3 -1155 27 -80 c39 -114 92
                                -199 178 -285 220 -220 526 -270 810 -133 82 39 108 58 185 137 73 73 99 108
                                133 176 76 156 75 139 79 838 l5 622 523 0 524 0 3 -638 3 -637 27 -80 c39
                                -114 92 -199 178 -285 220 -220 526 -270 810 -133 80 39 108 59 181 132 92 93
                                135 159 176 273 26 70 27 82 31 326 3 230 2 256 -14 273 -24 27 -85 26 -110
                                -2 -17 -19 -20 -44 -25 -263 -5 -217 -8 -247 -28 -297 -68 -176 -211 -304
                                -387 -349 -304 -78 -606 107 -679 415 -12 49 -15 188 -15 746 0 679 0 687 -21
                                713 -27 34 -77 36 -107 3 -12 -13 -22 -29 -22 -35 0 -9 -127 -12 -525 -12
                                l-524 0 -16 30 c-30 58 -111 51 -132 -10 -9 -26 -12 -218 -13 -725 -1 -687 -1
                                -690 -23 -756 -46 -134 -148 -258 -266 -322 -64 -35 -189 -67 -260 -67 -203 1
                                -401 119 -493 296 -71 134 -68 75 -68 1315 0 1114 0 1116 -21 1143 -27 34 -79
                                36 -109 4z"
                            />
                            <path
                                className="my-line"
                                d="M2205 2715 c-23 -22 -25 -32 -25 -110 0 -78 2 -88 25 -110 31 -32 69
                            -32 100 0 23 22 25 32 25 114 0 85 -1 91 -26 110 -35 28 -69 26 -99 -4z"
                            />
                            <path
                                className="my-line"
                                d="M3455 2715 c-23 -22 -25 -32 -25 -110 0 -78 2 -88 25 -110 31 -32 69
                            -32 100 0 23 22 25 32 25 110 0 78 -2 88 -25 110 -13 14 -36 25 -50 25 -14 0
                            -37 -11 -50 -25z"
                            />
                            <path
                                className="my-line"
                                d="M2545 2525 c-60 -59 -7 -192 99 -247 57 -29 143 -27 199 4 43 24 45
                            24 69 7 64 -47 174 -42 247 12 64 46 105 148 80 202 -11 24 -46 47 -73 47 -22
                            0 -66 -40 -66 -60 0 -55 -49 -97 -93 -81 -31 12 -43 29 -51 72 -8 42 -21 57
                            -62 65 -42 8 -80 -24 -88 -74 -7 -47 -26 -65 -68 -65 -36 0 -68 32 -68 70 0
                            32 -42 73 -75 73 -14 0 -37 -11 -50 -25z"
                            />
                        </g>
                    </svg>
                </a> */}
                <div className="menu" ref={menuRef}>
                    <ol>
                        <li className="nav-anime">
                            <button onClick={() => closeToggle("about")}>About</button>
                        </li>
                        <li className="nav-anime">
                            <button onClick={() => closeToggle("skills")}>Skills</button>
                        </li>
                        <li className="nav-anime">
                            <button onClick={() => closeToggle("projects")}>Projects</button>
                        </li>
                        <li className="nav-anime">
                            <button onClick={() => closeToggle("experiences")}>Experiences</button>
                        </li>
                        <li className="nav-anime">
                            <button onClick={() => closeToggle("testimonials")}>Testimonials</button>
                        </li>
                        <li className="nav-anime">
                            <ThemeToggleButton />
                        </li>
                    </ol>
                </div>

                <HamburgerIcon isOpen={isOpen} setOpen={setOpen} />
            </div>
        </div>
    );
};
