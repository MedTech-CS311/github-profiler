import React from "react";

import logo from "../../assets/img/logo.svg";

export default class Navbar extends React.Component {

    render() {
        return (
            <div className="navbar">
                <div className="navbar-logo-container">
                    <img src={logo} className="navbar-logo-img" alt="logo"/>
                </div>
            </div>
        )
    }

} 