import React from "react";
import "./Header.css";

function Header() {
    return(
        <div className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt="amazon logo"/>
        
        <div className="header__search">
            <input type="text" className="header__searchIn" placeholder="Search"/>
            {/* Logo */}
        </div>

        <div className="header__items">
           
            <div className="item__option">
                <span className="first__line">Hello,</span>
                <span className="second__line">Sign In</span>
            </div>
           
            <div className="item__option">
                <span className="first__line">Returns</span>
                <span className="second__line">& Orders In</span>
            </div>
            
            <div className="item__option">
                <span className="first__line">Your</span>
                <span className="second__line">Prime In</span>
            </div>

        </div>

        </div>
    )
}

export default Header;