import Layout from "../../Components/Layout"
import { ProductContext } from '../../Context'

function NotFound() {
  const {
    setItemNumber,  
    itemNumber,
    setinfoProductOpen,
    setisOpenShoppingCart,
    setCategorySelected,
    filterProductsByCategory,
    isUserSingIn,
    leftNav,
    leftRight,
  } = React.useContext(ProductContext);
  return (
    <>
      <Navbar itemNumber={itemNumber} setisOpenShoppingCart={setisOpenShoppingCart} setinfoProductOpen={setinfoProductOpen} setCategorySelected={setCategorySelected}
    filterProductsByCategory={filterProductsByCategory} isUserSingIn={isUserSingIn} leftNav={leftNav} leftRight={leftRight}
    />
      <Layout>
        <p>NotFound</p>
      </Layout>
    </>
  )
}
  
  export default NotFound