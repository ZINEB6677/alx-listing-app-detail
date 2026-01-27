// components/layout/Header.tsx
import React from 'react';
import { Search, User, Menu } from 'lucide-react';

const Header = () => {
  const accommodationTypes = [
    'Rooms', 'Mansion', 'Countryside', 'Beach', 'City', 'Mountain', 
    'Camping', 'Luxury', 'Budget', 'Family'
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        {/* الصف العلوي: الشعار والبحث */}
        <div className="flex items-center justify-between">
          {/* الشعار */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">StayFinder</div>
          </div>

          {/* شريط البحث */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search destinations, properties, or experiences..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* زر القائمة للجوال */}
          <div className="md:hidden">
            <button className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* أزرار المستخدم */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-medium">
              Sign Up
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* أنواع الإقامة */}
        <div className="mt-4 overflow-x-auto">
          <div className="flex space-x-6">
            {accommodationTypes.map((type) => (
              <button
                key={type}
                className="flex-shrink-0 text-gray-600 hover:text-blue-600 font-medium"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;