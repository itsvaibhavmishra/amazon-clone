import React from "react";
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer"
import { useNavigate } from "react-router-dom";

function Subtotal() {

    const navigate = useNavigate();

    const [{cart}, dispatch] = useStateValue();
    const tax = (getCartTotal(cart) > 5000)?0: (getCartTotal(cart))*0.03;
    const total = (getCartTotal(cart)+tax);

    return(
        <div className="subtotal">
            <button onClick={e => navigate('/checkout')}>Place your order</button>
            <p className="abtnc">By placing your order, you agree to Amazon.in's</p>
            <p className="tnc">
                <a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ" target={"_blank"} rel="noreferrer">privacy notice </a>
                and
                <a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=GLSBYFE9MGKKQXXM" target={"_blank"} rel="noreferrer"> condition of use.</a>
            </p>
            <CurrencyFormat
            renderText={(value) => (
                <>
                    <h3>Order Summary</h3>
                    <p>
                        Quantity ({cart.length} items): <span className="cost">{value}</span>
                    </p>

                    <p>
                        Shipping & handling: <span className="cost">₹{tax}</span>
                    </p>

                    <small className="subtotal__gift">
                        <input type="checkbox" />
                        This order is a gift
                    </small>
                    <p>
                        <strong>Order total: <span className="cost">₹{total.toLocaleString('en-IN')}</span></strong>
                    </p>
                </>
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
        </div>
    )
}

export default Subtotal;