import {
  VideoCallOutlined,
  NotificationsNoneRounded,
} from '@mui/icons-material';
import { IconButton, Badge, Avatar, List } from '@mui/material';
import { CusToolTip } from '../CusTooltips';

export const NavActions = () => {
  return (
    <>
      <List
        sx={{
          display: 'flex',
          gap: '15px',
        }}
      >
        <CusToolTip title='Create'>
          <IconButton size='medium' sx={{ ml: 2 }}>
            <VideoCallOutlined color='action' sx={{ fontSize: '24px' }} />
          </IconButton>
        </CusToolTip>
        <CusToolTip title='Notifications'>
          <IconButton size='medium'>
            <Badge badgeContent={5} overlap='circular' color='error'>
              <NotificationsNoneRounded
                color='action'
                sx={{ fontSize: '24px' }}
              />
            </Badge>
          </IconButton>
        </CusToolTip>
        <IconButton size='small'>
          <Avatar>Sh</Avatar>
        </IconButton>
      </List>
    </>
  );
};
