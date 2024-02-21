import React from 'react';
import Card from '../../Components/Card';
import { ProductContext } from '../../Context';
import Layout from '../../Components/Layout';
import Navbar from '../../Components/Navbar';
import ProductInfo from '../../Components/ProductInfo';
import NotFoundProduct from '../../Components/NotFoundProduct';
import './style.css';

function Home() {
  const {
    setItemNumber,  
    itemNumber,
    setinfoProductOpen,
    infoProductOpen,
    setProductInfoFill,
    ProductInfoFill,
    setShoppingProducts,
    shoppingProducts,
    setisOpenShoppingCart,
    setSearchProducts,
    filterProducts,
    setCategorySelected,
    filterProductsByCategory,
    isUserSingIn,
    leftNav,
    leftRight,
    currentUser,
  } = React.useContext(ProductContext);

  return (
    <>
    <Navbar itemNumber={itemNumber} setisOpenShoppingCart={setisOpenShoppingCart} setinfoProductOpen={setinfoProductOpen} setCategorySelected={setCategorySelected}
    filterProductsByCategory={filterProductsByCategory} isUserSingIn={isUserSingIn} leftNav={leftNav} leftRight={leftRight}
    />
     <Layout>
        <div className='div-search-input flex-col justify-center items-center'>
          <p className='font-semibold text-center mb-1 '>Find products</p>
          <input type="text" placeholder='"Shirt" "Laptop" "Clothes"' className='input-search-products pl-2 font-light focus:outline-green-500' 
          onChange={(event) => {
            setSearchProducts(event.target.value);
          }}/>
        </div>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {
        filterProducts.length > 0 && <NotFoundProduct/>
        && filterProducts?.map( productCard => (
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