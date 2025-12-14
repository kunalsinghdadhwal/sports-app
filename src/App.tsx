import React from 'react';
import Header from './components/Header';
import MatchesList from './components/MatchesList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header />
      <main className="flex-grow py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Upcoming Matches</h2>
            <p className="text-neutral-500 text-sm">
              NBA games scheduled for the next 30 days
            </p>
          </div>
          <MatchesList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
