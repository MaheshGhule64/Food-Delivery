import React, { useState } from "react";
import './LoginPopup.css';
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({ setShowLogin }) => {

    const [loginState, setLoginState] = useState('Sign Up');
    return (
        <div className="login-popup">
            <form className="login-popup-container">

                <div className="login-popup-title">
                    <h2>{loginState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="cancel" />
                </div>
                <div className="login-popup-inputs">
                    {loginState === 'Sign Up' && <input type="text" placeholder="Your Name" required />}
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                </div>

                <button>{loginState === 'Sign Up' ? 'Sign Up' : 'Login'}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By proceeding, you agree to our Terms & Conditions and Privacy Policy.</p>
                </div>

                {loginState==='Sign Up' ? <p>Already have an account ? <span onClick={()=>setLoginState('Login')}>Login</span></p> : <p>Create a new account ? <span onClick={()=>setLoginState('Sign Up')}>Sign Up</span></p>}

            </form>
        </div>
    )
}

export default LoginPopup;