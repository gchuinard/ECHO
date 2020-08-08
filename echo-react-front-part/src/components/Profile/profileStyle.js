import { makeStyles } from '@material-ui/core/styles';
import { textAlign } from '@material-ui/system';


const useStyles = makeStyles(theme => ({
  main:{
    height: '100%',
    borderLeft: '1px solid #252744',
    borderRight: '1px solid #252744',
    [theme.breakpoints.up('md')]: {
        display:'flex',
        flexWrap: 'wrap',
        width: '100%',
  }},
  loader:{
    margin: '1em',
    color: 'white',
    textAlign: 'center'
  },
  profile:{
    [theme.breakpoints.up('md')]: {
        width: '44.75%',
        padding: '0em',
        marginTop: theme.spacing(10)
  }},
  profileCard:{
    '& .MuiCardContent-root:last-child':{
      paddingBottom: '15em'
    },
    height: '20em'
  },
  tagbox:{
    marginTop: '1em'
  },
  userTags: {
    [theme.breakpoints.up('md')]: {
        width: '44.75%',
        padding: '0em',
        marginTop: theme.spacing(10)
  }},
  card:{
    display:'flex',
    flexDirection:  'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '1em',
    marginBottom: '1em',
    backgroundColor: '#252744',
    color: 'white',
    '& .MuiTypography-colorTextSecondary':{
      color:'grey'
    },
    '& .MuiCardHeader-title':{
      fontSize: '1em'
    }
  },
  description:{
      width: '100%',
      borderTop: '1px solid #04a777',
      display: 'flex',
      flexDirection:  'column',
      alignItems: 'center',
      justifyContent: 'space-between',

  },
  modify:{
    margin: '1em',
    marginTop: '7.5em',
    backgroundColor: '#04a777'
  },
  tags:{
      backgroundColor: '#E0245E',
      marginLeft: '1.5em',
      marginBottom: '1em'
  },
  userAvatar:{
    height: '3em',
    width: '100%'
  },
  echo:{
      alignItems: 'flex-start',
      width: '80%',
      backgroundColor: 'black'
  },
  icon:{
    marginRight: '0.5em'
  },
  echoContent:{
      width: '20%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'self-end'
  },
  flipFeature: {
    display:'none'
  }
  
  
  
}));

export default useStyles;
