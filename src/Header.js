import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    return(
        <div className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt="amazon logo"/>
            <span className="header__in">.in</span>

        <div className="header__search">
            <input type="text" className="header__searchIn" placeholder="Search Amazon.in"/>
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__items">
           
            <div className="item__option">
                <span className="first__line">Hello,</span>
                <span className="second__line">Sign In</span>
            </div>
           
            <div className="item__option">
                <span className="first__line">Returns</span>
                <span className="second__line">& Orders</span>
            </div>
            
            <div className="item__option">
                <span className="first__line">Your</span>
                <span className="second__line">Prime</span>
            </div>

        </div>

        <div className="header__basket">
            <ShoppingCartIcon/>
            <span className="second__line basket__count">0</span>
        </div>

        </div>
    )
}

export default Header;