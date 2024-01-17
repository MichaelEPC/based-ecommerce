import { NavLink } from "react-router-dom"


function NavItems ({ className, to, navbarName, activeStyle, on, setCategorySelected}) {
  return (
    <li className={className} onClick={() => {
        setCategorySelected(on);
    }}>
      <NavLink
        to={to}
        className={
          ({ isActive }) => (isActive ? activeStyle : undefined)
        }
      >
        {navbarName}
      </NavLink>
    </li>
  )
}

export default NavItems