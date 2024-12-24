// import React from 'react';
// import { RestaurantCard } from './RestaurantCard';

// export function RestaurantGrid({ title, restaurants }) {
//   return (
//     <div className="flex flex-col items-center py-8">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h2>
//       <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl">
//         {restaurants.map((restaurant) => (
//           <RestaurantCard key={restaurant.id} {...restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { RestaurantCard } from './RestaurantCard';

export function RestaurantGrid({ title, restaurants, location }) {
  const filteredRestaurants = location
    ? restaurants.filter((restaurant) => restaurant.location === location)
    : restaurants;

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
}
