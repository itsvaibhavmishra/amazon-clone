import React from "react";
import "./CartProduct.css";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useStateValue } from "./StateProvider";

function CartProduct({id, info, price, rating, image}) {

    const [{cart}, dispatch] = useStateValue();
    const removeItem = () => {
        dispatch({
            type: 'Remove_From_Cart',
            id: id
        })
    }

    return(
        <div className="cartProduct">
            <img src={image} alt="product img" className="product__image" />
            <div className="product__details">
                <p className="product__info">{info}</p>
                <p className="product__price">
                    <small>₹</small><strong>{price.toLocaleString('en-IN')}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map(() => (<StarIcon className="star__icon"/> ))}

                    {Array(5-rating)
                    .fill()
                    .map(() => (<StarBorderIcon className="star__icon"/> ))}
                </div>
                <button onClick={removeItem}>Remove from Cart</button>
            </div>
        </div>
    );
}

export default CartProduct;