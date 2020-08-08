import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


// Styles et assets
import {changeInput, HANDLE_CONTACT_FORM_INPUT, HANDLE_SUBMIT_CONTACT_FORM } from 'src/store/actions';
import styles from './contactFormStyle.js';
import {Redirect} from 'react-router-dom';

const useStyles = styles

// Component
const ContactForm = ({ handleUserInput, handleSubmitContactForm, confirmMessage, redirect, errorMessage }) => {
  const classes = useStyles();

  return (
    
    <Container maxWidth="md">
      <div className={classes.contact}>
        <Typography component="h1" variant="h5">
          Contact
        </Typography>
        <Typography className={classes.subtitle} component="h1" variant="subtitle1">
          Une remarque pour nous améliorer ou un bug à signaler ? N'hésitez pas à nous laisser un petit message
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmitContactForm}>
          {
            redirect && <Redirect to="/" />
          }
        <Container> 
          <TextField 
            className={classes.input}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Votre nom"
            name="username"
            autoComplete="string"
            autoFocus
            onChange={(event) => { handleUserInput(event, 'usernameValue'); }}
            // ajouter une value
          />
          

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
            // ajouter une value

          />

        <TextField
            className={classes.textArea}
            id="contact-message"
            label="Votre message"
            fullWidth
            multiline
            required
            rows="6"
            defaultValue=""
            margin="normal"
            autoFocus
            variant="outlined"
            onChange={(event) => { handleUserInput(event, 'message'); }}
        />
        </Container> 

        <Typography className={classes.confirm}>{confirmMessage}</Typography>
        <Typography className={classes.error}>{errorMessage}</Typography>
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
          Envoyer
          </Button>
             
        </form>
      </div>
    </Container>
  )
};


// Function who calls the initialState of the app, configures the keys called user, and uses it into the component
const mapStateToProps = (state) => {

  const confirmMessage = state.contact.confirmationMessage
  const errorMessage = state.contact.errors
  const redirection = state.redirect;

  return {
    confirmMessage, 
    errorMessage,
    redirect: redirection.redirect,
  };
};

// Function who deserves our store, datas going through the dispatch to change the actual state of the page
const mapDispatchToProps = (dispatch) => {
  return {
    handleUserInput: (event, name) => {
      dispatch(changeInput(event, name, HANDLE_CONTACT_FORM_INPUT));
    },
    handleSubmitContactForm: (event) => {
      event.preventDefault();
      dispatch({ type: HANDLE_SUBMIT_CONTACT_FORM })
    }
  };
};


// Wrapping container to connect it to the store
const ContactFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);

/**
 * Type of datas validation
 */
ContactForm.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email']),
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  handleUserInput: PropTypes.func,
  handleConnectForm: PropTypes.func
};


/**
 * Export
 */
export default ContactFormContainer;

