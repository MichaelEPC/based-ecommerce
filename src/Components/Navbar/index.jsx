import React from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../Context";
import NavItems from "./NavItems"
import AccountOptions from "../AccountOptions"
import AccountSingIn from "../AccountSingIn/index";
import "./style.css";
import bagCart from '../../imgs/bolso-shopping-cuadrado-con-asa-sm.png';
import userIcon from '../../imgs/userIcon-sm.png';
import storeIcon from '../../imgs/storeIcon.png'; 

function Navbar() {
  const {
    itemNumber,
    setisOpenShoppingCart, 
    setinfoProductOpen, 
    setCategorySelected, 
    leftNav, 
    leftRight,
    setIsAccountSideOpen, 
    isUserSingIn, 
    setIsAccountSideOpenSingUp,
  } = React.useContext(ProductContext);
  
  // Open Cart View : Open aside cart with products in it
  const openAsideCart = () => {
    setisOpenShoppingCart(true);
    setinfoProductOpen(false);
    setIsAccountSideOpen(false);
    setIsAccountSideOpenSingUp(false);
  }

  // Open account aside : Open account user options, if user its login in system it will show diferent options
  const openAsideAccount = () => {
    if (isUserSingIn == 'true') {
      setisOpenShoppingCart(false);
      setinfoProductOpen(false);
      setIsAccountSideOpenSingUp(false);
      setIsAccountSideOpen(true);
      return;
    }
    else {
      setisOpenShoppingCart(false);
      setinfoProductOpen(false);
      setIsAccountSideOpen(false);
      setIsAccountSideOpenSingUp(true);
      return;
    }
  }
  
  return (
    <nav className="navbar bg-green-500 flex justify-between items-center fixed z-10 w-full py-5 px-2 text-base top-0">
      
      <ul className="flex items-center gap-3 ">
        
        <div className='div-icon-nav rounded-full'>
          <NavLink to={'/based-online-product-store/home'}>
            <img className='store-icon-nav' src={ storeIcon } alt="icon" />
          </NavLink>
        </div>

        {leftNav.map(({name, to, className, on}) => ( 
          <NavItems key={ name } className={ className } navbarName={ name } to={ to } on={on} setCategorySelected= {setCategorySelected }/>
        ))}

      </ul>

      <ul className="flex items-center gap-3">

        <li className='bg-white mr-2 cursor-pointer'>
          <div className="" onClick={() => openAsideAccount()}>
            <img src={ userIcon } alt="" className=""/>
          </div>
        </li>

        {leftRight.map(({ name, to, className }) => ( 
          <NavItems key={ name } className={ className } navbarName={ name } to={ to } setCategorySelected={ setCategorySelected }/>
        ))}

        <li>
          <div>
          <img src={ bagCart } alt="" className="cursor-pointer"
          onClick={() => openAsideCart()}/>
          <div className="bg-white flex justify-center absolute rounded-full w-3 top-2 right-0">{ itemNumber }</div>
          </div>
        </li>

      </ul>

      <AccountOptions/>
      <AccountSingIn/>
    </nav>
  )}

export default Navbar