import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
  },
  badge:{
    margin: '1em'
  },
  main: {
    marginTop: '95px',
    height: '100%',
    borderLeft: '1px solid #252744',
    borderRight: '1px solid #252744',
    [theme.breakpoints.down('sm')]: {
      boxShadow: '0px 0px 0px #04a777',
    }
  },
  google: {

  },
  card: {
    marginTop: '1em',
    backgroundColor: '#252744',
    color: 'white',
    '& .MuiTypography-colorTextSecondary':{
      color:'grey'
    },
    '& .MuiCardHeader-title':{
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
    margin: '3px'
  },
  divider: {
    marginTop: '1em',
    backgroundColor: '#3b3e6d',
  },
  margin: {
    height: theme.spacing(3),
  },
  panelMap: {
    display: 'flex',
    flexDirection: 'center',
    //flexDirection: 'column'
    height: '16em',
  },
  locationPanel: {
    '& .MuiExpansionPanelDetails-root':{
      padding: 0,
      [theme.breakpoints.up('sm')]: {
        marginLeft: '1.3em',
      },
    },
    '& path': {
      color: '#a3c4bc'
    },
    '& .MuiExpansionPanelSummary-expandIcon.Mui-expanded':{
      margin: '0',
      transform: 'rotate(0deg)',
      '& path': {
        margin: '0',
        color: '#04a777'
      }
    },
    backgroundColor: '#252744',
    color: 'white',
    margin: '0',
  },
  localization: {
    padding: '1em'
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  userPanel: {
    backgroundColor: '#04a777',
    marginTop: '2em',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0em',
    borderRadius: '4px',
  },
  filters: {
    margin: '0em',
    padding: '0em',
    width: '100%',
    backgroundColor: '#04a777',
    borderRadius: '4px'
  },
  add: {
    margin: '0em',
    padding: '0em',
    display:'flex',
    width: '50%',
    flexDirection: 'row-reverse'
  },
  flipFeature:{
    display: 'none'
  }
}));


  export default useStyles;
