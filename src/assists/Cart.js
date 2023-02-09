import React from "react";
import "./Cart.css";
import Subtotal from "./sub-assists/Subtotal";

function Cart() {
    return(
        <div className="cart">
            <div className="cart__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="cart ad" className="cart__ad" />
                
                <h3 className="cart__title">
                    Review items and shipping
                </h3>
            </div>
            
            <div className="cart__rig">
                <Subtotal />
            </div>
        </div>
    )
}

export default Cart;