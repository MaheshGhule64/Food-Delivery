import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import './Navbar.css';
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";


const Navbar = ({setShowLogin}) => {

    const {getTotalPrice} = useContext(StoreContext);

    const [menu, setMenu] = useState('Home');

    return(
        <div className="navbar">
            <Link to='/'><img src={assets.logo} alt="logo" className="logo"/></Link>
                <ul className="navbar-menu">
                    <Link onClick={()=>setMenu('Home')} className={menu==='Home' ? 'active' : ''}>Home</Link>
                    <a href="#explore-menu" onClick={()=>setMenu('Menu')} className={menu==='Menu' ? 'active' : ''}>Menu</a>
                    <a href="#app-download" onClick={()=>setMenu('Mobile-app')} className={menu==='Mobile-app' ? 'active' : ''}>Mobile-app</a> 
                    <a href="#footer" onClick={()=>setMenu('Contact us')} className={menu==='Contact us' ? 'active' : ''}>Contact us</a>
                </ul>
                <div className="navbar-right">
                    <img src={assets.search_icon} alt="search" />
                    <div className="navbar-search-icon">
                        <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                        {getTotalPrice()>0 && <div className="dot"></div>}
                    </div>
                    <button onClick={()=>setShowLogin('true')}>Sign in</button>
                </div>

        </div>
    )
}

export default Navbar;