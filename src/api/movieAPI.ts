import axios from "axios";
import { APIResponse, movieObject } from "../utilities/types";



interface companyObject {
  id: string;
  name: string;
}

const getMovieCompanies = (movies: [], setLoading: (b: boolean ) => void, setResponse: (b: APIResponse ) => void) => {
  axios({
    method: 'get',
    url: 'http://localhost:3000/movieCompanies',
    responseType: 'json'
  })
    .then(function (response) {
      // Collate movie company data with movie titles.
      let collatedMovies = movies.map((movie: movieObject) => {
        // Use the movie film company ID to get the full relevant company object.
        const relevantCompany = response.data?.find((company: companyObject) => company.id === movie.filmCompanyId)

        // Add an average review score for each movie
        const sum = movie.reviews?.reduce((a: number, b: number) => a + b, 0) ;
        const avg =  ( sum / movie.reviews?.length ) || 0;
        const roundedAvg = Math.round(avg * 10) / 10 

        // Return the original movie object, with the company name added to the object.
        return {
          ...movie,
          filmCompanyName: relevantCompany.name,
          averageScore: roundedAvg
        }
      });

      setLoading(false);

      // Set parent API response state.
      setResponse({
        success: true,
        response: collatedMovies
      })
  })
  .catch((e) => {
    setLoading(false)
    // On error, update parent state
    setResponse({
      success: false,
      response: [e]
    });
});
}


export const getMovieData = (setLoading: (b: boolean ) => void, setResponse: (b: APIResponse ) => void ) => {
  // Get Movies
  axios({
    method: 'get',
    url: 'http://localhost:3000/movies',
    responseType: 'json'
  })
    .then(function (response) {
      console.log('movies >> ', response.data);
      // On success, also fetch movie company data
      getMovieCompanies(response.data, setLoading, setResponse);
  })
    .catch((e) => {
      setLoading(false);
      // On error, update parent state
      setResponse({
        success: false,
        response: [e]
      });
  })
}
