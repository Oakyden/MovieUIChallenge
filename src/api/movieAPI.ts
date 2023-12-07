import axios from "axios";
import { APIResponse, movieObject } from "../utilities/types";
import { averageRating } from "../utilities/constants";

interface companyObject {
  id: string;
  name: string;
}

// Gets movie company data that can in turn be mapped to movies
const getMovieCompanies = (movies: [], setLoading: (b: boolean ) => void, setResponse: (b: APIResponse ) => void) => {
  axios({
    method: 'get',
    url: 'http://localhost:3000/movieCompanies',
    responseType: 'json'
  })
    .then(function (response) {
      // Collate movie company data with the main movie data object.
      let collatedMovies = movies.map((movie: movieObject) => {
        // Use the movie film company ID to get the full relevant company object.
        const relevantCompany = response.data?.find((company: companyObject) => company.id === movie.filmCompanyId)

         // Return the original movie object, with the company name and average review score added to the object.
        return {
          ...movie,
          movieCompanyName: relevantCompany.name,
          averageScore: averageRating(movie.reviews)
        }
      });

      // Set parent API response state.
      setResponse({
        success: true,
        response: collatedMovies
      });

      setLoading(false);
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

// Gets movie data and on success fetches further movie company data
export const getMovieData = (setLoading: (b: boolean ) => void, setResponse: (b: APIResponse ) => void ) => {
  // Get Movies
  axios({
    method: 'get',
    url: 'http://localhost:3000/movies',
    responseType: 'json'
  })
    .then(function (response) {
      // On success, also fetch movie company data and in turn map a new collated object
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
