import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {currentYear} NBA Upcoming Matches. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Data provided by BallDontLie API. Not affiliated with the NBA.
            </p>
          </div>
          <div className="flex items-center">
            <a 
              href="https://github.com" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.balldontlie.io/home.html" 
              className="ml-4 text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              API Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;