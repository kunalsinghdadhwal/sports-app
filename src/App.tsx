import React from 'react';
import Header from './components/Header';
import MatchesList from './components/MatchesList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Upcoming Basketball Matches</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Stay up to date with the latest NBA games scheduled over the next 30 days.
            Filter by team name to find specific matchups.
          </p>
          
          <MatchesList />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;