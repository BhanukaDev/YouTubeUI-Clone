/* eslint-disable react/prop-types */
import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material';
import theme from '../theme';
import { MoreVertOutlined } from '@mui/icons-material';
import moment from 'moment/moment';

export const VideoCardHome = ({
  mdBR = 10,
  animmdBR = 0,
  mdTransition = '0.4s',
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        component='img'
        src='https://images.unsplash.com/photo-1682905926517-6be3768e29f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60'
        sx={{
          aspectRatio: '16/9',
          borderRadius: `${mdBR}px`,
          mb: theme.spacing(1),
          transition: mdTransition,
          '&:hover': {
            borderRadius: `${animmdBR}px`,
          },
          bgcolor: 'red',
          width: '100%',
          objectFit: 'cover',
        }}
      ></Box>

      <Grid container spacing={0} columns={14} justifyContent={'flex-end'}>
        <Grid item xs={2}>
          <Avatar>W</Avatar>
        </Grid>
        <Grid item xs={11}>
          <Typography
            variant='h6'
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
            }}
          >
            ශ්‍රී ලංකාව ගත් වැදගත් ම පියවර.."මෙය නැවත සිදුනොවිය යුතුයි"
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton size='large'>
            <MoreVertOutlined />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: '15px' }} color='text.secondary' noWrap>
            DASA GAMES STUDIO
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: '15px' }} color='text.secondary' noWrap>
            {moment('20230520', 'YYYYMMDD').fromNow()}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
