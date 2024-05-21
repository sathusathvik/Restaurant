import React from "react";
import logo from '../images/Logo .svg'

function Nav(){
    return(
        <nav className="navbar">
            <a href="/" >
                <img src={logo} alt="Logo"/>
            </a>


            {/*moblie navbar*/}
            <div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/*nav items*/}

            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;