import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./assists/sub-assists/StateProvider";
import { auth } from "./assists/firebase";

function Header() {

    const [{cart, user}] = useStateValue();

    const handleAuth = () => {
        if(user) {
            auth.signOut();
        }
    }

    return(
        <div className="header">
            <Link to="/">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt="amazon logo"/>
            </Link>
            <span className="header__in">.in</span>

        <div className="header__search">
            <input type="text" className="header__searchIn" placeholder="Search Amazon.in"/>
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__items">
           
           <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
                <div className="item__option" onClick={handleAuth}>
                    <span className="first__line">Hello, </span>
                    <span className="second__line">{user?'Sign Out':'Sign In'}</span>
                </div>
            </Link>
           
            <div className="item__option">
                <span className="first__line">Returns</span>
                <span className="second__line">& Orders</span>
            </div>
            
            <div className="item__option">
                <span className="first__line">Your</span>
                <span className="second__line">Prime</span>
            </div>

        </div>

        <Link to="/cart" style={{ textDecoration: 'none' }}>
            <div className="header__basket">
                <ShoppingCartIcon/>
                <span className="second__line basket__count">{cart?.length}</span>
            </div>
        </Link>

        </div>
    )
}

export default Header;