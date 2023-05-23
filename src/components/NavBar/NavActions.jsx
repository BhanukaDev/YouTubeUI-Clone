import {
  VideoCallOutlined,
  NotificationsNoneRounded,
} from '@mui/icons-material';
import { IconButton, Badge, Avatar, List, ListItem } from '@mui/material';
import { CusToolTip } from '../CusTooltips';

export const NavActions = () => {
  return (
    <>
      <List
        sx={{
          display: 'flex',
          width: '150px',
        }}
      >
        <ListItem disablePadding>
          <CusToolTip title='Create'>
            <IconButton>
              <VideoCallOutlined color='action' sx={{ fontSize: '24px' }} />
            </IconButton>
          </CusToolTip>
        </ListItem>
        <ListItem disablePadding>
          <CusToolTip title='Notifications'>
            <IconButton>
              <Badge badgeContent={5} overlap='circular' color='error'>
                <NotificationsNoneRounded
                  color='action'
                  sx={{ fontSize: '24px' }}
                />
              </Badge>
            </IconButton>
          </CusToolTip>
        </ListItem>
        <ListItem disablePadding>
          <IconButton>
            <Avatar>Sh</Avatar>
          </IconButton>
        </ListItem>
      </List>
    </>
  );
};
