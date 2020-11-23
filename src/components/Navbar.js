import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { BottomNavigation } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#ffffff',
    color: theme.palette.primary.main,
    padding: '1rem'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    marginRight: '1rem'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary" className={classes.appBar} position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Logo />
          {/* <Typography variant="h6" className={classes.title}> */}
          <ul className={classes.title}>
            {/* <li className={classes.navItem}>
              <a href="">main</a>
            </li>
            <li className={classes.navItem}>
              <a href="">main</a>
            </li>
            <li className={classes.navItem}>
              <a href="">main</a>
            </li> */}
           <NavLinks />
          </ul>
          {/* </Typography> */}
          <Button color="primary">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
