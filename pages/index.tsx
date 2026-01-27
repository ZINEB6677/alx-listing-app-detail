// pages/index.tsx
import React from 'react';

const properties = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    price: 3200,
    rating: 4.89,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227"
  },
  {
    id: 2,
    name: "Mountain Cabin",
    price: 450,
    rating: 4.95,
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c"
  },
  {
    id: 3,
    name: "Beachfront Paradise",
    price: 2800,
    rating: 4.78,
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206"
  }
];

const filters = ["Top Villa", "Self Check-in", "Amazing Views", "Luxury"];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945")'}}
      >
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="p-4 bg-gray-100">
        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <button 
              key={filter}
              className="px-4 py-2 bg-white rounded-full hover:bg-gray-200"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Properties */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Featured Properties</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {properties.map((property) => (
            <div key={property.id} className="border rounded-lg overflow-hidden">
              {/* صورة الخلفية للعقار */}
              <div 
                className="h-48 bg-cover bg-center"
                style={{backgroundImage: `url(${property.image})`}}
              />
              
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">{property.name}</h3>
                  <span className="text-yellow-500">⭐ {property.rating}</span>
                </div>
                
                <p className="text-blue-600 font-bold mt-2">
                  ${property.price} / night
                </p>
                
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}