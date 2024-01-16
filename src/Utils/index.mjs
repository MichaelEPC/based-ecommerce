
const sumProductCart = (shoppingProducts) => {
    let totaPrice = 0;
    for (let i = 0; i < shoppingProducts.length; i++) {
        totaPrice = shoppingProducts[i].price + totaPrice;
    }
    totaPrice = totaPrice.toFixed(2);
    return totaPrice;
}

const totalProductCart = (shoppingProducts) => {
    let amountProducts = shoppingProducts.length;
    return amountProducts;
}   

export {sumProductCart, totalProductCart}