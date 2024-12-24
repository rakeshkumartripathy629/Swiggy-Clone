import React, { useState } from "react";
import { RestaurantCard } from "./RestaurantCard";

const RestaurantSearch = ({ restaurants }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Search input state
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants); // State for filtered restaurants

  // Handle Search Input Change
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase(); // Convert to lowercase for case-insensitive search
    setSearchQuery(query);

    // Filter restaurants based on name, cuisine, or city
    const results = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query) ||
      restaurant.city.toLowerCase().includes(query) ||
      restaurant.cuisine.some((cuisine) =>
        cuisine.toLowerCase().includes(query)
      )
    );

    setFilteredRestaurants(results);
  };

  return (
    <div>
      {/* Search Bar */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search restaurants by name, cuisine, or city..."
        className="mb-4 p-2 w-full border border-gray-300 rounded"
      />

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>

      {/* No Restaurants Found */}
      {filteredRestaurants.length === 0 && (
        <p className="text-center text-gray-500">No restaurants found.</p>
      )}
    </div>
  );
};

export default RestaurantSearch;
