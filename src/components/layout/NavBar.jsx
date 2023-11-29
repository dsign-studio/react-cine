import React from 'react';
import { NavLink } from "react-router-dom";
import BlurOnSharpIcon from '@mui/icons-material/BlurOnSharp';

const NavBar = () => {
    const data = [
        {
            icon: "",
            name: "React Cine - Codo a Codo 23646",
            link: "/",
        },
    ];

    return (
        <nav className="navbar navbar-light bg-light">

            <div id="the-nav" className="h-100 d-flex align-items-center justify-content-center">

                <BlurOnSharpIcon />
                    <span className="navItem">
                        {data.map((Val) => {
                            return (
                                    <span className="">
                                    <NavLink to={`${Val.link}`}>
                                       {Val.name}
                                    </NavLink>
                                    &nbsp; &nbsp; </span>
                            );
                        })}
                    </span>

                </div>

            </nav>
    );
};

export default NavBar;
