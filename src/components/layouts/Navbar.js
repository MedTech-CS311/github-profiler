import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
function Navbar () {

    
        return (
            <nav class="myNav"> 
                <img src={logo} className="navbar-logo-img" alt="logo"/>                        
                 <ul>
                    <li><a href="/List.js">Organisations</a></li>
                     <li><a href="/RepositoriesList.js">Repositories</a></li>
                 </ul>
            </nav>
        )
    

} 

export default Navbar;