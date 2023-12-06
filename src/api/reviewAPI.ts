import axios from "axios";

export const getMovieCompanies = () => {
  axios({
    method: 'get',
    url: 'http://localhost:4321/submitReview',
    responseType: 'stream'
  })
    .then(function (response) {
      console.log('get response >> ', response);
  });
}

