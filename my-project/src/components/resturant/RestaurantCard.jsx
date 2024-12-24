import React from 'react';
import { Clock, IndianRupee, Leaf, MapPin } from 'lucide-react'; // Import MapPin for location icon

export function RestaurantCard({
  image,
  name,
  cuisine,
  rating,
  deliveryTime,
  offer,
  priceForTwo,
  promoted,
  veg,
  city, // Add location prop
}) {
  return (
    <div className="group cursor-pointer h-full">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover rounded-t-lg"
        />
        {promoted && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 text-xs rounded">
            PROMOTED
          </div>
        )}
        {offer && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4">
            <p className="text-white text-sm font-medium">{offer}</p>
          </div>
        )}
      </div>
      <div className="p-4 border border-t-0 rounded-b-lg bg-white h-[calc(100%-12rem)]">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-medium text-gray-900 truncate flex-1">
            {name}
          </h3>
          {veg && <Leaf className="h-5 w-5 text-green-600 flex-shrink-0" />}
        </div>
        <p className="mt-1 text-sm text-gray-500 truncate">{cuisine.join(', ')}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              ★ {rating}
            </span>
            <span className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {deliveryTime}
            </span>
          </div>
          <span className="flex items-center text-sm text-gray-500">
            <IndianRupee className="h-4 w-4 mr-1" />
            {priceForTwo}
          </span>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          {city} {/* Display location */}
        </div>
      </div>
    </div>
  );
}
