import { List, ListSubheader, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useMemo } from 'react';

export default function Nav() {
  const nav = useNavigate();

  const navList = [
    {
      label: 'Home',
      icon: <HomeIcon />,
      path: '/',
    },
  ];

  const menu = useMemo(() =>
    navList.map((item) => (
      <ListItem key={item.label} disablePadding>
        <ListItemButton onClick={() => nav(item.path)}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText>
            {item.label}
          </ListItemText>
        </ListItemButton>
      </ListItem>
    )), []);

  return <List
    sx={{ backgroundColor: 'background.paper' }}
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        Manage
      </ListSubheader>
    }
  >
    {menu}
  </List>
}
