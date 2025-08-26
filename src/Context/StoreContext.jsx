import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getTotalPrice = () => {
        let Total = 0;
        if (cartItems) {
            for (const item in cartItems) {
                if (cartItems[item] > 0) {
                    let itemInfo = food_list.find((product) => { return product._id === item });
                    let price = itemInfo.price;
                    Total += (price * cartItems[item]);
                }
            }
        }
        return Total;
    }

    const contextValue = {
        food_list,
        addToCart,
        removeFromCart,
        cartItems,
        setCartItems,
        getTotalPrice
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;