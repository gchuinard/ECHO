import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  main: {
    height: '100%',
    borderLeft: '1px solid #252744',
    borderRight: '1px solid #252744'
  },
  title: {
    color: 'white',
    marginTop: theme.spacing(3),
    textAlign: 'center'
  },
  form: {
    padding: '1em',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  // MUI Input styling
  input: {
    '& .MuiChip-root': {
      backgroundColor: '#E0245E',
      color: 'black'
    },
    '& .MuiInputBase-input': {
      color: '#a3c4bc',
    },
    '& label.Mui-focused': {
      color: '#04a777',
    },
    '& .MuiInputLabel-root': {
      color: '#c5d2e8',
    },
    '& .MuiAutocomplete-inputRoot': {
      paddingTop: '2em',
      paddingBottom: '1em'
    }
  },
  textArea: {
    '& .MuiFilledInput-inputMultiline': {
      color: '#a3c4bc',
    },
    '& label.Mui-focused': {
      color: '#04a777',
    },
  },
  regular: {
    '& .MuiInputBase-input': {
      boxShadow: '1px 1px 10px #252744',
      borderBottom: '1px solid white',
    },
  },
  // Three containers in the form to organize the page
  info: {
    width: '100%',
    padding: theme.spacing(0),
    margin: '1em',
  },
  locate: {
    width: '47%',
    margin: '1em',
    padding: '0px',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: theme.spacing(10),
    },
  },
  icon:{
    marginRight: '0.5em'
  },
  tag: {
    width: '45%',
    margin: '1em',
    marginTop: '4.25em',
    padding: '0px',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: theme.spacing(10),
    }
  },
  // Button
  submit: {
    marginTop: '3em',
    alignSelf: 'center',
    backgroundColor: '#04a777',
    '&:hover': {
      background: "#a3c4bc",
    },
    fontWeight: 'bold'
  },
  // Error message
  confirm: {
    textAlign: 'center',
    color: 'green',
  },
  error: {
    textAlign: 'center',
    color: '#FF00FF',
  }
}));

export default useStyles;
