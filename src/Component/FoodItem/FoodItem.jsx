
import React, { useContext, useEffect, useState } from "react";
import './FoodItem.css';
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";



const FoodItem = ({id, name, price, description, image}) => {

    const data = {id:id, name:name, price:price, description:description, image:image};

    const Context = useContext(StoreContext);
    const navigate = useNavigate();

    const [itemCount, setItemCount] = useState(0);
    const {cartItems, setCartItems, addToCart, removeFromCart} = Context;

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img src={image} alt="foodImage" className="food-item-image"/>
                {!cartItems[id] ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="add_icon"/> : 
                <div className="food-item-counter">
                    <img className="count-icon" onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="remove_icon"/>
                    <p>{cartItems[id]}</p>
                    <img className='count-icon' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="add_green"/>
                     </div>}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating"/>
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>

            </div>
        </div>
    )
}

export default FoodItem;