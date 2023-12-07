import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { movieObject } from '../../utilities/types';

export const BasicTable = (props: {columns: GridColDef[], rows: Array<{}>, onRowClick: (movie: movieObject) => void}) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        onRowClick={(params) => props.onRowClick(params.row)}
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}