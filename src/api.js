import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/?apikey=b502738f&s=matrix';
export const loadMovies = async () => {
    const response = axios.get(API_URL);
    return response.data
    // .Search.filter(
    //     movie => movie.Year > 2002
    // ).map(({Title, Year}) => `${Title} - ${Year}`)
    ;
    
}
