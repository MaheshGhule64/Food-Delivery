import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import StoreContextProvider from './Context/StoreContext';
import Footer from './Component/Footer/Footer';
import LoginPopup from './Component/LoginPopup/LoginPopup';
import Verify from './Pages/Verify/Verify';
import Myorders from './Pages/Myorders/Myorders';


const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <StoreContextProvider>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
       <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<Myorders/>}/>
      </Routes>

    </div>
    <Footer/>
    </StoreContextProvider>
   
  )
}


export default App;
