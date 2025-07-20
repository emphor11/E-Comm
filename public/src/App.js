import React from 'react';
import './App.css';
import NavBar from './components/nav-bar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/shopCategory';
import Product from './pages/product';
import Cart from './pages/cart';
import LoginSignUp from './pages/loginSignUp';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/MENS' element={<ShopCategory banner={men_banner} category='men' />} />
        <Route path='/WOMENS' element={<ShopCategory banner={women_banner} category='women'/>} />
        <Route path='/KIDS' element={<ShopCategory banner={kids_banner } category='kid'/>} />
        <Route path='/product/:productId' element={<Product/>} />
        {  <Route path=':productId' element={<Product/>}/>  }
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
