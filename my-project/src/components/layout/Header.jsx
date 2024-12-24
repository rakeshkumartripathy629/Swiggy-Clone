// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Search, ShoppingCart, HelpCircle, User } from 'lucide-react';
// import { CitySelector } from '../location/CitySelector';

// export function Header() {
//   const [selectedCity, setSelectedCity] = useState('mumbai');

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center">
//               <img src="https://banner2.cleanpng.com/20180616/afx/aa61p7yn1.webp" alt="Swiggy" className="h-8 w-auto" />
//             </Link>
//             <div className="ml-4 border-l border-gray-200 pl-4">
//               <CitySelector selectedCity={selectedCity} onCityChange={setSelectedCity} />
//             </div>
//           </div>
          
//           <nav className="flex items-center space-x-8">
//             <Link to="/partner/restaurant" className="text-gray-700 hover:text-orange-500">
//               Add Restaurant
//             </Link>
            
//             <Link to="/partner/delivery" className="text-gray-700 hover:text-orange-500">
//               Become a Partner
//             </Link>
            
//             <button className="flex items-center text-gray-700 hover:text-orange-500">
//               <Search className="h-5 w-5 mr-2" />
//               <span>Search</span>
//             </button>
            
//             <button className="flex items-center text-gray-700 hover:text-orange-500">
//               <HelpCircle className="h-5 w-5 mr-2" />
//               <span>Help</span>
//             </button>
            
//             <button className="flex items-center text-gray-700 hover:text-orange-500">
//               <User className="h-5 w-5 mr-2" />
//               <span>Sign In</span>
//             </button>
            
//             <Link to="/cart" className="flex items-center text-gray-700 hover:text-orange-500">
//               <ShoppingCart className="h-5 w-5 mr-2" />
//               <span>Cart</span>
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, HelpCircle, User } from 'lucide-react';
import { CitySelector } from '../location/CitySelector';

export function Header({ onCityChange }) {
  const [selectedCity, setSelectedCity] = useState('mumbai');

  const handleCityChange = (city) => {
    setSelectedCity(city);
    if (onCityChange) {
      onCityChange(city); // Notify parent component about the city change
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://banner2.cleanpng.com/20180616/afx/aa61p7yn1.webp"
                alt="Swiggy"
                className="h-8 w-auto"
              />
            </Link>
            <div className="ml-4 border-l border-gray-200 pl-4">
              <CitySelector selectedCity={selectedCity} onCityChange={handleCityChange} />
            </div>
          </div>

          <nav className="flex items-center space-x-8">
            <Link to="/partner/restaurant" className="text-gray-700 hover:text-orange-500">
              Add Restaurant
            </Link>

            <Link to="/partner/delivery" className="text-gray-700 hover:text-orange-500">
              Become a Partner
            </Link>

            <button className="flex items-center text-gray-700 hover:text-orange-500">
              <Search className="h-5 w-5 mr-2" />
              <span>Search</span>
            </button>

            <button className="flex items-center text-gray-700 hover:text-orange-500">
              <HelpCircle className="h-5 w-5 mr-2" />
              <span>Help</span>
            </button>

            <button className="flex items-center text-gray-700 hover:text-orange-500">
              <User className="h-5 w-5 mr-2" />
              <span>Sign In</span>
            </button>

            <Link to="/cart" className="flex items-center text-gray-700 hover:text-orange-500">
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span>Cart</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
