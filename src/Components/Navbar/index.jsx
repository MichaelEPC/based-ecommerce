import NavItems from "./NavItems"
import bagCart from '../../imgs/bolso-shopping-cuadrado-con-asa-sm.png';

// Left part of nav
const left = [
  { name: 'YourStore', to: '/based-online-product-store/', className: 'font-semibold text-xl text-white mr-2' },
  { name: 'All', to: '/based-online-product-store/', className: 'text-white font-normal', onClick: 'null' },
  { name: "men's clothing", to: "/mens-clothing", className: 'text-white font-normal', on: "men's clothing" },
  { name: "women's clothing", to: "/womens-clothing",className: 'text-white font-normal', on: "women's "},
  { name: 'jewelery', to: "/jewelery", className: 'text-white font-normal', on: "jewelery" },
  { name: 'electronics', to: "/electronics", className: 'text-white font-normal', on: "electronics" },
]

// Right part of nav
const right = [
  { name: 'user@gmail.com', className: 'text-gray-200 cursor-none' },
  { name: 'My Orders', to: '/my-orders', className: 'text-white font-normal' },
  { name: 'My Account', to: '/my-account', className: 'text-white font-normal' },
  { name: 'Sign-in', to: '/sing-in', className: 'text-white font-normal' },
]

function Navbar({ itemNumber, setisOpenShoppingCart, setinfoProductOpen, setCategorySelected }) {

  // Open Cart View : Open aside cart with products in it
  const openAsideCart = () => {
    setisOpenShoppingCart(true);
    setinfoProductOpen(false);
  }

  return (
    <nav className="bg-green-500 flex justify-between items-center fixed z-10 w-full py-5 px-2 text-base top-0">
      <ul className="flex items-center gap-3 ">
        {left.map(({name, to, className, on}) => ( 
          <NavItems key={ name } className={ className } navbarName={ name } to={ to } on={on} setCategorySelected={setCategorySelected}/>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        {right.map(({name, to, className}) => ( 
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