import React, { useState, useEffect } from 'react';

function CallForProducts(setLoadingSkeletonCard) {
  const [productCard, setProductCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track potential errors

  const API = 'https://fakestoreapi.com/products';

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(API);
          if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
          }
          const data = await response.json();
          setProductCard(data);
        } catch (err) {
          console.error('Error fetching products:', err);
          setError(err); 
        } finally {
          setIsLoading(false);
          setLoadingSkeletonCard(false); 
        }
      };
      fetchData();
    }, 1000);
    
  }, []); 
  return {productCard, setProductCard};
}

export default CallForProducts