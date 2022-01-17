import React from "react";

import logo from "../../assets/img/logo.svg";


const Navbar = () => {
    return (
        <div className="navbar">
                <div className="navbar-logo-container">
                    <img src={logo} className="navbar-logo-img" alt="logo"/>
                </div>
            </div>
    )
}

export default Navbar