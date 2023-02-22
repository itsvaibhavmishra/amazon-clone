import React from "react";
import "./Checkout.css"
import { getCartTotal } from "./sub-assists/reducer";
import { useStateValue } from "./sub-assists/StateProvider";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

function Checkout() {

    const [{cart}] = useStateValue();
    const total = (getCartTotal(cart));

    if(total !== 0){
        return <PageFound/>;
    }
    return <PageNotFound/>;
}

function PageNotFound(){
    return(
        <div className="pgNotFound">
            <ProductionQuantityLimitsIcon className="Empty__Cart" />
            <h1>Your Cart Looks Empty <br/> Add Products</h1>
            <p></p>
        </div>
    )
}

function PageFound(){
    return(
        <div className="checkout">
            <div className="checkout__container">
                {/* Address Section */}
                <div className="checkout__section">
                    
                </div>

                {/* Item Review Section */}
                <div className="checkout__section">

                </div>

                {/* Payment Section */}
                <div className="checkout__section">

                </div>
            </div>
        </div>
    )
}

export default Checkout;