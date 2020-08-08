// Import MUI
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { Container, Typography, Drawer } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { HANDLE_DECONNEXION, GET_USER_INFO} from 'src/store/actions';

import SideDrawer from 'src/components/Drawer';


// Import MakeStyles
import styles from './navStyle.js'
import { connect } from 'react-redux'

// Import router
import {Link} from 'react-router-dom';


const useStyles = styles;

// Component
const Nav = ({ user, handleDisconnect, getUserInfo }) => {

    // Styles
    const classes = useStyles();
    let showAdmin = false

    // Local state that checks if the user is connected or not
    const auth = user.isConnected;
    if(user.role === 'ROLE_ADMIN'){
        showAdmin = true;              
    }

    // Routes 
   
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                <SideDrawer></SideDrawer>

                    
                    <Link to='/'><MenuItem variant="h6" className={classes.desktopMenuItem}>Home</MenuItem></Link>
                    <a href="http://localhost:8001/tag/list"><MenuItem variant="h6" className={classes.desktopMenuItem}>Tags</MenuItem></a>
                    {auth && (<Link to='/profile'><MenuItem variant="h6" className={classes.desktopMenuItem} onClick={getUserInfo}>Mon profil</MenuItem></Link>)}
                    {auth && (<a href="http://localhost:8001/conv/user/list" ><MenuItem variant="h6" className={classes.desktopMenuItem}>Mes conversations</MenuItem></a>)}
                    {showAdmin && auth && (<a href="http://localhost:8001/admin" ><MenuItem variant="h6" className={classes.desktopMenuItem}>Administration</MenuItem></a>)}
                    {!auth && (<Link to='/login'><MenuItem variant="h6" className={classes.desktopMenuItem}>Se connecter            
                    </MenuItem></Link>)}
                    {!auth && (<Link to='/signup'><MenuItem variant="h6" className={classes.desktopMenuItem}>
                        S'inscrire
                    </MenuItem></Link>)}

                    {auth && (
                        <Container className={classes.connectedUser}>
                            <div>
                                <Typography className={classes.greetings} variant="subtitle1">Bonjour {user.username}</Typography >
                                <IconButton onClick={handleDisconnect}
                                    color="inherit"
                                >
                                    <HighlightOffIcon />
                                </IconButton>

                            </div>
                        </Container>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

// Get all echo from reducer
const mapStateToProps = (state) => {
    const isConnected = state.connexion.isConnected;
    const username = state.connexion.usernameValue;
    const role = state.connexion.role

    const user = {
        isConnected: isConnected,
        username: username,
        role
    }
    return {
      user
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        handleDisconnect : () => {
            dispatch({ type: HANDLE_DECONNEXION })
        },
        getUserInfo: () => {
            dispatch({ type: GET_USER_INFO })
        }
    }
}
  
  
  // Wrapping container to connect it to the store
  const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);
  
  export default NavContainer;
