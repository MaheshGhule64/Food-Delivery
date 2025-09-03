import React, { useState } from "react";
import './LoginPopup.css';
import { assets } from "../../assets/frontend_assets/assets";
import axios from 'axios';
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { useEffect } from "react";

const LoginPopup = ({ setShowLogin }) => {

    const {url, setToken} = useContext(StoreContext);

    const [loginState, setLoginState] = useState('Sign Up');
    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    });

  
    const onChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData((data=> ({...data, [name]:value})));

    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        let newUrl = url;
        if(loginState==="Sign Up"){
            newUrl += "/api/user/register";
        }
        else{
            newUrl += "/api/user/login"
        }

        const response = await axios.post(newUrl, data,  { withCredentials: true });
        if(response.data.success){
            setData({
                name:"",
                email:"",
                password:""
            });

            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            setShowLogin(false);
            
        }
        else{
            alert(response.data.message);
        }
        
    }
    return (
        <div className="login-popup">
            <form onSubmit={onSubmitHandler} className="login-popup-container">

                <div className="login-popup-title">
                    <h2>{loginState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="cancel" />
                </div>
                <div className="login-popup-inputs">
                    {loginState === 'Sign Up' && <input onChange={onChangeHandler} name="name" value={data.name} type="text" placeholder="Your Name" required />}
                    <input onChange={onChangeHandler} name="email"  value={data.email} type="email" placeholder="Email" required />
                    <input onChange={onChangeHandler} name="password" value={data.password} type="password" placeholder="Password" required />
                </div>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By proceeding, you agree to our Terms & Conditions and Privacy Policy.</p>
                </div>
                <button type="submit">{loginState === 'Sign Up' ? 'Sign Up' : 'Login'}</button>
                

                {loginState==='Sign Up' ? <p>Already have an account ? <span onClick={()=>setLoginState('Login')}>Login</span></p> : <p>Create a new account ? <span onClick={()=>setLoginState('Sign Up')}>Sign Up</span></p>}

            </form>
        </div>
    )
}

export default LoginPopup;
