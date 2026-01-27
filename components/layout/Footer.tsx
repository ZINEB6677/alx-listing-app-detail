// components/layout/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* معلومات الشركة */}
          <div>
            <h2 className="text-2xl font-bold mb-4">🏠 StayFinder</h2>
            <p className="text-gray-300">
              Find your perfect accommodation anywhere in the world.
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Properties</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* اتصل بنا */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">Email: info@stayfinder.com</p>
            <p className="text-gray-300">Phone: +1 234 567 890</p>
          </div>

        </div>
        
        {/* حقوق النشر */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} StayFinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;