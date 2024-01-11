import { NavLink } from "react-router-dom"


function NavItems ({ className, to, navbarName, activeStyle }) {
  return (
    <li className={className}>
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