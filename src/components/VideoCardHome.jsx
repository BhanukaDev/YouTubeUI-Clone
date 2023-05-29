/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import theme from '../theme';
import { MoreVertOutlined } from '@mui/icons-material';
import moment from 'moment/moment';
import videoData from './SideBar/data/VideoPreviewData';
import vdTitleData from './SideBar/data/vdTitleData';

export const VideoCardHome = ({
  mdBR = 10,
  animmdBR = 0,
  mdTransition = '0.4s',
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        component='img'
        src={videoData[Math.floor(Math.random() * videoData.length)]}
        alt='Thumbnail'
        sx={{
          aspectRatio: '16/9',

          borderRadius: { xs: '0px', sm: `${mdBR}px` },
          mb: theme.spacing(1),
          transition: mdTransition,
          '&:hover': {
            borderRadius: `${animmdBR}px`,
          },
          bgcolor: 'grey',
          width: '100%',
          objectFit: 'cover',
        }}
      ></Box>

      {/* <Grid container columns={18} justifyContent={'flex-end'}>
        <Grid item xs={3}>
          <Avatar>W</Avatar>
        </Grid>
        <Grid item xs={14}>
          <Typography
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              fontSize: '15px',
            }}
          >
            {vdTitleData[Math.floor(Math.random() * vdTitleData.length)]}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton size='large'>
            <MoreVertOutlined />
          </IconButton>
        </Grid>
        <Grid item xs={15}>
          <Typography sx={{ fontSize: '15px' }} color='text.secondary' noWrap>
            DASA GAMES STUDIO
          </Typography>
        </Grid>
        <Grid item xs={15}>
          <Typography sx={{ fontSize: '15px' }} color='text.secondary' noWrap>
            {moment('20230520', 'YYYYMMDD').fromNow()}
          </Typography>
        </Grid>
      </Grid> */}
      <Stack direction='row' spacing={1}>
        <Avatar>W</Avatar>
        <Grid container>
          <Grid item xs={11}>
            <Typography
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                fontSize: '16px',
              }}
            >
              {vdTitleData[Math.floor(Math.random() * vdTitleData.length)]}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton size='small'>
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
      </Stack>
    </Grid>
  );
};
