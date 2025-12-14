import React from 'react';
import { Game } from '../types';

interface MatchCardProps {
  game: Game;
}

const MatchCard: React.FC<MatchCardProps> = ({ game }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const homeTeam = game.home_team;
  const visitorTeam = game.visitor_team;

  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-5">
      <div className="flex items-center justify-between text-xs text-neutral-400 mb-5">
        <span>{formatDate(game.date)}</span>
        <span>{formatTime(game.date)}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex-1 text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-neutral-100 flex items-center justify-center mb-3">
            <span className="text-sm font-bold text-neutral-700">{visitorTeam.abbreviation}</span>
          </div>
          <p className="text-sm font-medium text-neutral-800 mb-0.5">{visitorTeam.name}</p>
          <p className="text-xs text-neutral-400">{visitorTeam.city}</p>
        </div>

        <div className="px-4">
          <span className="text-xs font-medium text-neutral-300">VS</span>
        </div>

        <div className="flex-1 text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-neutral-900 flex items-center justify-center mb-3">
            <span className="text-sm font-bold text-white">{homeTeam.abbreviation}</span>
          </div>
          <p className="text-sm font-medium text-neutral-800 mb-0.5">{homeTeam.name}</p>
          <p className="text-xs text-neutral-400">{homeTeam.city}</p>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-neutral-100 text-center">
        <span className="text-xs text-neutral-400">
          {game.status === 'scheduled' ? 'Scheduled' : game.status}
        </span>
      </div>
    </div>
  );
};

export default MatchCard;
