import React from "react";
import "./Cart.css";
import CartProduct from "./sub-assists/CartProduct";
import { useStateValue } from "./sub-assists/StateProvider";
import Subtotal from "./sub-assists/Subtotal";

function Cart() {

    const [{cart}] = useStateValue();

    return(
        <div className="cart">
            <div className="cart__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="cart ad" className="cart__ad" />
                

            <div className="cart__right">
                <Subtotal />
            </div>
                <h3 className="cart__title">
                    Review items and shipping
                </h3>
                
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
    )
}

export default Cart;