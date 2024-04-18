import React from "react";

function KeepProductsInCart(currentUser) {
  const [shoppingProducts, setShoppingProducts] = React.useState([]);

  let newCurrentUser = currentUser;
  newCurrentUser = JSON.parse(newCurrentUser);
  let shoppingCart;
  if (newCurrentUser === null || newCurrentUser === undefined) {
    shoppingCart = [];
  } else {
    shoppingCart = currentUser.onCart;
  }

  React.useEffect(() => {
    setTimeout(() => {
      if (!shoppingCart) {
        try {
          setShoppingProducts([]);
          return;
        } catch (error) {
          alert(error);
        }
      } else {
        try {
          setShoppingProducts(shoppingCart);
          return;
        } catch (error) {
          alert(error);
        }
      }
    }, 2000);
  });

  const updateShoppingProducts = (products) => {
    setShoppingProducts(products);
  };

  return { shoppingProducts, updateShoppingProducts };
}

export { KeepProductsInCart };
