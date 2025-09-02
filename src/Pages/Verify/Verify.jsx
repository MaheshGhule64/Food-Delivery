import React from "react";
import {useSearchParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Verify.css';
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { useEffect } from "react";


const Verify = () => {

    const [searchparams, setSearchparam] = useSearchParams();
    const {url} = useContext(StoreContext);
    let success = searchparams.get('success');
    let orderId = searchparams.get('orderId');

    const navigate = useNavigate();

    useEffect(()=>{
        verifyPayment();
    },[]);

    const verifyPayment = async () => {

        const response = await axios.post(url+"/api/orders/verify", {success, orderId});

        if(response.data.success){

            navigate('/myorders');
        }
        else{
            navigate("/");
        }
    }


    return(
        <div className="verify">
           <div className="spinner"></div>
        </div>
    )
}


export default Verify;