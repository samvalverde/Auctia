export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
  }
  
  export interface ProductSearchResult {
    products: Product[];
    total: number;
  }
  