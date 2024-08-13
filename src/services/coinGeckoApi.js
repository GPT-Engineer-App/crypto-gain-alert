import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchTopGainers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 250,
        page: 1,
        sparkline: false,
        price_change_percentage: '24h'
      }
    });
    return response.data.filter(coin => coin.price_change_percentage_24h > 5)
      .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
  } catch (error) {
    console.error('Error fetching top gainers:', error);
    throw error;
  }
};