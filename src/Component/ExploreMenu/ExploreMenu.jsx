
import React from "react";
import './ExploreMenu.css';
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explore our menu</h1>
            <p className="explore-menu-text">Explore our carefully curated menu, featuring a blend of classic favorites and chef-inspired creations.
                From appetizers to desserts, every dish is made to delight your taste buds and satisfy every craving.</p>

                <div className="explore-menu-list">
                    {menu_list.map((item, index)=> {
                        return(
                            <div onClick={()=>setCategory(prev=>prev===item.menu_name ? 'All' : item.menu_name)}  key={index} className="explore-menu-list-item">
                                <img className={category===item.menu_name ? 'active' : ''} src={item.menu_image} alt="menu_image"/>
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })}
                </div>
                <hr/>

        </div>
    )
}

export default ExploreMenu;