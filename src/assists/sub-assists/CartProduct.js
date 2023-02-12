import React from "react";
import "./CartProduct.css";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function CartProduct({id, info, price, rating, image}) {
    return(
        <div className="cartProduct">
            <img src={image} alt="product img" className="product__image" />
            <div className="product__details">
                <p className="product__info">{info}</p>
                <p className="product__price">
                    <small>₹</small><strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map(() => (<StarIcon className="star__icon"/> ))}

                    {Array(5-rating)
                    .fill()
                    .map(() => (<StarBorderIcon className="star__icon"/> ))}
                </div>
                <button>Remove from Cart</button>
            </div>
        </div>
    );
}

export default CartProduct;