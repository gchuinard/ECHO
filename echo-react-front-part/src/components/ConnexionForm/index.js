import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Face from '@material-ui/icons/Face';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { HANDLE_USER_CONNEXION, HANDLE_CONNEXION_USER_INPUT, changeInput, REDIRECT } from 'src/store/actions';

// Styles et assets
import styles from './connexionForm.js';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';


const useStyles = styles;

// Component
const ConnexionForm = ({ handleUserInput, handleConnectForm, user }) => {
  const classes = useStyles();

  const errors = user.errors
  const registryError = Object.values(errors).map((error) => <Typography>{error}</Typography>)

  return (
    
    <Container maxWidth="sm" className={classes.main}>
      <div className={classes.connexion}>
        <Avatar className={classes.avatar}>
          <Face />
        </Avatar>
        <Typography component="h1" variant="h5">
          Connexion
        </Typography>
        <Typography variant="subtitle2" className={classes.error}>{registryError}</Typography>
        <form className={classes.form} noValidate onSubmit={handleConnectForm}>
          {
            user.redirect && <Redirect to="/"  />
          }
          <TextField 
            className={classes.input}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Votre pseudo"
            name="username"
            autoComplete="string"
            autoFocus
            onChange={(event) => { handleUserInput(event, 'usernameValue'); }}
            value={user.username}
          />
          <TextField
            className={classes.input}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Votre mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => { handleUserInput(event, 'passwordValue'); }}
            value={user.password}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
          Se connecter
          </Button>

        
              {/* <Link href="#" variant="subtitle2" align='center' display='block' className={classes.links}>
                {"Mot de passe oublié"}
              </Link> */}

              
              <Typography component="p" variant="subtitle1" align='center' display='block'>
              Pas encore de compte? 
              </Typography>
              <Link to={'signup'}>
              <Typography 
              variant="subtitle2" 
              align='center' 
              display='block' 
              className={classes.linkss}>
                Créer un compte
              </Typography>
              </Link> 
        
             
        </form>
      </div>
    </Container>
  )
};


// Function who calls the initialState of the app, configures the keys called user, and uses it into the component
const mapStateToProps = (state) => {
  const credentials = state.connexion;
  const redirection = state.redirect;

  const user = {
    username: credentials.usernameValue,
    password: credentials.passwordValue,
    errors: credentials.errors,
    redirect: redirection.redirect
  }


  return {
    user: user
  };
};

// Function who deserves our store, datas going through the dispatch to change the actual state of the page
const mapDispatchToProps = (dispatch) => {
  return {
    handleUserInput: (event, name) => {
      dispatch(changeInput(event, name, HANDLE_CONNEXION_USER_INPUT));
    },
    handleConnectForm: (event) => {
      event.preventDefault();
      const newUser = false;
      dispatch({ type: HANDLE_USER_CONNEXION, newUser});
    }
  };
};


// Wrapping container to connect it to the store
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnexionForm);

/**
 * Type of datas validation
 */
ConnexionForm.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email']),
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  user: PropTypes.object,
  handleUserInput: PropTypes.func,
  handleConnectForm: PropTypes.func
};


/**
 * Export
 */
export default FormContainer;

