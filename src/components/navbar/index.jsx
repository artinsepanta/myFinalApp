import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 10,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          Dera Charity
          </Typography>

          <NavLink exact t={true} to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">Home</Button>
          </NavLink>

          <NavLink exact t={true} to='/service-report/new' style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">New</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}