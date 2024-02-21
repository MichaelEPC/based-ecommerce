import { NavLink } from "react-router-dom";
import './style.css';

function NavItems ({ className, to, navbarName, activeStyle, on, setCategorySelected}) {
  return (
    <li className={className} onClick={() => {
        setCategorySelected(on);
    }}>
      <NavLink to={to} className={
          ({ isActive }) => (isActive ? activeStyle : undefined)
        }>
        <p className="nav-items-text">{navbarName}</p>
      </NavLink>
    </li>
  )
}

export default NavItems