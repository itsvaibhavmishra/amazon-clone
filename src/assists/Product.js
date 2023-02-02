import React from "react";
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Product() {

    return(
        <div className="product">
            <div className="product__info">
                <p>iQOO Z6 Lite 5G by vivo (Stellar Green, 4GB RAM, 64GB Storage) | World's First Snapdragon 4 Gen 1 | 120Hz Refresh Rate | 5000mAh Battery</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>13,499</strong>
                </p>
                <div className="ratings">
                    <StarIcon className="star__icon"/>
                    <StarIcon className="star__icon"/>
                    <StarIcon className="star__icon"/>
                    <StarIcon className="star__icon"/>
                    <StarBorderIcon className="star__icon"/>
                </div>
            </div>

            <img src="https://m.media-amazon.com/images/I/61VbKHdE0rL._SX569_.jpg" alt="" />

            <button>Add to Cart</button>
        </div>
    );
}

export default Product;