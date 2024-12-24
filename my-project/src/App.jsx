import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import { RestaurantDetails } from './pages/RestaurantDetails';
import { Cart } from './pages/Cart';
import { OrderTracking } from './pages/OrderTracking';
import { RestaurantRegistration } from './pages/RestaurantRegistration';
import { DeliveryPartnerRegistration } from './pages/DeliveryPartnerRegistration';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<RestaurantDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/track/:orderId" element={<OrderTracking />} />
            <Route path="/partner/restaurant" element={<RestaurantRegistration />} />
            <Route path="/partner/delivery" element={<DeliveryPartnerRegistration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;