import axios from "axios";

export const addMovieReview = (reviewData: {score: number, message: string, movieId: string}) => {
  axios.post('http://localhost:4321/submitReview', reviewData)
    .then(function (response) {
      console.log('get response >> ', response);
  });
}

