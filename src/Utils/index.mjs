import React from "react";

//  Add Products Price Cart : Show total Price Of Products On the Shopping Cart 
const sumProductCart = (shoppingProducts) => {
    let totalPrice = 0;
    for (let i = 0; i < shoppingProducts.length; i++) {
        totalPrice = shoppingProducts[i].price + totalPrice;
    }
    totalPrice = totalPrice.toFixed(2);
    return totalPrice;
}

//  Add all orders total Price : Show total Price Of all the orders that have been added  
const sumTotalPriceOrder = (MyOrders) => {
    let totalPrice = 0;
    for (const iterator of MyOrders) {
        totalPrice =+ iterator.price + totalPrice;
    }
    totalPrice = totalPrice.toFixed(2);
    return totalPrice;
}

//  Total Products On Cart : Show total Products On the Shopping Cart 
const totalProductCart = (shoppingProducts) => {
    let amountProducts = shoppingProducts.length;
    return amountProducts;
}   

// Update Nav : Makes the nav diferent if the user have an account log in or not
const updateNav = (isUserSingIn, setLeftNav, setRightNav, currentUser) => {
    React.useEffect(() => {
        setTimeout(() => {
            if ( isUserSingIn == null) {
                return;
            }  
            if (isUserSingIn == 'false') {
                const left = [
                    { name: 'All', to: '/based-online-product-store/home', onClick: 'null' },
                    { name: "men's clothing", to: "/based-online-product-store/home/mens-clothing", on: "men's clothing" },
                    { name: "women's clothing", to: "/based-online-product-store/home/womens-clothing", on: "women's "},
                    { name: 'jewelery', to: "/based-online-product-store/home/jewelery", on: "jewelery" },
                    { name: 'electronics', to: "/based-online-product-store/home/electronics", on: "electronics" },
                  ]
                  // Right part of nav
                  const right = [
                  { name: 'Sign-in', to: '/based-online-product-store/sing-in'}
                  ]
                setLeftNav(left);
                setRightNav(right);
                return;
            } if (isUserSingIn == 'true') {
                // Left part of nav
                 const left = [
                  { name: 'All', to: '/based-online-product-store/home', onClick: 'null' },
                  { name: "men's clothing", to: "/based-online-product-store/home/mens-clothing", on: "men's clothing" },
                  { name: "women's clothing", to: "/based-online-product-store/home/womens-clothing", on: "women's "},
                  { name: 'jewelery', to: "/based-online-product-store/home/jewelery", on: "jewelery" },
                  { name: 'electronics', to: "/based-online-product-store/home/electronics", on: "electronics" },
                ]
                // Right part of nav
                const right = [
                { name: 'My Orders', to: '/based-online-product-store/my-orders'},
                ]
                setLeftNav(left);
                setRightNav(right);
                return;
            } 
        }, 2000);
    })
}


export {sumProductCart, totalProductCart, sumTotalPriceOrder, updateNav,}