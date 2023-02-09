import React from "react";
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Product({info, price, rating, image}) {

    return(
        <div className="product">
            <div className="product__info">
                <p>{info}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="ratings">
                {/* for number of stars to be shown     */}
                {Array(rating)
                .fill()
                .map((_, i) => (<StarIcon className="star__icon"/> ))}
                {/* for empty stars to be shown */}
                {Array(5-rating)
                .fill()
                .map((_, i) => (<StarBorderIcon className="star__icon"/> ))}
                </div>
            </div>

            <img src={image} alt="" />

            <button>Add to Cart</button>
        </div>
    );
}

export default Product;