import { useEffect } from "react";

function CallForProducts(setProductCard) {
    const API = 'https://api.escuelajs.co/api/v1/products';
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(`${API}/products`)
              const data = await response.json();
              setProductCard(data);
            } catch (error) {
              console.error(`Oh no, ocurrió un error: ${error}`);
            }
          }
          fetchData()
        }, [])
}

export default CallForProducts