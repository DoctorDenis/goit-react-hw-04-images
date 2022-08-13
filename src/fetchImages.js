export function fetchImages(query, page) {
  const API_KEY = '28051329-87464e49acaa9530f56c764e9';
  const IMAGE_TYPE = 'photo';
  const ORIENTATION = 'horizontal';
  const SAFE_SEARCH = true;
  const PER_PAGE = 12;

  const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&image_type=${IMAGE_TYPE}&safesearch=${SAFE_SEARCH}&orientation=${ORIENTATION}&per_page=${PER_PAGE}&q=${query}&page=${page}`;

  return fetch(BASE_URL).then(async response => {
    if (!response.ok) {
      return Promise.reject(new Error('Something went wrong!'));
    }
    return await response.json();
  });
}
