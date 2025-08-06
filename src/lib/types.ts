export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: 'Hot Coffee' | 'Iced Coffee' | 'Desserts';
  sizes: string[];
  featured?: boolean;
};

export type OrderItem = { 
  productId: string; 
  productName: string;
  productImage: string;
  quantity: number; 
  size: string;
  price: number;
};

export type Order = {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: 'Delivered' | 'Processing' | 'Cancelled';
};

export type User = {
  name: string;
  email: string;
  avatar: string;
  loyaltyPoints: number;
};
