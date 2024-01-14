import { useEffect } from "react";

function CallForProducts(setProductCard) {
    const API = 'https://fakestoreapi.com/products';
    useEffect(() => {
      fetch(API)
            .then(res=>res.json())
            .then(data => setProductCard(data))
        }, [])
}

export default CallForProducts