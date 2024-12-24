import React, { useState } from 'react';
import { RestaurantGrid } from '../components/resturant/RestaurantGrid';
import { topRestaurants, allRestaurants } from '../data/restaurants';
import { CitySelector } from '../components/location/CitySelector';
import { TopRestaurantSlider } from '../components/resturant/TopRestaurantSlider';
import { CategoryScroll } from '../components/food/CategoryScroll';
import { FaArrowRight } from 'react-icons/fa';
import { categoriesData } from '../data/CayegoryDats';

const Home = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  // Filter restaurants based on the selected city
  const filteredTopRestaurants = selectedCity
    ? topRestaurants.filter((restaurant) => restaurant.city === selectedCity)
    : topRestaurants;

  const filteredAllRestaurants = selectedCity
    ? allRestaurants.filter((restaurant) => restaurant.city === selectedCity)
    : allRestaurants;

  return (
    <div className="container mx-auto px-4">
      {/* Category Scroll */}
      <CategoryScroll title="Browse Categories" categories={categoriesData} />

      {/* City Selector Box */}
      <div className="relative my-6 flex items-center justify-center">
        <div className="border border-gray-300 rounded-md p-2 px-4 shadow-sm bg-white">
          <CitySelector selectedCity={selectedCity} onCityChange={handleCityChange} />
        </div>
      </div>

      {/* Top Restaurants Section */}
      <div className="relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Top Restaurants</h2>
          <button className="absolute top-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            <FaArrowRight className="text-gray-500 text-lg" />
          </button>
        </div>
        <TopRestaurantSlider restaurants={filteredTopRestaurants} />
      </div>

      {/* All Restaurants Grid */}
      <RestaurantGrid
        title="All Restaurants"
        restaurants={filteredAllRestaurants}
        location={selectedCity}
      />
    </div>
  );
};

export default Home;
