import { ThemeProvider } from '@emotion/react';

import theme from './theme';
import { Sidebar } from './components/SideBar/Sidebar';
import { useState } from 'react';
import { Navbar } from './components/NavBar/Navbar';
import { Mainbody } from './components/MainBody/Mainbody';
import { useMediaQuery } from '@mui/material';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const ToggleDrawerOpen = () => {
    console.log('Click me', isDrawerOpen);
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
    } else {
      setIsDrawerOpen(true);
    }
    console.log('Click me', isDrawerOpen);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar toggleDrawer={ToggleDrawerOpen} />
        <Sidebar
          open={isDrawerOpen}
          toggleDrawer={() => setIsDrawerOpen(false)}
        />
        <Mainbody drawerWidth={240} draweropen={isDrawerOpen} />
      </ThemeProvider>
    </>
  );
}
export default App;
