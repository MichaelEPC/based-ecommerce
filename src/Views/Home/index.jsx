import React from 'react'
import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import Navbar from '../../Components/Navbar'
import { ProductContext } from '../../Context'
import ProductInfo from '../../Components/ProductInfo'


function Home() {
  const {
    setProductCard,
    productCard,
    CallForProducts,
    setItemNumber,
    itemNumber,
    setinfoProductOpen,
    infoProductOpen,
    setProductInfoFill,
    ProductInfoFill,
  } = React.useContext(ProductContext);

  return (
    <>
    <Navbar itemNumber={itemNumber}/>
     <Layout>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {
        productCard?.map( productCard => (
          <Card key={productCard.id} data={productCard} setItemNumber={setItemNumber} itemNumber={itemNumber}
           setinfoProductOpen={setinfoProductOpen} setProductInfoFill={setProductInfoFill}
           />
        ))
      }
      </div>
      <ProductInfo 
      key={productCard.id} title={productCard.title} image={productCard.image} tagProduct={productCard.category} 
      productPrice={productCard.price} descriptionProduct={productCard.description} setItemNumber={setItemNumber} 
      itemNumber={itemNumber} setinfoProductOpen={setinfoProductOpen}
      />
     </Layout>
    </>
  )
}

export default Home