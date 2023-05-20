/* eslint-disable react/prop-types */
import {
  AccessTimeOutlined,
  BookmarksOutlined,
  ExpandLessOutlined,
  ExpandMoreOutlined,
  HistoryOutlined,
  HomeOutlined,
  SmartDisplayOutlined,
  SmartphoneOutlined,
  SubscriptionsOutlined,
  ThumbUpOutlined,
  VideoLibraryOutlined,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
export const Sidebar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { open, toggleDrawer } = props;
  const drawerWidth = 240;

  const [showSaves, setShowSaves] = useState(false);

  const showSavesClick = () => {
    setShowSaves(!showSaves);
  };

  return (
    <>
      <Drawer
        sx={{
          width: `${drawerWidth}px`,
        }}
        anchor='left'
        hideBackdrop={false}
        open={open}
        onClose={toggleDrawer}
        elevation={2}
      >
        <Box width={drawerWidth}>
          <Toolbar />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeOutlined sx={{ fontSize: '24px' }} />
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SmartphoneOutlined sx={{ fontSize: '24px' }} />
                </ListItemIcon>
                <ListItemText primary='Shorts' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SubscriptionsOutlined sx={{ fontSize: '24px' }} />
                </ListItemIcon>
                <ListItemText primary='Subscriptions' />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <VideoLibraryOutlined sx={{ fontSize: '24px' }} />
                </ListItemIcon>
                <ListItemText primary='Library' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HistoryOutlined sx={{ fontSize: '24px' }} />
                </ListItemIcon>
                <ListItemText primary='History' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SmartDisplayOutlined sx={{ fontSize: '24px' }} />
                </ListItemIcon>
                <ListItemText primary='Your videos' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccessTimeOutlined sx={{ fontSize: '24px' }} />
                </ListItemIcon>
                <ListItemText primary='Watch later' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ThumbUpOutlined sx={{ fontSize: '24px' }} />
                </ListItemIcon>
                <ListItemText primary='Liked videos' />
              </ListItemButton>
            </ListItem>
            <Collapse in={!showSaves} timeout={2}>
              <ListItem disablePadding>
                <ListItemButton onClick={showSavesClick}>
                  <ListItemIcon>
                    <ExpandMoreOutlined sx={{ fontSize: '24px' }} />
                  </ListItemIcon>
                  <ListItemText primary='Show more' />
                </ListItemButton>
              </ListItem>
            </Collapse>
            <Collapse in={showSaves} timeout={5}>
              <List>
                {['React', 'Blender', 'Unreal'].map((value) => (
                  <ListItem key={value}>
                    <ListItemIcon>
                      <BookmarksOutlined />
                    </ListItemIcon>
                    <ListItemText primary={value} />
                  </ListItem>
                ))}
                <ListItem disablePadding>
                  <ListItemButton onClick={showSavesClick}>
                    <ListItemIcon>
                      <ExpandLessOutlined sx={{ fontSize: '24px' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary='Show less'
                      sx={{ fontSize: '24px' }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
            <SubsList drawerOpen={true} />
          </List>
        </Box>
      </Drawer>
    </>
  );
};

function SubsList({ drawerOpen }) {
  const SubsChannels = [
    {
      name: 'Chris X',
      photoUrl:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Kara Dev',
      photoUrl:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Track Buddy',
      photoUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'PCYA',
      photoUrl:
        'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Hacker',
      photoUrl:
        'https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Nigga Dev',
      photoUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];
  return drawerOpen == true ? (
    <>
      <Divider />
      <List>
        <ListItem>
          <Typography sx={{ mb: 2, fontSize: '18px' }} variant='h6'>
            Subscriptions
          </Typography>
        </ListItem>
        {SubsChannels.map((value) => (
          <ListItem key={value.name} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  src={value.photoUrl}
                  sx={{ width: '26px', height: '26px' }}
                />
              </ListItemAvatar>
              <ListItemText primary={value.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  ) : null;
}
