/* eslint-disable react/prop-types */
import { Container, Grid, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import theme from '../../theme';
import { VideoCardHome } from '../VideoCardHome';

export const Mainbody = ({ draweropen, drawerWidth }) => {
  return (
    <>
      <Toolbar />
      <Box
        sx={{
          height: '92vh',
          overflowY: 'scroll',
          overflowX: 'clip',
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(draweropen && {
            ml: `${drawerWidth}px`,
            width: `calc(100% - ${drawerWidth}px)`,
          }),
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <VideoCardHome />
            <VideoCardHome />
            <VideoCardHome />
            <VideoCardHome />
            <VideoCardHome />
            <VideoCardHome />
            <VideoCardHome />
            <VideoCardHome />
          </Grid>
        </Container>
      </Box>
    </>
  );
};
