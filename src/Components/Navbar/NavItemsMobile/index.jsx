import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../../../Context';

function NavItemsMobile({ to, navbarName, activeStyle, on, setCategorySelected, responsiveMobile }) {
    const {
        navbarButtonMobile,
        setNavbarButtonMobile,
    } = React.useContext(ProductContext);

    const closeMenu = () => {
        setTimeout(() => {
            setNavbarButtonMobile(false);
        }, 350);
    }

    return (
        <>
        <li className={`${navbarButtonMobile ? responsiveMobile : 'hidden'}`} onClick={() => {
            setCategorySelected(on) 
            closeMenu()
            }}>

        <NavLink to={to}>
            <p className='nav-items-text-mobile font-bold '>{navbarName}</p>
        </NavLink>

        </li>
        </>
    )
}

export default NavItemsMobile