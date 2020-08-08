import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    list: {
      width: 300,
      backgroundColor: '#131523',
      height: '100vh',
      color: 'white',
      borderLeft: '1px solid white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
        marginBottom: '2em',
        paddingTop: '1em',
        borderBottom: '1px solid #04a777',
        fontSize: '1.5em',
    },
    mobileMenuItem:{
        padding: '1em',
        borderRadius: '1em',
        '&:hover': {
            color: '#04a777',
        }
    },
    footer: {
        padding: '1em',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: '1em',
    },
    links:{
        fontFamily:'Roboto',
        marginLeft: '0.5em',
        '&:hover':{
            color:'#04a777'
        }
    },
    disconnect:{
        display:'flex',
        flexDirection: 'flex-end',
        padding: '0.5em',
        alignItems: 'center',
        marginTop: 'auto'
    },
    disconnectIcon:{
        marginRight: '0.5em'
    }
  }));

  export default useStyles;
