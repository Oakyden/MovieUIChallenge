import { useRef, useState, useEffect} from 'react';
import { getMovieData } from './api/movieAPI';
import { BasicTable } from './components/organisms/Table';
import { movieColumns } from './utilities/constants';
import { APIResponse } from './utilities/types';
import { Button, Container } from '@mui/material';

export const App = () =>  {
  const [selectedMovie, setSelectedMovie] = useState(0); 
  const [loading, setLoading] = useState(true);
  const [apiResponse , setAPIResponse] = useState<APIResponse>({
    success: false,
    response: []
  });

  useEffect(() => {
    getMovieData(setLoading, setAPIResponse);
  }, []);

  const refreshButton = (buttonText: any) => {
    if (apiResponse.success) {
      return <Button variant="contained">{buttonText}</Button> 
    } else {
      return <p>No movies loaded yet</p>
    }   
  };

  console.log('API response is >>>> ', apiResponse);

  return (
    <Container maxWidth="lg">
      <h2>Welcome to Movie database!</h2> 
      {refreshButton("Refresh")}

      {apiResponse.success && (
        <div>
          <BasicTable columns={movieColumns} rows={apiResponse.response}/>
        </div>
      )}
    </Container>
  );
}