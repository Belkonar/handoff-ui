import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AppBar, Box, CssBaseline, Drawer, IconButton, PaletteMode, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
import React, { useMemo } from 'react';
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  createMemoryRouter,
} from 'react-router-dom';

import { getRoutes } from './routes';
import { AlertsComponent } from './components/AlertsComponents';
import Nav from './components/Nav';

export function Root() {
  const drawerWidth = 200;

  const [state, setState] = React.useState<{ mode: PaletteMode }>({
    mode: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
  });

  const theme = useMemo(() => createTheme({
    palette: {
      mode: state.mode,
    },
    components: {
      MuiListItemIcon: {
        defaultProps: {
          sx: {
            minWidth: 32,
          }
        }
      }
    }
  }), [state.mode]);

  const setTheme = (theme: PaletteMode) => {
    setState({ mode: theme });
    localStorage.setItem('theme', theme);
  }

  const toggleTheme = () => {
    const newMode = state.mode === 'light' ? 'dark' : 'light';
    setTheme(newMode);
  }

  return <ThemeProvider theme={theme}>
    <CssBaseline />

    <Box sx={{ display: 'flex' }}>
      <AppBar
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar variant='dense'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Budge
          </Typography>
          <Box>
            <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
              {state.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar variant='dense' />
        <Nav></Nav>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar variant='dense' />
        <Outlet />
      </Box>
    </Box>
    <AlertsComponent />
  </ThemeProvider>
}

export function AppRoot() {
  const router = useMemo(() => createBrowserRouter(getRoutes()), []);

  return <RouterProvider router={router} />
}
