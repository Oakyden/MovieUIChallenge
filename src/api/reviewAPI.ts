import axios from "axios";
import { APIResponse } from "../utilities/types";

export const addMovieReview = (reviewData: {score: number, message: string, movieId: string}, setLoading: (loading: boolean) => void, setResponse: (response: APIResponse ) => void ) => {
  setLoading(true);
  console.log('Example payload > ', reviewData);
  axios.post('http://localhost:3000/submitReview', reviewData)
    .then(function (response) {
      setLoading(false);
      setResponse({
        success: true,
        response: [response]
      });
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

