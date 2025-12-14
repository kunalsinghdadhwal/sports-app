import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center py-16">
      <div className="w-6 h-6 border-2 border-neutral-200 border-t-neutral-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
