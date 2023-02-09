import React from "react";
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return(
        <div className="subtotal">
            <button>Place your order</button>
            <p>By placing your order, you agree to Amazon.in's</p>
            <span className="tnc">
                <a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ" target={"_blank"} rel="noreferrer">privacy notice </a>
                and
                <a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=GLSBYFE9MGKKQXXM" target={"_blank"} rel="noreferrer"> condition of use.</a>
            </span>
            <CurrencyFormat
            renderText={(value) => (
                <>
                    <h3>Order Summary</h3>
                    <p>
                        Quantity (0 items):
                    </p>

                    <p>
                        Shipping & handling: {(value<2000)? 0: (value*(2/100)) }
                    </p>

                    <small className="subtotal__gift">
                        <input type="checkbox" />
                        This order is a gift
                    </small>
                    <p>
                        <strong>Order total: 0</strong>
                    </p>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
        </div>
    )
}

export default Subtotal;