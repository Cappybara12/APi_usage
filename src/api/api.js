// src/api.js
const API_URL = 'https://api.tvmaze.com';

export const fetchShows = async () => {
    try {
        const response = await fetch(`${API_URL}/search/shows?q=all`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching shows:', error);
        throw error;
    }
};

export const fetchShowDetails = async (showId) => {
    try {
        const response = await fetch(`${API_URL}/shows/${showId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching details for show with ID ${showId}:`, error);
        throw error;
    }
};
