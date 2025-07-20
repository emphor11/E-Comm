import React, { useState } from 'react'
import './NavBar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='nav-bar'>
      <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>TheMarketPlace</p>
      </div>
      <ul>
        <li onClick={() =>{setMenu("shop")} }><Link style={{textDecoration: 'none'}} to={'/'}>SHOP</Link>{(menu==="shop"?<hr/>:<></>)}</li>
        <li onClick={() =>{setMenu("MEN")} }><Link style={{textDecoration: 'none'}} to={'/mens'}>MEN</Link>{(menu==="MEN"?<hr/>:<></>)}</li>
        <li onClick={() =>{setMenu("WOMEN")} }><Link style={{textDecoration: 'none'}} to={'/womens'}>WOMEN</Link>{(menu==="WOMEN"?<hr/>:<></>)}</li>
        <li onClick={() =>{setMenu("KIDS")} }><Link style={{textDecoration: 'none'}} to={'/kids'}>KIDS</Link>{(menu==="KIDS"?<hr/>:<></>)}</li>
      </ul>
      <div className='nav-loginCart'>
        {/* <button><Link style={{textDecoration: 'none'}} to={'/login'}>LOGIN</Link></button> */}
        <Link style={{textDecoration: 'none'}} to={'/cart'}><img  src={cart_icon} alt=''/></Link>
        {/* <div className="nav-cart-count">0</div> */}
      </div>
    </div>
  )
}

export default NavBar