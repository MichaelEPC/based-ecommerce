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


export {sumProductCart, totalProductCart}