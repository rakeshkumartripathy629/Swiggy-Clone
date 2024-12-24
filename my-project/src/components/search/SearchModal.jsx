import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export function SearchModal({ isOpen, onClose, restaurants }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const filtered = restaurants.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
          restaurant.cuisine.some((c) =>
            c.toLowerCase().includes(query.toLowerCase())
          )
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query, restaurants]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl">
        <div className="p-4 border-b flex items-center">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className="flex-1 ml-3 outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button onClick={onClose}>
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-4 space-y-4">
              {results.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="h-16 w-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium">{restaurant.name}</h3>
                    <p className="text-sm text-gray-500">
                      {restaurant.cuisine.join(', ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : query ? (
            <div className="p-8 text-center text-gray-500">
              No results found for "{query}"
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
