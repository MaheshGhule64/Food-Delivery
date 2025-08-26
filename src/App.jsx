import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import StoreContextProvider from './Context/StoreContext';
import Footer from './Component/Footer/Footer';
import LoginPopup from './Component/LoginPopup/LoginPopup';
import FoodDetails from './Pages/FoodDetails/FoodDetails';


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
        <Route path='/foodDetails' element={<FoodDetails/>}/>
      </Routes>

    </div>
    <Footer/>
    </StoreContextProvider>
   
  )
}


export default App;
