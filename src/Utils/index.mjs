import React from "react";

//  Add Products Price Cart : Show total Price Of Products On the Shopping Cart 
const sumProductCart = (shoppingProducts) => {
    let totaPrice = 0;
    for (let i = 0; i < shoppingProducts.length; i++) {
        totaPrice = shoppingProducts[i].price + totaPrice;
    }
    totaPrice = totaPrice.toFixed(2);
    return totaPrice;
}

//  Total Products On Cart : Show total Products On the Shopping Cart 
const totalProductCart = (shoppingProducts) => {
    let amountProducts = shoppingProducts.length;
    return amountProducts;
}   

// Update Nav : Makes the nav diferent if the user its have account or not
const updateNav = (isUserSingIn, setLeftNav, setRightNav, currentUser) => {
    React.useEffect(() => {
        setTimeout(() => {
            if (isUserSingIn == 'true') {
                // Left part of nav
                 const left = [
                  { name: 'YourStore', to: '/based-online-product-store/home', className: 'font-semibold text-xl text-white mr-2' },
                  { name: 'All', to: '/based-online-product-store/home', className: 'text-white font-normal', onClick: 'null' },
                  { name: "men's clothing", to: "/based-online-product-store/home/mens-clothing", className: 'text-white font-normal', on: "men's clothing" },
                  { name: "women's clothing", to: "/based-online-product-store/home/womens-clothing",className: 'text-white font-normal', on: "women's "},
                  { name: 'jewelery', to: "/based-online-product-store/home/jewelery", className: 'text-white font-normal', on: "jewelery" },
                  { name: 'electronics', to: "/based-online-product-store/home/electronics", className: 'text-white font-normal', on: "electronics" },
                ]
                // Right part of nav
                const right = [
                { name: currentUser.email, className: 'text-gray-200 cursor-none' },
                { name: 'My Orders', to: '/based-online-product-store/my-orders', className: 'text-white font-normal' },
                { name: 'My Account', to: '/based-online-product-store/my-account', className: 'text-white font-normal' },
                ]
                setLeftNav(left);
                setRightNav(right);
            } if (isUserSingIn == 'false') {
                const left = [
                    { name: 'YourStore', to: '/based-online-product-store/sing-in', className: 'font-semibold text-xl text-white mr-2' },
                    { name: 'All', to: '/based-online-product-store/sing-in', className: 'text-white font-normal', onClick: 'null' },
                    { name: "men's clothing", to: "/based-online-product-store/sing-in", className: 'text-white font-normal', on: "men's clothing" },
                    { name: "women's clothing", to: "/based-online-product-store/sing-in",className: 'text-white font-normal', on: "women's "},
                    { name: 'jewelery', to: "/based-online-product-store/sing-in", className: 'text-white font-normal', on: "jewelery" },
                    { name: 'electronics', to: "/based-online-product-store/sing-in", className: 'text-white font-normal', on: "electronics" },
                  ]
                  // Right part of nav
                  const right = [
                  { name: 'Sign-in', to: '/based-online-product-store/sing-in', className: 'text-white font-normal' },
                  ]
                setLeftNav(left);
                setRightNav(right);
            } if ( isUserSingIn == null) {
                return;
            }  
        }, 2000);
    })
}


export {sumProductCart, totalProductCart, updateNav}