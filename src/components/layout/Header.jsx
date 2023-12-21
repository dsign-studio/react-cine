import React from "react";

const Header = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center w-100 text-uppercase p-3 header">
                        <i className="fas fa-video"></i> &nbsp;&nbsp; React Cine CaC 23646
                    </div>
                    <a
                        href="#/"
                        target="_blank"
                        className="col-11 header header1 bg-transparent fs-4 py-4 text-end"
                    >
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;