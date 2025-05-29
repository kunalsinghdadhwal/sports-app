import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  retryFn?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, retryFn }) => {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded shadow-sm">
      <div className="flex items-center">
        <div className="flex-shrink-0 text-red-500">
          <AlertCircle size={24} />
        </div>
        <div className="ml-3">
          <p className="text-sm text-red-700">{message}</p>
          {retryFn && (
            <button
              onClick={retryFn}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;