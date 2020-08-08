// Import MUI
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Typography} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import {HANDLE_DECONNEXION, GET_USER_INFO} from 'src/store/actions';

// Import styles
import styles from './drawerStyle.js';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const useStyles = styles;

const SideDrawer = ({isConnected, handleDisconnect, getUserInfo, role})  => {
    
  const classes = useStyles();

// Local state that checks if the user is connected or not
  const auth = isConnected;

  let showAdmin = false

  // Local state that checks if the user is connected or not
  if(role === 'ROLE_ADMIN'){
      showAdmin = true;              
  }
  


// Configure the opening of the side drawer by the use of a local state
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

// Determines sideBar content
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >

      <Link to='/'>
        <Typography className={classes.title}>Echo</Typography>
      </Link>
      <a href="http://localhost:8001/tag/list">
        <MenuItem
          variant="h6"
          className={classes.mobileMenuItem}>
          Tags
          </MenuItem>
          </a>
          
      {auth && (<Link to='/profile'>
        <MenuItem
          variant="h6"
          className={classes.mobileMenuItem}
          onClick={getUserInfo}
          >
          Mon profil
          </MenuItem>
      </Link>)}
      {auth && (<a href="http://localhost:8001/conv/user/list">
        <MenuItem
          variant="h6"
          className={classes.mobileMenuItem}
          >
          Mes conversations
          </MenuItem>
      </a>)}
      {showAdmin && auth && (<a href="http://localhost:8001/admin" ><MenuItem variant="h6" className={classes.mobileMenuItem}>Administration</MenuItem></a>)}
      {!auth && (<Link to='/login'>
        <MenuItem
          variant="h6"
          className={classes.mobileMenuItem}>
          Se connecter
          </MenuItem>
      </Link>)}
      {!auth && (<Link to='/signup'>
        <MenuItem
          variant="h6"
          className={classes.mobileMenuItem}>
          S'inscrire
        </MenuItem>
      </Link>)}
      <Container className={classes.disconnect}>
      {auth && (<Link to='/'>
        <MenuItem
          variant="h6"
          className={classes.desktopMenuItem}
          onClick={handleDisconnect}>
          <ExitToAppIcon className={classes.disconnectIcon}/> Se deconnecter
        </MenuItem>
      </Link>)}
      </Container>

      <div className={classes.footer}>
      <Link className={classes.links} to='/legal-mentions'>Mentions légales</Link>
      <Link className={classes.links} to='/contact'> Contact</Link>
      </div>
    
    </div>
  );

   

    return (
        <div>
            <IconButton 
            onClick={toggleDrawer('left', true)} 
            edge="start" 
            color="inherit" 
            aria-label="menu">
                <MenuIcon/>
            </IconButton>
            <Drawer 
            open={state.left} 
            onClose={toggleDrawer('left', false)}>
            {sideList('left')}
            </Drawer>
        </div>
    );
}

// Get all echo from reducer
const mapStateToProps = (state) => {
  const isConnected = state.connexion.isConnected
  const role = state.connexion.role
  return {
    isConnected,
    role
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDisconnect: () => {
      dispatch({type: HANDLE_DECONNEXION})
    },
    getUserInfo: () => {
      dispatch({ type: GET_USER_INFO })
  }
  };
};

// Wrapping container to connect it to the store
const DrawerContainer = connect(mapStateToProps, mapDispatchToProps)(SideDrawer);

export default DrawerContainer;
