import React from 'react';
import { ShoppingBasket as Basketball } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Basketball size={28} className="text-orange-500 mr-2" />
            <h1 className="text-xl font-bold">NBA Upcoming Matches</h1>
          </div>
          <div className="text-sm text-blue-200">
            Powered by BallDontLie API
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;