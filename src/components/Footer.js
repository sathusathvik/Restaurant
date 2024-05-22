import React from "react";
import logo from "../images/Logo .svg"
const Footer = () => {
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=""/>
                    <p>We are family owned meditteraneran restaurant, focused on traditional recipes served with a modern twist</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Towncity, USA</li>
                        <li>Phone: <br/> +041 80931 32570</li>
                        <li>Email: <br/> 123 LittleLemon@gmail.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social</h3>
                    <ul>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">X</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}

export default Footer;