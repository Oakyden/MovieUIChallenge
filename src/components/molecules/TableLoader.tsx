import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Skeleton } from '@mui/material';

export const TableLoader = () => {
  return (
  <div style={{margin: '0 1rem 1rem 0'}}>
    <Grid2 container spacing={2}>
      <Grid2 xs={3}>
      <Skeleton variant="rounded" height={60} />
      </Grid2>
      <Grid2 xs={3}>
      <Skeleton variant="rounded" height={60} />
      </Grid2>
      <Grid2 xs={3}>
      <Skeleton variant="rounded" height={60} />
      </Grid2>
      <Grid2 xs={3}>
      <Skeleton variant="rounded" height={60} />
      </Grid2>
      <Grid2 xs={12}>
      <Skeleton variant="rounded" height={60} />
      </Grid2>
      <Grid2 xs={12}>
      <Skeleton variant="rounded" height={60} />
      </Grid2>
      <Grid2 xs={12}>
      <Skeleton variant="rounded" height={60} />
      </Grid2>
    </Grid2>
  </div>
  );
}

