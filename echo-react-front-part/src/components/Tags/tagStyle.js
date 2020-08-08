import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  root: {
  display:'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'


  },

  title: {
    display: 'flex',
    color: 'white',
    width: '100%',
    marginTop: '5em',
    marginBottom: '1.5em',
    justifyContent: 'center',
    borderBottom: "2px solid white",
    paddingBottom: "1.75em",

  },

  chips: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .MuiChip-root' : {
      // height: '50px',
      // width: '22%',
      color: 'black',
      fontSize: '1em',
      backgroundColor: '#E0245E',
    },
  
  },
  switch:{
    color: 'white'

  },
 
  content:{
    display: 'flex',
    flexWrap: 'wrap',
  }
}));

export default useStyles;
