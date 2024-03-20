import { NavLink } from "react-router-dom";
import './style.css';

function NavItems ({ className, to, navbarName, activeStyle, on, setCategorySelected, responsiveDesktop }) {
  return (
    <li className={className + ' ' + responsiveDesktop} onClick={() => {
        setCategorySelected(on)
    }}>
      <NavLink to={to} className={
          ({ isActive }) => (isActive ? activeStyle : undefined)
        }>
        <p className={`nav-items-text text-white font-normal ${className}`} >{navbarName}</p>
      </NavLink>
    </li>
  )
}

export default NavItems