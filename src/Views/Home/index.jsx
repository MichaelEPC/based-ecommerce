import React from 'react'
import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import Navbar from '../../Components/Navbar'
import { ProductContext } from '../../Context'
import ProductInfo from '../../Components/ProductInfo'


function Home() {
  const {
    productCard,
    setItemNumber,
    itemNumber,
    setinfoProductOpen,
    infoProductOpen,
    setProductInfoFill,
    ProductInfoFill,
    setShoppingProducts,
    shoppingProducts,
    setisOpenShoppingCart,
    isOpenShoppingCart,
  } = React.useContext(ProductContext);

  return (
    <>
    <Navbar itemNumber={itemNumber} setisOpenShoppingCart={setisOpenShoppingCart} setinfoProductOpen={setinfoProductOpen}/>
     <Layout>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {
        productCard?.map( productCard => (
          <Card key={productCard.id} data={productCard} setItemNumber={setItemNumber} itemNumber={itemNumber}
           setinfoProductOpen={setinfoProductOpen} setProductInfoFill={setProductInfoFill} setShoppingProducts={setShoppingProducts}
           shoppingProducts={shoppingProducts} setisOpenShoppingCart={setisOpenShoppingCart}
           />
        ))
      }
      </div>
      <ProductInfo 
      setItemNumber={setItemNumber} itemNumber={itemNumber} infoProductOpen={infoProductOpen} 
      setinfoProductOpen={setinfoProductOpen} ProductInfoFill={ProductInfoFill} setShoppingProducts={setShoppingProducts}
      shoppingProducts={shoppingProducts} setisOpenShoppingCart={setisOpenShoppingCart}
      />
     </Layout>
    </>
  )
}

export default Home