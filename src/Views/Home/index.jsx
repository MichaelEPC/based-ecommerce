import React from 'react'
import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import Navbar from '../../Components/Navbar'
import { ProductContext, ProductProvider } from '../../Context'
import CallForProducts from '../../Hooks/CallForProducts'


function Home() {
  const {
    setProductCard,
    productCard,
    CallForProducts,
  } = React.useContext(ProductContext);
  console.log(productCard);
  return (
    <>
    <Navbar/>
     <Layout>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {
        productCard?.map( productCard => (
          <Card key={productCard.id} data={productCard}/>
        ))
      }
      </div>
     </Layout>
    </>
  )
}

export default Home