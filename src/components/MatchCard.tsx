import React from 'react';
import { Game } from '../types';
import { Calendar, Clock } from 'lucide-react';

interface MatchCardProps {
  game: Game;
}

const MatchCard: React.FC<MatchCardProps> = ({ game }) => {
  // Format date to a readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Format time from ISO datetime string
  const formatTimeFromISO = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Get team abbreviation and full name
  const getTeamDisplay = (team: Game['home_team']) => {
    return {
      abbr: team.abbreviation,
      name: team.full_name
    };
  };

  const homeTeam = getTeamDisplay(game.home_team);
  const visitorTeam = getTeamDisplay(game.visitor_team);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:translate-y-[-2px]">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center text-gray-600">
            <Calendar size={16} className="mr-1" />
            <span className="text-sm">{formatDate(game.date)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">{formatTimeFromISO(game.date)}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          {/* Away Team */}
          <div className="flex flex-col items-center text-center w-2/5">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-700">
              {visitorTeam.abbr}
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-800">{visitorTeam.name}</h3>
            <p className="text-xs text-gray-600">Away</p>
          </div>
          
          {/* VS */}
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-orange-500">VS</span>
            <span className="mt-1 text-xs text-gray-500">
              {game.status === 'scheduled' ? 'Upcoming' : game.status}
            </span>
          </div>
          
          {/* Home Team */}
          <div className="flex flex-col items-center text-center w-2/5">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-lg font-bold text-blue-800">
              {homeTeam.abbr}
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-800">{homeTeam.name}</h3>
            <p className="text-xs text-gray-600">Home</p>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            {homeTeam.name} Arena • {game.home_team.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
