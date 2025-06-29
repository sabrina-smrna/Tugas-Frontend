const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const ENDPOINTS = {
    POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}` ,
    TOPRATED: `${BASE_URL}/movie/toprated?api_key=${API_KEY}` ,
    NOWPLAYING: `${BASE_URL}/movie/nowplaying?api_key=${API_KEY}` ,

    
};

export default ENDPOINTS;