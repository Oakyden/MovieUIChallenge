import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export const movieColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'filmCompanyName', headerName: 'Producing Company', width: 200 },
    {
      field: 'averageScore',
      headerName: 'Average review score',
      description: 'Mean average of review scores for this movie',
      width: 160
    },
  ];