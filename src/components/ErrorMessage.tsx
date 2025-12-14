import React from 'react';

interface ErrorMessageProps {
  message: string;
  retryFn?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, retryFn }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
      <p className="text-sm text-red-700 mb-3">{message}</p>
      {retryFn && (
        <button
          onClick={retryFn}
          className="text-sm font-medium text-red-700 underline underline-offset-2"
        >
          Try again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
