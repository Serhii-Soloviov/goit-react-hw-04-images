import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '33225264-b8aeda082b0ec3b834ba47e4c';
const PER_PAGE = 12;

export async function fetchImg(query, page = 1) {
  const response = await axios.get('', {
    params: {
      q: query,
      page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: PER_PAGE,
    },
  });
  return response;
}
