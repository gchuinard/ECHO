import React from 'react';
// MUI Imports
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Autocomplete, {
  createFilterOptions
} from '@material-ui/lab/Autocomplete';
import Tooltip from '@material-ui/core/Tooltip';
import Geolocalisation from 'src/components/Geolocalisation';
import MyLocationIcon from '@material-ui/icons/MyLocation';



// Styles et assets
import styles from './createEchoStyle';
// Utils
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { HANDLE_ECHO_CREATION_INPUT, GENERATE_ECHO, LOCALIZE_USER } from 'src/store/actions';

// Prepare styles
const useStyles = styles;
// Allows Autocomplete componant to filter properly tags
const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title
});

// Component
const CreateEchoForm = () => {
  // Hooks
  const tags = useSelector((state) => state.tags);
  const redirection = useSelector((state) => state.redirect.redirect);
  const dispatch = useDispatch();
  const classes = useStyles();
  const confirmMessage = useSelector((state) => state.create.message);
  const errorMessage = useSelector((state) => state.create.errorMessage);

  // Map tag list to get appropriate format for use in Autocomplete componant
  const tagsList = tags.map((tag) => {
    return { title: tag.name, id: tag.id };
  });
  return (


    <Container className={classes.main} maxWidth="md">

      <Typography className={classes.title} component="h1" variant="h5">
        Créer un nouvel écho
      </Typography>
      // {/* form */}
      <Typography className={classes.confirm}>{confirmMessage}</Typography>
      <Typography className={classes.error}>{errorMessage}</Typography>
      <form
        className={classes.form}
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          dispatch({ type: GENERATE_ECHO });
        }}
      >
        {
          redirection && <Redirect to="/" />
        }

        {/* basic information container */}
        <Container className={classes.info}>
          <TextField
            className={`${classes.input} ${classes.regular}`}
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="echo-title"
            label="Titre"
            name="title"
            autoFocus
            defaultValue=""
            onChange={(event, name = 'title') => dispatch({ type: HANDLE_ECHO_CREATION_INPUT, event, name })}
          />
          <TextField
            className={classes.textArea}
            id="echo-description"
            label="Description"
            margin="normal"
            multiline
            fullWidth
            className={`${classes.input}`}
            rows="3"
            rowsMax="3"
            autoFocus
            variant="filled"
            onChange={(event, name = 'content') => dispatch({ type: HANDLE_ECHO_CREATION_INPUT, event, name })}
          />
        </Container>
        {/* END basic information container */}
        {/* location container */}
        <Container className={classes.locate}>
          <Button onClick={() => dispatch({ type: LOCALIZE_USER })} color='secondary'> 
            <MyLocationIcon className={classes.icon} />
            Me geolocaliser automatiquement
          </Button>
          <TextField
            className={`${classes.input} ${classes.regular}`}
            variant="filled"
            margin="normal"
            required
            id="adress"
            fullWidth
            label="Adresse"
            name="adress"
            autoFocus
            onChange={(event, name = 'adress') => dispatch({ type: HANDLE_ECHO_CREATION_INPUT, event, name })}
            value={(useSelector((state) => state.create.adress))}

          />
          <Geolocalisation />
        </Container>
        {/* END location container */}
        {/* display tag container */}
        <Container className={classes.tag}>
          <Tooltip title="Cliquez pour choisir un écho à ajouter">
            <div>
              <Autocomplete
                className={`${classes.input}`}
                multiple
                id="tags-choice"
                options={tagsList}
                getOptionLabel={(option) => option.title}
                filterOptions={filterOptions}
                onChange={(_, tags, name = 'tags') => dispatch({
                  type: HANDLE_ECHO_CREATION_INPUT, event, tags, name
                })}
                renderInput={(params) => (
                  <TextField
                    className={classes.main}
                    {...params}
                    variant="filled"
                    label="Tags"
                    fullWidth
                  />
                )}
              />
            </div>
          </Tooltip>
        </Container>
        {/* END display tag container */}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Poster mon echo
        </Button>
        {/* error messages */}
        <Typography className={classes.confirm}>{}</Typography>
        <Typography className={classes.error}>{}</Typography>
      </form>
      {/* end form */}
    </Container>
  );
};


export default CreateEchoForm;

/**
 * Type of datas validation
 */
CreateEchoForm.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email']),
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  handleUserInput: PropTypes.func,
  handleConnectForm: PropTypes.func
};
