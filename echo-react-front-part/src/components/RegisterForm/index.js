import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Face from '@material-ui/icons/Face';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { HANDLE_USER_REGISTER, HANDLE_REGISTER_USER_INPUT, changeInput, REDIRECT } from 'src/store/actions';

// Styles et assets

import styles from './registerForm';
import {Redirect} from 'react-router-dom';

const useStyles = styles;


// Component
const RegisterForm = ({ handleUserInput, handleRegisterForm, user }) => {

  const classes = useStyles();
  const errors = user.errors
  const registryError = Object.values(errors).map((error) => <Typography>{error}</Typography>)

  return (
    <Container maxWidth="sm" className={classes.main}>
      <CssBaseline />
      <div className={classes.connexion}>
        <Avatar className={classes.avatar}>
          <Face />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inscription
        </Typography>
        <Typography variant="subtitle2" className={classes.error}>{registryError}</Typography>
        <form className={classes.form} noValidate onSubmit={handleRegisterForm}>
          {
            user.redirect && <Redirect to="/" />
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
            onChange={(event) => {
              handleUserInput(event, 'usernameValue');
            }}
            value={user.username}
          />
        <Typography variant="subtitle2" className={classes.error}>{}</Typography>
          <TextField
            className={classes.input}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Votre email"
            type="email"
            id="email"
            autoComplete="current-email"
            onChange={(event) => {
              handleUserInput(event, 'emailValue');
            }}
            value={user.email}
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
            onChange={(event) => {
              handleUserInput(event, 'passwordValue');
            }}
            value={user.password}
          />

          <TextField
            className={classes.input}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm-password"
            label="Confirmez le mot de passe"
            type="password"
            id="passwordCheckValue"
            onChange={(event) => {
              handleUserInput(event, 'passwordCheckValue');
            }}
            value={user.passwordCheck}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
          S'inscrire
          </Button>
          
        </form>
      </div>
    </Container>
  );
};

// Function who calls the initialState of the app, configures the keys called user, and uses it into the component
const mapStateToProps = (state) => {
  const credentials = state.register;
  const redirection = state.redirect;

  const user = {
    username: credentials.usernameValue,
    password: credentials.passwordValue,
    passwordCheck: credentials.passwordCheckValue,
    email: credentials.emailValue,
    redirect: redirection.redirect,
    errors: credentials.errors,
  };

  return {
    user
  };
};

// Function who deserves our store, datas going through the dispatch to change the actual state of the page
const mapDispatchToProps = (dispatch) => {
  return {
    handleUserInput: (event, name) => {
      dispatch(changeInput(event, name, HANDLE_REGISTER_USER_INPUT));
    },
    handleRegisterForm: (event) => {
      event.preventDefault();
      dispatch({ type: HANDLE_USER_REGISTER });
    }
  };
};


// Wrapping container to connect it to the store
const RegisterFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);

/**
 * Type of datas validation
 */
RegisterForm.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email']),
  value: PropTypes.string,
  className: PropTypes.string,
  handleUserInput: PropTypes.func,
  user: PropTypes.object,
  handleRegisterForm: PropTypes.func
};


/**
 * Export
 */
export default RegisterFormContainer;
