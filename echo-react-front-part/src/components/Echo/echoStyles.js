import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500
  },
  main: {
    marginTop: '95px',
    height: '100vh',
    borderLeft: '1px solid #252744',
    borderRight: '1px solid #252744'
  },

  card: {
    marginTop: '1em',
    backgroundColor: '#252744',
    color: 'white',
    '& .MuiTypography-colorTextSecondary': {
      color: 'grey'
    },
    '& .MuiCardHeader-title': {
      fontSize: '1em'
    }
  },
  tags: {
    backgroundColor: '#E0245E',
    marginLeft: '1.5em',
    marginBottom: '1em'
  },
  icon: {
    color: 'white',
    marginRight: '0.25em'
  },
  divider: {
    backgroundColor: '#3b3e6d'
  },
  margin: {
    height: theme.spacing(3)
  },
  locationPanel: {
    '& path': {
      color: '#a3c4bc'
    },
    '& .MuiExpansionPanelSummary-expandIcon.Mui-expanded': {
      margin: '0',
      transform: 'rotate(0deg)',
      '& path': {
        margin: '0',
        color: '#04a777'
      }
    },
    backgroundColor: '#252744',
    color: 'white',
    margin: '0'
  },
  localization: {
    padding: '1em'
  },
  adress: {
    margin: '1em',
    fontSize: '1em'
  },
  mapcontainer: {
    padding: '0',
    marginBottom: '1em',
    marginTop: '1em',
    marginLeft: '1em'
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  commentsStyles: {
    display: 'none',
    width: '90%',
    padding: 0,
    margin: '20px auto',
    backgroundColor: '#505269',
    borderRadius: 5
  },
  flipFeature: {
    display: 'none'
  }
}));

export default useStyles;
