import React, { useState, useEffect, useCallback } from 'react';
import { Game } from '../types';
import { fetchUpcomingGames } from '../services/api';
import MatchCard from './MatchCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

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
      setError('Unable to load games. Please try again.');
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
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search teams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-sm px-4 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400"
        />
      </div>

      {error && <ErrorMessage message={error} retryFn={handleRetry} />}

      {loading ? (
        <LoadingSpinner />
      ) : filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredGames.map(game => (
            <MatchCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-neutral-400 text-sm">
            {searchTerm ? `No matches found for "${searchTerm}"` : 'No upcoming matches'}
          </p>
        </div>
      )}

      {!loading && !error && totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 text-sm rounded-lg ${
              currentPage === 1
                ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                : 'bg-neutral-900 text-white'
            }`}
          >
            Previous
          </button>
          <span className="text-sm text-neutral-500 tabular-nums">
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 text-sm rounded-lg ${
              currentPage === totalPages
                ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                : 'bg-neutral-900 text-white'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MatchesList;
