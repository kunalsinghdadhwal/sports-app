import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-neutral-900">
      <div className="max-w-5xl mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-lg font-semibold tracking-tight">NBA Matches</h1>
          <span className="text-neutral-500 text-xs">balldontlie.io</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
