import NavItems from "./NavItems"


// Parte izquierda del navbar
const left = [
  { name: 'YourStore', to: '/', className: 'font-semibold text-xl text-white mr-2' },
  { name: 'All', to: '/', className: 'text-white font-normal' },
  { name: 'Clothes', to: '/clothes', className: 'text-white font-normal' },
  { name: 'Electronics', to: '/electronics',className: 'text-white font-normal' },
  { name: 'Furnitures', to: '/furnitures', className: 'text-white font-normal' },
  { name: 'Toys', to: '/toys', className: 'text-white font-normal' },
{ name: 'Others', to: '/others', className: 'text-white font-normal' }
]

// Parte derecha del navbar
const right = [
  { name: 'user@gmail.com', className: 'text-gray-200 cursor-none' },
  { name: 'My Orders', to: '/my-orders', className: 'text-white font-normal' },
  { name: 'My Account', to: '/my-account', className: 'text-white font-normal' },
  { name: 'Sign-in', to: '/sing-in', className: 'text-white font-normal' },
]

function Navbar({ itemNumber, setisOpenShoppingCart, setinfoProductOpen }) {

  // Open Cart View : Open aside cart with products in it
  const openAsideCart = () => {
    setisOpenShoppingCart(true);
    setinfoProductOpen(false);
  }

  return (
    <nav className="bg-green-500 flex justify-between items-center fixed z-10 w-full py-5 px-2 text-base top-0">
      <ul className="flex items-center gap-3 ">
        {left.map(({name, to, className}) => ( 
          <NavItems key={ name } className={ className } navbarName={ name } to={ to }/>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        {right.map(({name, to, className}) => ( 
          <NavItems key={ name } className={ className } navbarName={ name } to={ to }/>
        ))}
        <li>
          <div className="">
          <img src="src/imgs/bolso-shopping-cuadrado-con-asa-sm.png" alt="" className="cursor-pointer"
          onClick={() => openAsideCart()}/>
          <div className="bg-white flex justify-center absolute rounded-full w-3 top-2 right-0">{ itemNumber }</div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar