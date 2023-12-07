import { GridColDef } from '@mui/x-data-grid';

export const averageRating = (numberArray: Array<number>) => {
  const sum = numberArray.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0) ;
  const avg =  ( sum / numberArray.length ) || 0;
  const roundedAvg = Math.round(avg * 10) / 10 

  return roundedAvg;
}

export const movieColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'filmCompanyName', headerName: 'Producing Company', width: 200 },
    {
      field: 'averageScore',
      headerName: 'Average Review Score',
      description: 'Mean average of review scores for this movie',
      width: 160
    },
  ];
