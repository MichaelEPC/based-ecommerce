import React from "react";
import "./style.css";
import { ProductContext } from "../../Context";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import Navbar from "../../Components/Navbar";
import ProductInfo from "../../Components/ProductInfo";
import SkeletonCardsProducts from "../../Components/Skeletons/SkeletonCardsProducts";

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
    loadingSkeletonCard,
  } = React.useContext(ProductContext);

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      <Navbar />
      <Layout>
        <div className="div-search-input flex-col items-center justify-center">
          <p className="mb-1 text-center font-semibold ">Find products</p>
          <input
            type="text"
            placeholder='"Shirt" "Laptop" "Clothes"'
            className="input-search-products pl-2 font-light focus:outline-green-500"
            onChange={(event) => {
              setSearchProducts(event.target.value);
            }}
          />
        </div>

        <div className="main-grid-products ml-8 mr-4">
          {loadingSkeletonCard &&
            items?.map((item) => <SkeletonCardsProducts key={item} />)}
          {!loadingSkeletonCard &&
            filterProducts?.map((productCard) => (
              <Card
                key={productCard.id}
                products={productCard}
                setItemNumber={setItemNumber}
                itemNumber={itemNumber}
                setinfoProductOpen={setinfoProductOpen}
                setProductInfoFill={setProductInfoFill}
                setShoppingProducts={setShoppingProducts}
                shoppingProducts={shoppingProducts}
                setisOpenShoppingCart={setisOpenShoppingCart}
              />
            ))}
        </div>

        <ProductInfo
          setItemNumber={setItemNumber}
          itemNumber={itemNumber}
          infoProductOpen={infoProductOpen}
          setinfoProductOpen={setinfoProductOpen}
          ProductInfoFill={ProductInfoFill}
          setShoppingProducts={setShoppingProducts}
          shoppingProducts={shoppingProducts}
          setisOpenShoppingCart={setisOpenShoppingCart}
        />
      </Layout>
    </>
  );
}

export default Home;
