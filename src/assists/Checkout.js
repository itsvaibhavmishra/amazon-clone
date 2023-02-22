import React from "react";
import "./Checkout.css"
import { getCartTotal } from "./sub-assists/reducer";
import { useStateValue } from "./sub-assists/StateProvider";
import CartProduct from "./sub-assists/CartProduct";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Link } from "react-router-dom";

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
        </div>
    )
}

function PageFound(){

    const [{cart, user}, dispatch] = useStateValue();
    const tax = (getCartTotal(cart) > 5000)?0: (getCartTotal(cart))*0.03;
    const total = (getCartTotal(cart)+tax);

    return(
        <div className="checkout">
            <div className="checkout__container">
                <h1>
                    Checkout(
                        <Link to={"/"}>{cart?.length} items</Link>
                    )
                </h1>
                {/* Address Section */}
                <div className="checkout__section">
                    <div className="checkout__title">
                        <h3>Delivery Address</h3>
                    </div>
                        <div className="checkout__address">
                            <p>{user?.email}</p>
                            <p>Example Building, Example City</p>
                            <p>Pincode: 000111</p>
                    </div>
                </div>

                {/* Item Review Section */}
                <div className="checkout__section">
                    <div className="checkout__title">
                        <h3>Review Your Cart</h3>
                    </div>
                    <div className="checkout__item">
                        {cart.map(item => (
                            <CartProduct 
                            id={item.id}
                            info={item.info}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                        />
                        ))}
                    </div>
                </div>

                {/* Payment Section */}
                <div className="checkout__section">
                    <div className="checkout__title">
                        <h3>Payment Total</h3>
                    </div>
                    <div className="payment__details">
                        <p><small>₹</small>{total.toLocaleString('en-IN')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;