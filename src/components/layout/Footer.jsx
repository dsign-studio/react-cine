import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
    const data = [
        {
            icon: "fas fa-fire-alt",
            name: "Tendencias",
            link: "/",
        },
        {
            icon: "fas fa-film",
            name: "Films",
            link: "/movies",
        },
        {
            icon: "fas fa-tv",
            name: "Series",
            link: "/tv",
        },
        {
            icon: "fas fa-search",
            name: "Buscar",
            link: "/search",
        },
    ];
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center bg-dark footer">
                        {data.map((Val) => {
                            return (
                                <>
                                    <NavLink to={`${Val.link}`}>
                                        <button className="col-sm-2 col-md-2 btn btn-info">
                                            <i className={`${Val.icon}`} id="fire"></i>
                                            <br />
                                            <h5 className="pt-1 fs-6">{Val.name}</h5>
                                        </button>
                                    </NavLink>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};


export default Footer;