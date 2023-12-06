import { useState, useEffect} from 'react';
import { getMovieData } from './api/movieAPI';
import { BasicTable } from './components/molecules/Table';
import { movieColumns } from './utilities/constants';
import { APIResponse, movieObject } from './utilities/types';
import { Alert, Box, Button, Container, Modal, Typography } from '@mui/material';
import { TableLoader } from './components/molecules/TableLoader';
import { ReviewModal } from './components/organisms/ReviewModal';


export const App = () =>  {
  const [loading, setLoading] = useState(true);
  const [apiResponse , setAPIResponse] = useState<APIResponse>({
    success: false,
    response: []
  });
  const [selectedMovie, setSelectedMovie] = useState<movieObject | null>();

  useEffect(() => {
    getMovieData(setLoading, setAPIResponse);
  }, []);

  const refreshMovies = () => {
    setLoading(true);
    getMovieData(setLoading, setAPIResponse)
  }


  return (
    <>
    <Container maxWidth="lg">
      <h2>Welcome to Movie Database!</h2> 
      <Button style={{marginBottom: '1rem'}} variant="contained" onClick={() => refreshMovies()}>Refresh</Button>

      {!loading && (!apiResponse.success || apiResponse.response.length < 1) && <p>No movies to show</p>}
      {!loading && !apiResponse.success && <Alert severity="error">{`${apiResponse.response}, try pressing the refresh button.`}</Alert>}
 
      {loading && <TableLoader />}

      {!loading && apiResponse.success && (
        <div>
          <BasicTable onRowClick={setSelectedMovie} columns={movieColumns} rows={apiResponse.response}/>
        </div>
      )}
    </Container>

    {selectedMovie &&  
      <ReviewModal 
        open={selectedMovie !== null} 
        onClose={() => {
          setSelectedMovie(null);
          }
        } 
        movieObject={selectedMovie}/>
    }
    </>

  );
}
