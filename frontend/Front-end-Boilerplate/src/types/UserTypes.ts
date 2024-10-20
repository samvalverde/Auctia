export interface User {
    id: string;
    username: string;
    email: string;
    role: 'admin' | 'distributor' | 'buyer';
  }
  
  export interface Distributor extends User {
    inventoryId: string;
  }
  
  export interface Buyer extends User {
    wishlist: string[];
  }
  