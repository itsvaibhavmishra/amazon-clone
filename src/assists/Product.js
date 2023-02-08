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
                {Array(rating)
                .fill()
                .map((_, i) => (<StarIcon className="star__icon"/> ))}
                
                    {/* <StarBorderIcon className="star__icon"/> */}
                </div>
            </div>

            <img src={image} alt="" />

            <button>Add to Cart</button>
        </div>
    );
}

export default Product;