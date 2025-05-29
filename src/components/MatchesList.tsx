import React, { useState, useEffect, useCallback } from 'react';
import { Game } from '../types';
import { fetchUpcomingGames } from '../services/api';
import MatchCard from './MatchCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import { Search } from 'lucide-react';

const MatchesList: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const loadGames = useCallback(async (page: number) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetchUpcomingGames(page);
      setGames(response.data);
      setTotalPages(response.meta.total_pages);
      setCurrentPage(response.meta.current_page);
    } catch (err) {
      setError('Failed to load upcoming games. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadGames(1);
  }, [loadGames]);

  const filteredGames = games.filter(game => {
    const searchLower = searchTerm.toLowerCase();
    return (
      game.home_team.full_name.toLowerCase().includes(searchLower) ||
      game.visitor_team.full_name.toLowerCase().includes(searchLower) ||
      game.home_team.city.toLowerCase().includes(searchLower) ||
      game.visitor_team.city.toLowerCase().includes(searchLower)
    );
  });

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      loadGames(newPage);
    }
  };

  const handleRetry = () => {
    loadGames(currentPage);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search for a team..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out sm:text-sm"
          />
        </div>
      </div>

      {error && <ErrorMessage message={error} retryFn={handleRetry} />}

      {loading ? (
        <LoadingSpinner />
      ) : filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filteredGames.map(game => (
            <MatchCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No upcoming matches found{searchTerm ? ' for "' + searchTerm + '"' : ''}.</p>
        </div>
      )}

      {!loading && !error && totalPages > 1 && (
        <div className="flex justify-center my-8">
          <nav className="flex items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`mr-2 px-3 py-1 rounded ${
                currentPage === 1 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Previous
            </button>
            <span className="text-sm text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`ml-2 px-3 py-1 rounded ${
                currentPage === totalPages 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MatchesList;