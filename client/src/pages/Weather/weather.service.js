import axios from 'axios';

const isLocal = ['localhost'].includes(window.location.hostname);

const baseUrl = `${isLocal ? "https://localhost:7127/Cities" : "https://localhost:7127/Cities"}`;

const baseSettings = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    dataType: 'json'
};

const get = (url) => axios(url,baseSettings);

export const getCities = (cityText) => {
  const data = get(`${baseUrl}/GetCities?textToSearch=${cityText}`);
  return data;
} 

export const getCurrentWeather = (locationKey) => {   
  const data = get(`${baseUrl}/GetCurrentWeather?locationKey=${locationKey}`);
  return data;
} 

export const getFavoritesCount = () => {   
  const data = get(`${baseUrl}/GetFavoritesCount`);
  return data;
} 

export const getUserFavorites = (userId) => {   
  const data = get(`${baseUrl}/GetUserFavorites?userId=${userId}`);
  return data;
} 

export const addCityToFavorites = (userId,cityId) => {   
  const data = get(`${baseUrl}/AddCityToFavorites?userId=${userId}&cityId=${cityId}`);
  return data;
} 

