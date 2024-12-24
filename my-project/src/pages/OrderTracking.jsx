import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle2, Clock, Bike } from 'lucide-react';

const STAGES = [
  { id: 1, title: 'Order Confirmed', icon: CheckCircle2 },
  { id: 2, title: 'Preparing Your Food', icon: Clock },
  { id: 3, title: 'Out for Delivery', icon: Bike },
  { id: 4, title: 'Delivered', icon: CheckCircle2 },
];

export function OrderTracking() {
  const { orderId } = useParams();
  const [currentStage, setCurrentStage] = useState(1);

  useEffect(() => {
    // Simulate order progress
    const interval = setInterval(() => {
      setCurrentStage((stage) => (stage < 4 ? stage + 1 : stage));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Tracking Order #{orderId}</h1>
        <p className="text-gray-500">Estimated delivery time: 35-40 minutes</p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gray-200" />
        <div className="space-y-8">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            const isActive = stage.id <= currentStage;
            return (
              <div key={stage.id} className="relative flex items-center">
                <div className="flex-1 mr-4 text-right">
                  <h3 className={`font-medium ${isActive ? 'text-green-600' : 'text-gray-500'}`}>
                    {stage.title}
                  </h3>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isActive ? 'bg-green-600' : 'bg-gray-200'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                </div>
                <div className="flex-1 ml-4" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
