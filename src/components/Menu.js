import React from "react";
import recipes from "../recipes";
const Menu = () => {
    return(
        <div className="menu-container">
            <div className="menu-header">
                <h2>THis week specials</h2>
                <button>Order menu</button>
            </div>

            {/* menu cards*/}

            <div>
                {
                    recipes.map(recipe => <div key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        </div>)
                }
            </div>
        </div>
    );
}

export default Menu;