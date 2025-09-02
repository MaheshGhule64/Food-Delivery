import React, { useContext, useState,useEffect} from "react";
import { assets } from "../../assets/frontend_assets/assets";
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { Profiler } from "react";


const Navbar = ({setShowLogin}) => {

    const {getTotalPrice, setToken} = useContext(StoreContext);
    const navigate = useNavigate();

    const [menu, setMenu] = useState('Home');

    const logout = () => {

        localStorage.removeItem('token');
        setToken("");
        navigate("/");  
    
    }

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
                    {!localStorage.getItem('token')?<button onClick={()=>setShowLogin('true')}>Sign in</button>: 
                    <div className="navbar-profile">
                        <img src={assets.profile_icon} alt="bag_icon"/>
                        <ul className="navbar-profile-dropdown">
                            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon}/><p>Orders</p></li>
                            <hr/>
                            <li onClick={logout}><img src={assets.logout_icon}/><p>Logout</p></li>
                        </ul>
                    </div>

                    }
                   
                </div>

        </div>
    )
}

export default Navbar;