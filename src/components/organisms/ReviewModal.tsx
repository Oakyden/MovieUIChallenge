import { useState} from 'react';
import { Skeleton, Modal, Typography, Box, TextField, Rating, Button, Alert, CircularProgress} from '@mui/material';
import { addMovieReview } from '../../api/reviewAPI';
import { APIResponse, movieObject } from '../../utilities/types';

export const ReviewModal = (props: {open: boolean, onClose: () => void, movieObject: movieObject}) => {

  // State for the user's review
  const [review, setReview] = useState({
    score: 5,
    message: ''
  });
  // Triggered on submitting a review
  const [loading, setLoading] = useState(false);

  // Response upon attempting to submit a review
  const [apiResponse , setAPIResponse] = useState<APIResponse>({
    success: false,
    response: []
  });

  // Triggered upon the user clicking to submit the review modal
  const submitReview = () => {
    const reviewData = {
      movieId: props.movieObject.id,
      ...review
    }
    addMovieReview(reviewData, setLoading, setAPIResponse);
  }

  return (

    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="Review movie modal"
      aria-describedby="Select a star rating and type a movie review less then 100 characters."
    >
      <>
        {loading && 
          <Box sx={style}>
            <CircularProgress />
          </Box>
        }

        {!loading && !apiResponse.success && (
          <Box sx={style}>
            {(apiResponse.response.length > 0) && (
              <Alert style={{marginBottom: '1rem'}} severity="error">Oops, something went wrong, please try to submit again.</Alert>
            )}

            <Typography id="modal-modal-title" variant="h6" component="h2">
              {`Reviewing "${props.movieObject.title}"`}
            </Typography>
            <Rating style={{marginTop: '1rem', marginBottom: '1rem'}} onChange={(e, value) => setReview({...review, score: value ?? 0})} name="customized-10" defaultValue={2} max={10} />
            <TextField
              id="outlined-multiline-static"
              label="Your review message"
              multiline
              maxRows={4}
              style={{marginTop: '1rem', marginBottom: '1rem'}}
              placeholder="A fantastic movie..."
              onChange={e => setReview({...review, message: e.target.value ?? 0})}
              error={review.message.length > 100}
              helperText={'Please ensure your review is below 100 characters'}
            />
            <Button disabled={review.message.length > 100} variant="contained" onClick={() => submitReview()}>Submit Review</Button>
          </Box>
        )}

        {!loading && apiResponse.success && (
          <Box sx={style}>
            <Alert severity="success">Thanks for your review!</Alert>
            <Button style={{marginTop: '1rem'}} variant="contained" onClick={props.onClose}>Close</Button>
          </Box>
        )}
      </>
    </Modal>
  );
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
