import type { Product, User, Order } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Caramel Macchiato',
    description: 'Rich espresso with steamed milk and vanilla.',
    longDescription: 'Our Caramel Macchiato is a sublime blend of rich, freshly brewed espresso, velvety steamed milk, and a sweet vanilla-flavored syrup, topped with a delightful caramel drizzle. A perfect balance of bold and sweet to kickstart your day or as an afternoon treat.',
    price: 4.75,
    image: 'https://placehold.co/400x400.png',
    category: 'Hot Coffee',
    sizes: ['Small', 'Medium', 'Large'],
    featured: true,
  },
  {
    id: '2',
    name: 'Classic Cold Brew',
    description: 'Smooth, slow-steeped iced coffee.',
    longDescription: 'Experience the ultimate in smooth with our Classic Cold Brew. We slow-steep our custom blend of coffee beans in cold water for 20 hours, resulting in a bold, low-acid coffee with a naturally sweet flavor profile. Served over ice, it’s refreshment perfected.',
    price: 4.25,
    image: 'https://placehold.co/400x400.png',
    category: 'Iced Coffee',
    sizes: ['Small', 'Medium', 'Large'],
  },
  {
    id: '3',
    name: 'Chocolate Croissant',
    description: 'Buttery, flaky, and filled with rich chocolate.',
    longDescription: 'Indulge in a taste of Paris with our Chocolate Croissant. This all-butter, flaky pastry is baked to golden perfection and features two batons of rich, dark chocolate at its center. A truly decadent companion to any of our signature coffees.',
    price: 3.5,
    image: 'https://placehold.co/400x400.png',
    category: 'Desserts',
    sizes: ['One Size'],
    featured: true,
  },
  {
    id: '4',
    name: 'Spiced Pumpkin Latte',
    description: 'Espresso and milk with pumpkin spice flavor.',
    longDescription: 'Embrace the taste of autumn with our Spiced Pumpkin Latte. This seasonal favorite combines our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg, and clove. Topped with whipped cream and real pumpkin pie spices.',
    price: 5.25,
    image: 'https://placehold.co/400x400.png',
    category: 'Hot Coffee',
    sizes: ['Small', 'Medium', 'Large'],
    featured: true,
  },
  {
    id: '5',
    name: 'Standard Espresso',
    description: 'A single shot of our signature house blend.',
    longDescription: 'For the purist, our Standard Espresso is a single, expertly pulled shot of our signature house blend. It features a rich, full-bodied flavor with notes of dark chocolate and a hint of citrus, finished with a thick, persistent crema.',
    price: 2.50,
    image: 'https://placehold.co/400x400.png',
    category: 'Hot Coffee',
    sizes: ['Single', 'Double'],
  },
  {
    id: '6',
    name: 'Iced Vanilla Latte',
    description: 'Cool and creamy with a sweet vanilla finish.',
    longDescription: 'Our Iced Vanilla Latte is a cool, creamy delight. We combine our rich espresso with cold milk and our house-made vanilla syrup, served over ice. It\'s a refreshing and perfectly sweet treat for any time of day.',
    price: 4.95,
    image: 'https://placehold.co/400x400.png',
    category: 'Iced Coffee',
    sizes: ['Small', 'Medium', 'Large'],
  },
  {
    id: '7',
    name: 'Strawberry Cheesecake',
    description: 'Creamy cheesecake with a strawberry swirl.',
    longDescription: 'A slice of heaven, our Strawberry Cheesecake features a rich, creamy cheesecake base on a graham cracker crust, with a beautiful strawberry puree swirl throughout. It\'s the perfect combination of tangy and sweet.',
    price: 5.50,
    image: 'https://placehold.co/400x400.png',
    category: 'Desserts',
    sizes: ['One Slice'],
  },
    {
    id: '8',
    name: 'Iced Matcha Green Tea Latte',
    description: 'Smooth and creamy matcha sweetened just right.',
    longDescription: 'Our Iced Matcha Green Tea Latte is a refreshing beverage made from premium, finely ground Japanese green tea, milk, and a touch of sweetness, served over ice. It offers a smooth, creamy texture and a vibrant, earthy flavor.',
    price: 5.15,
    image: 'https://placehold.co/400x400.png',
    category: 'Iced Coffee',
    sizes: ['Small', 'Medium', 'Large'],
  },
  {
    id: '9',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee and cocoa.',
    longDescription: 'Indulge in the classic Italian Tiramisu. Layers of coffee-soaked ladyfingers and a rich, creamy mascarpone mixture, dusted with cocoa powder. A sophisticated and elegant dessert that melts in your mouth.',
    price: 6.00,
    image: 'https://placehold.co/400x400.png',
    category: 'Desserts',
    sizes: ['One Size'],
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const user: User = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatar: 'https://placehold.co/100x100.png',
  loyaltyPoints: 128,
};

export const orderHistory: Order[] = [
  {
    id: 'ORD-001',
    date: '2023-10-26',
    items: [
      { productId: '1', productName: 'Caramel Macchiato', productImage: 'https://placehold.co/100x100.png', quantity: 1, size: 'Large', price: 4.75 },
      { productId: '3', productName: 'Chocolate Croissant', productImage: 'https://placehold.co/100x100.png', quantity: 1, size: 'One Size', price: 3.50 },
    ],
    total: 8.25,
    status: 'Delivered',
  },
  {
    id: 'ORD-002',
    date: '2023-10-20',
    items: [
      { productId: '2', productName: 'Classic Cold Brew', productImage: 'https://placehold.co/100x100.png', quantity: 2, size: 'Medium', price: 4.25 },
    ],
    total: 8.50,
    status: 'Delivered',
  },
  {
    id: 'ORD-003',
    date: '2023-09-15',
    items: [
      { productId: '4', productName: 'Spiced Pumpkin Latte', productImage: 'https://placehold.co/100x100.png', quantity: 1, size: 'Medium', price: 5.25 },
    ],
    total: 5.25,
    status: 'Cancelled',
  },
];

export const favorites: Product[] = products.filter(p => ['2','4','7'].includes(p.id));

export const orderHistoryString = orderHistory.map(order => 
    `Order ID ${order.id} on ${order.date}: ` + 
    order.items.map(item => `${item.quantity}x ${item.size} ${item.productName}`).join(', ')
).join('; ');
