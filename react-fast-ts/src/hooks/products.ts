import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { IProduct } from '../models';

export function useProducts() {
  const [products, setProduct] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  function addProducts(product: IProduct) {
    setProduct(prev => [...prev, product]);
  }

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const respomse = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
      setProduct(respomse.data);
      setIsLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return {products, isLoading, error, addProducts};
}