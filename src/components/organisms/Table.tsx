import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export const BasicTable = (props: {columns: GridColDef[], rows: Array<{}>}) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
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