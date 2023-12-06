import { useState} from 'react';
import { Skeleton, Modal, Typography, Box, TextField, Rating, Button} from '@mui/material';
import { addMovieReview } from '../../api/reviewAPI';
import { movieObject } from '../../utilities/types';

export const ReviewModal = (props: {open: boolean, onClose: () => void, movieObject: movieObject}) => {

  const [review, setReview] = useState({
    score: 5,
    message: ''
  });

  const submitReview = () => {
    const reviewData = {
      movieId: props.movieObject.id,
      ...review
    }
    addMovieReview(reviewData);
  }

  return (

    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {`Reviewing ${props.movieObject.title}`}
        </Typography>
        <Rating style={{marginTop: '1rem', marginBottom: '1rem'}} onChange={(e, value) => setReview({...review, score: value ?? 0})} name="customized-10" defaultValue={2} max={10} />
        <TextField
          id="outlined-multiline-static"
          label="Your review message"
          multiline
          maxRows={4}
          style={{marginTop: '1rem', marginBottom: '1rem'}}
          defaultValue="Default Value"
          onChange={e => setReview({...review, message: e.target.value ?? 0})}
          error={review.message.length > 100}
          helperText={'Please leave your review below 100 characters'}
        />
        <Button variant="contained" onClick={() => submitReview()}>Submit Review</Button>
      </Box>
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
