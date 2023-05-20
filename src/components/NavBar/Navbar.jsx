/* eslint-disable react/prop-types */
import {
  AppBar,
  Toolbar,
  //  Typography,
  Button,
  Box,
  IconButton,
  Paper,
  InputBase,
  Divider,
  List,
} from '@mui/material';
import { MenuRounded, Search, MicRounded } from '@mui/icons-material';
import theme from '../../theme';
import { NavActions } from './NavActions';
import { CusToolTip } from '../CusTooltips';

export const Navbar = (props) => {
  const { toggleDrawer } = props;
  return (
    <AppBar
      elevation={0}
      position='fixed'
      sx={{ zIndex: theme.zIndex.drawer + 1 }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <List sx={{ display: 'flex' }}>
          <IconButton size='medium' onClick={toggleDrawer}>
            <MenuRounded color='action' sx={{ fontSize: '24px' }} />
          </IconButton>
          <CusToolTip title='YouTube Home'>
            <IconButton disableRipple>
              <Box
                component='img'
                sx={{
                  width: 120,
                  objectFit: 'contain',
                  ml: 1,
                }}
                alt='Your logo.'
                src='src/assets/YouTube-Logo.wine.png'
              />
            </IconButton>
          </CusToolTip>
        </List>
        <Box sx={{ display: 'flex', width: '35%' }}>
          <Paper
            variant='outlined'
            sx={{
              p: '0px',
              flexGrow: 1,
              display: 'flex',
              borderRadius: '100px',
              alignItems: 'center',
            }}
          >
            <InputBase
              sx={{ ml: 2, mr: 1, flex: 1, fontSize: '16px' }}
              placeholder='Search'
            />
            <Divider orientation='vertical' flexItem />
            <CusToolTip title='Search'>
              <Button
                sx={{
                  margin: '0px',
                  borderTopRightRadius: '100px',
                  borderBottomRightRadius: '100px',
                  bgcolor: '#f8f8f8',
                }}
              >
                <Search color='action' sx={{ fontSize: '24px' }} />
              </Button>
            </CusToolTip>
          </Paper>
          <CusToolTip title='Search with your voice'>
            <IconButton size='medium' sx={{ ml: 2 }}>
              <MicRounded color='action' sx={{ fontSize: '24px' }} />
            </IconButton>
          </CusToolTip>
        </Box>
        <NavActions />
      </Toolbar>
    </AppBar>
  );
};
