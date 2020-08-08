import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      width: 500,
    },
    main:{
        height: '100%',
        marginTop: "6em",
        borderLeft: '1px solid #252744',
        borderRight: '1px solid #252744'
    },
    title:{
        marginTop: '1em',
        textAlign: 'center',
        color: 'white'
    },
    card:{
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
    tags:{
        backgroundColor: '#E0245E',
        marginLeft: '1.5em',
        marginBottom: '1em'
      },
    icon:{
        color:'white',
        marginRight: '0.25em'
    },
    flipFeature:{
        display: 'none'
    },
    divider:{
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
    '& path':{
        color: '#a3c4bc'
    },
    '& .MuiExpansionPanelSummary-expandIcon.Mui-expanded':{
        margin: '0',
        transform: 'rotate(0deg)',
        '& path':{
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
    actions:{
        display:'flex',
        justifyContent: 'space-between'
    },
    userPanel:{
        marginTop: '2em',
        width: '100%',
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#122730',
        padding: '0em',
    },
    filters:{
        margin: '0em',
        padding: '0em',
        width: '100%'
    },
    add:{
        margin: '0em',
        padding: '0em',
        display:'flex',
        width: '50%',
        flexDirection: 'row-reverse'
    }
  }));


  export default useStyles;
