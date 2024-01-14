import NavItems from "./NavItems"


// Parte izquierda del navbar
const left = [
  { name: 'Shopi', to: '/', className: 'font-semibold text-xl' },
  { name: 'All', to: '/' },
  { name: 'Clothes', to: '/clothes' },
  { name: 'Electronics', to: '/electronics' },
  { name: 'Furnitures', to: '/furnitures' },
  { name: 'Toys', to: '/toys' },
  { name: 'Others', to: '/others' }
]

// Parte derecha del navbar
const right = [
  { name: 'My Orders', to: '/my-orders', },
  { name: 'My Account', to: '/my-account' },
  { name: 'Sign-in', to: '/sing-in' },
]

function Navbar() {
  return (
    <nav className="bg-white flex justify-between items-center fixed z-10 w-full py-5 px-2 text-base top-0">
      <ul className="flex items-center gap-3">
        {left.map(({name, to, className}) => ( 
          <NavItems key={name} className={className} navbarName={name} to={to}/>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        <li>
        user@gmail.com
        </li>
        {right.map(({name, to, className}) => ( 
          <NavItems key={name} className={className} navbarName={name} to={to}/>
        ))}
        <li>
          💎
        </li>
      </ul>
    </nav>
  )
}

export default Navbar