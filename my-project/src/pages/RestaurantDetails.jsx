import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, IndianRupee, Star } from 'lucide-react';
import { useCartStore } from '../lib/Store';

const MENU_ITEMS = [
  {
    id: '1',
    name: 'Butter Chicken',
    description: 'Creamy, rich and mildly spiced chicken curry',
    price: 320,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500',
    veg: false,
  },
  {
    id: '2',
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese with spices',
    price: 280,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500',
    veg: true,
  },
];

export function RestaurantDetails() {
  const { id } = useParams();
  const addItem = useCartStore((state) => state.addItem);

  const restaurant = {
    id: '1',
    name: 'Sample Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500',
    cuisine: ['North Indian', 'Chinese'],
    rating: 4.3,
    deliveryTime: '30-40 mins',
    priceForTwo: '₹600 for two',
    veg: false,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between pb-8 border-b">
        <div>
          <h1 className="text-3xl font-bold">{restaurant.name}</h1>
          <p className="text-gray-500 mt-1">{restaurant.cuisine.join(', ')}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2 text-sm">
            <Star className="h-5 w-5 text-green-500" />
            <span>{restaurant.rating}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
            <Clock className="h-4 w-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <div className="grid gap-6">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <IndianRupee className="h-4 w-4" />
                  <span>{item.price}</span>
                </div>
              </div>
              <button
                onClick={() =>
                  addItem({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: 1,
                    restaurant: restaurant.name,
                  })
                }
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
