import { GamesResponse } from '../types';

const API_BASE_URL = 'https://api.balldontlie.io/v1';

export async function fetchUpcomingGames(page = 1, perPage = 10): Promise<GamesResponse> {
  // Get current date in YYYY-MM-DD format
  const today = '2025-01-01'
  
  // Get date 30 days from now
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 30);
  const futureDateStr = futureDate.toISOString().split('T')[0];
  
  const url = `${API_BASE_URL}/games?start_date=${today}&end_date=${futureDateStr}&page=${page}&per_page=${perPage}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': '95c3fcd0-a36a-4f4c-9360-089c47e3c105'
      }
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching upcoming games:', error);
    throw error;
  }
}