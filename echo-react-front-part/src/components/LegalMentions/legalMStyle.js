import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    container: {
        marginTop: '95px',
        color: 'white',
        textAlign: 'center',
        borderLeft: '1px solid #252744',
        borderRight: '1px solid #252744'
    },
    resume:{
        fontSize: '1em',
        marginLeft: '1em',
        marginRight: '1em',

    },
    divider:{
        margin: '1em',
        padding: '0.5em',
        backgroundColor: '#252744'
    },
    title:{
        padding: '2em',
        color:'#fff'

    }, 
    subtitle:{
        marginTop: '1em',
        fontSize: '1.2em',
        color:'#04a777'

    }, 
    paragraph:{
        fontFamily:'Roboto',
        letterSpacing: '0.5px',
        textAlign: 'left',
        marginLeft: '1em',
        marginRight: '1em',
        display:'block',
        width: '94%',
        padding: '0.5em',
    }
  }));


  export default useStyles;
