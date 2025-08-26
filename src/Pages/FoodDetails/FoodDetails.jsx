import React from "react";
import './FoodDetails.css';
import { assets } from "../../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const FoodDetails = () => {

    const location = useLocation();
    const {id, name, price, description, image} = location.state;
    console.log(id);

    return(
        <div className="food-details">

             <div className="food-item-img-container">
                            <img src={image} alt="foodImage" className="food-item-image"/>                           
                        </div>
                        <div className="food-item-info">
                            <div className="food-item-name-rating">
                                <p>{name}</p>
                                <img src={assets.rating_starts} alt="rating"/>
                            </div>
                            <p className="food-item-desc">{description}</p>
                            <p className="food-item-price">${price}</p>
            
                        </div>

                    <button onClick={()=>navigate('/order')} className="cart-total-button">Place Order</button>



        </div>
    )
}

export default FoodDetails