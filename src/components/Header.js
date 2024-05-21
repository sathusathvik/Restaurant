import React from "react";

const Header = () => {
    return(
        <header className="header">
            <section>

                {/*heading*/}

                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are family owned meditteraneran restaurant, focused on traditional recipes served with a modern twist</p>
                    <link to ="/booking"><button arial-label="On Click">Reserve Table</button></link>
                </div>
            </section>
        </header>
    )
};

export default Header;