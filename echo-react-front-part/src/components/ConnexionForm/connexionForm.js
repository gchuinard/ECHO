import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  input: {
    '& .MuiInputBase-input': {
      color:'#a3c4bc',
    },
    '& label.Mui-focused': {
      color: '#04a777',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#04a777',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'grey'
    },
    [`& fieldset`]: {
      borderColor: 'grey'
    },
  },
  main: {
    height: "100%",
    marginTop: "6em",
    paddingTop: "2em",
    borderLeft: "1px solid #252744",
    borderRight: "1px solid #252744"
  },
  connexion: {
    marginTop: "3em",
    display: 'flex',
    width: "auto",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #04a777',
    borderRadius: '4px',
    padding: '2em',
    backgroundColor: '#252744',
    boxShadow: '1px 1px 10px #252744',
    color: '#a3c4bc',
    height: '70%',

    [theme.breakpoints.down('sm')]: {
      padding: '2em',
      margin: 'auto',
      width: '90%',
      marginTop: theme.spacing(10),
  }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#04a777',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '1em'
  },
  submit: {
    alignSelf: 'center',
    width: '70%',
    backgroundColor: '#04a777',
    '&:hover': {
      background: "#a3c4bc",
   },
   fontWeight: 'bold',
   marginTop: '1em',
   marginBottom: '1em'
  },
  links: {
    width: '100%',
    color: '#04a777',
    '&:hover': {
      color: "#a3c4bc",
   },
  },
  linkss: {
    width: '100%',
    color: '#04a777',
    '&:hover': {
      color: "#a3c4bc",
  },
},
error:{
  color: '#FF00FF',
  marginTop: '0.5em',
  textAlign: 'center'
}
}));


export default useStyles;
