import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  main: {
    height: "100vh",
    marginTop: "6em",
    paddingTop: "2em",
    borderLeft: "1px solid #252744",
    borderRight: "1px solid #252744"
  },

  input: {
    "& .MuiInputBase-input": {
      color: "#a3c4bc"
    },
    "& label.Mui-focused": {
      color: "#04a777"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#04a777"
      }
    },
    "& .MuiInputLabel-root": {
      color: "grey"
    },
    [`& fieldset`]: {
      borderColor: "grey"
    }
  },
  contact: {
    marginTop: "9em",
    display: "flex",
    width: "auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #04a777",
    borderRadius: "4px",
    padding: "2em",
    backgroundColor: "#252744",
    boxShadow: "1px 1px 10px #252744",
    color: "#a3c4bc",

    [theme.breakpoints.down("sm")]: {
      padding: "0em",
      marginTop: theme.spacing(10)
    }
  },
  subtitle: {
    fontFamily: "Roboto",
    padding: "0.5em"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    backgroundColor: "#252744",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  submit: {
    marginTop: "1em",
    alignSelf: "center",
    width: "70%",
    backgroundColor: "#04a777",
    "&:hover": {
      background: "#a3c4bc"
    },
    fontWeight: "bold"
  },
  textArea: {
    ".MuiOutlinedInput-multiline": {
      width: "100%",
      color: "white"
    },

    "& .MuiOutlinedInput-inputMultiline": {
      color: "#a3c4bc"
    },
    "& label.Mui-focused": {
      color: "#04a777"
    },
    "& .MuiOutlinedInput-multiline": {
      "&.Mui-focused fieldset": {
        borderColor: "#04a777"
      }
    },
    "& .MuiInputLabel-root": {
      color: "grey"
    },
    [`& fieldset`]: {
      borderColor: "grey"
    },

    marginBottom: "2em"
  },
  confirm: {
    textAlign: "center",
    color: "green"
  },
  error: {
    textAlign: "center",
    color: "#FF00FF"
  }
}));

export default useStyles;
