import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  desktopMenuItem: {
    borderRadius: '1em',
    '&:hover':{
      color: '#04a777',
    },
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline',
      paddingLeft: '1em'
    }
  },
  toolbar: {
    backgroundColor: '#131523',
    borderBottom: "1px solid #131423",
    boxShadow: "0px -8px 23px #a3c4bc",
  },
  connectedUser: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '0'
  },
  greetings:{
    display: 'inline-block',
    paddingTop: '1em',
    paddingRight: '1em',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
}));
export default useStyles;
