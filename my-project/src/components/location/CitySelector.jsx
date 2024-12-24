import React from 'react';
import { MapPin } from 'lucide-react';

const CITIES = [
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra' },
  { id: 'delhi', name: 'Delhi', state: 'Delhi' },
  { id: 'bangalore', name: 'Bangalore', state: 'Karnataka' },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana' },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu' },
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal' },
];

export function CitySelector({ selectedCity, onCityChange }) {
  return (
    <div className="relative">
      <div className="flex items-center space-x-2 cursor-pointer">
        <MapPin className="h-5 w-5 text-orange-500" />
        <select
          value={selectedCity}
          onChange={(e) => onCityChange(e.target.value)}
          className="appearance-none bg-transparent border-none font-medium focus:outline-none focus:ring-0"
        >
          {CITIES.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}, {city.state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}