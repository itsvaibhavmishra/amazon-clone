import React from "react";
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useStateValue } from "./sub-assists/StateProvider";

function Product({id, info, price, rating, image}) {

    const [{cart}, dispatch] = useStateValue();

    const addtoCart = () => {
        dispatch({
            type: 'Add_To_Cart',
            item: {
                id: id,
                info: info,
                price: price,
                rating: rating,
                image: image,
            }
        });
    }

    return(
        <div className="product">
            <div className="product__info">
                <p>{info}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price.toLocaleString('en-IN')}</strong>
                </p>
                <div className="ratings">
                {/* for number of stars to be shown     */}
                {Array(rating)
                .fill()
                .map(() => (<StarIcon className="star__icon"/> ))}
                {/* for empty stars to be shown */}
                {Array(5-rating)
                .fill()
                .map(() => (<StarBorderIcon className="star__icon"/> ))}
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addtoCart}>Add to Cart</button>
        </div>
    );
}

export default Product;