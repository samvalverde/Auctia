import { useState } from 'react';
import ProductSearchService from '../services/ProductSearchService';

const useProductSearch = () => {
  const [results, setResults] = useState<any[]>([]);

  const searchProducts = async (query: string) => {
    const searchResults = await ProductSearchService.searchProducts(query);
    setResults(searchResults);
  };

  return {
    results,
    searchProducts,
  };
};

export default useProductSearch;
