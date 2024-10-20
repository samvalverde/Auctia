export interface InventoryItem {
    productId: string;
    name: string;
    quantity: number;
    price: number;
    category: string;
  }
  
  export interface Inventory {
    id: string;
    distributorId: string;
    items: InventoryItem[];
    createdAt: Date;
    updatedAt: Date;
  }
  