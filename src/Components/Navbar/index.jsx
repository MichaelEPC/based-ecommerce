import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../Context";
import NavItems from "./NavItems";
import SelectCategory from "./SelectCategory";
import AccountOptions from "../AccountOptions";
import AccountSingIn from "../AccountSingIn/index";
import bagCart from "../../imgs/bolso-shopping-cuadrado-con-asa-sm.png";
import userIcon from "../../imgs/userIcon-sm.png";
import storeIcon from "../../imgs/storeIcon.png";
import selectCategory from "../../imgs/menu-icon.png";

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
    navbarButtonMobile,
    setNavbarButtonMobile,
  } = React.useContext(ProductContext);

  // Navbar responsive indicator
  const responsiveDesktop = "desktop";
  const responsiveMobile = "mobile";

  // Open Cart View : Open aside cart with products in it
  const openAsideCart = () => {
    setisOpenShoppingCart(true);
    setinfoProductOpen(false);
    setIsAccountSideOpen(false);
    setIsAccountSideOpenSingUp(false);
  };

  // Open account aside : Open account user options, if user its login in system it will show diferent options
  const openAsideAccount = () => {
    if (isUserSingIn == "true") {
      setisOpenShoppingCart(false);
      setinfoProductOpen(false);
      setIsAccountSideOpenSingUp(false);
      setIsAccountSideOpen(true);
      return;
    } else {
      setisOpenShoppingCart(false);
      setinfoProductOpen(false);
      setIsAccountSideOpen(false);
      setIsAccountSideOpenSingUp(true);
      return;
    }
  };

  // Open menu mobile aside : Open mobile menu user options, electronics, clothes, jewelery and all
  const openMobileMenu = () => {
    if (navbarButtonMobile == false) {
      setisOpenShoppingCart(false);
      setinfoProductOpen(false);
      setIsAccountSideOpenSingUp(false);
      setIsAccountSideOpen(false);
      setNavbarButtonMobile(true);
      return;
    } else {
      setisOpenShoppingCart(false);
      setinfoProductOpen(false);
      setIsAccountSideOpen(false);
      setIsAccountSideOpenSingUp(false);
      setNavbarButtonMobile(false);
      return;
    }
  };

  return (
    <nav className="navbar fixed top-0 z-10 flex w-full items-center justify-between bg-green-500 px-2 py-5 text-base">
      <ul className="flex items-center gap-3 ">
        <div className="div-icon-nav rounded-full">
          <NavLink to={"/based-ecommerce/home"}>
            <img className="store-icon-nav" src={storeIcon} alt="icon" />
          </NavLink>
        </div>

        <li>
          <img
            className="nav-mobile select-category-button"
            onClick={() => {
              openMobileMenu();
            }}
            src={selectCategory}
            alt="icon"
          />
        </li>

        {/* Mobile layout menu */}
        <SelectCategory
          navbarButtonMobile={navbarButtonMobile}
          setNavbarButtonMobile={setNavbarButtonMobile}
          leftNav={leftNav}
          setCategorySelected={setCategorySelected}
          responsiveMobile={responsiveMobile}
        />

        {leftNav.map(({ name, to, className, on }) => (
          <NavItems
            key={name}
            className={className}
            navbarName={name}
            to={to}
            on={on}
            setCategorySelected={setCategorySelected}
            responsiveDesktop={responsiveDesktop}
          />
        ))}
      </ul>

      <ul className="flex items-center gap-3">
        <li className="mr-2 cursor-pointer bg-white">
          <div className="" onClick={() => openAsideAccount()}>
            <img src={userIcon} alt="" className="" />
          </div>
        </li>

        {leftRight.map(({ name, to, className }) => (
          <NavItems
            key={name}
            className={className}
            navbarName={name}
            to={to}
            setCategorySelected={setCategorySelected}
          />
        ))}

        <li>
          <div className="mr-2">
            <img
              src={bagCart}
              alt=""
              className="cursor-pointer"
              onClick={() => openAsideCart()}
            />
            <div className="absolute right-2 top-2 flex w-3 justify-center rounded-full bg-white">
              {itemNumber}
            </div>
          </div>
        </li>
      </ul>

      <AccountOptions />
      <AccountSingIn />
    </nav>
  );
}

export default Navbar;
