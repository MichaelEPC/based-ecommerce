import React from "react";
import { updateNav } from "../../Utils/index.mjs";
import NavItems from "./NavItems"
import bagCart from '../../imgs/bolso-shopping-cuadrado-con-asa-sm.png';

function Navbar({ itemNumber, setisOpenShoppingCart, setinfoProductOpen, setCategorySelected, leftNav, leftRight }) {
  
  // Open Cart View : Open aside cart with products in it
  const openAsideCart = () => {
    setisOpenShoppingCart(true);
    setinfoProductOpen(false);
  }
  
  return (
    <nav className="bg-green-500 flex justify-between items-center fixed z-10 w-full py-5 px-2 text-base top-0">
      <ul className="flex items-center gap-3 ">
        {leftNav.map(({name, to, className, on}) => ( 
          <NavItems key={ name } className={ className } navbarName={ name } to={ to } on={on} setCategorySelected={setCategorySelected}/>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        {leftRight.map(({name, to, className}) => ( 
          <NavItems key={ name } className={ className } navbarName={ name } to={ to }/>
        ))}
        <li>
          <div className="">
          <img src={bagCart} alt="" className="cursor-pointer"
          onClick={() => openAsideCart()}/>
          <div className="bg-white flex justify-center absolute rounded-full w-3 top-2 right-0">{ itemNumber }</div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar