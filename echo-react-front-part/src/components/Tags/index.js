// Import
import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Divider from "@material-ui/core/Divider";
import { useSelector, useDispatch } from "react-redux";
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";
import { GET_TAG_PAGE, HANDLE_SUBSCRIBE } from "src/store/actions";
import { useEffect, useRef } from 'react';

// Material-UI Styles

import styles from "./tagStyle.js";

const useStyles = styles;

// Display the Tags components
const Tags = () => {
  const dispatch = useDispatch();
  let tagsList = useSelector(state => state.tags);
  let userSubscribe = useSelector(state => state.user.tags);
  const isConnected = useSelector(state => state.connexion.isConnected);
  const classes = useStyles();
  let [tags, setTags] = React.useState([]);



    onload = () => {
      tagsList.forEach(tag => {
        let found = userSubscribe.find(f => tag.id == f.id)
      if (found) {
          tag.checked = true
      } else {
          tag.checked = false
      }
    })

    tags = [].concat(...tags,...tagsList);

    }

    onload()

    tagsList = tags;




  const chips = tagsList.map(tag => {
    return (
      <Container className={classes.chips}>
        <Link to={`/tag/${tag.id}`}>
          <Chip
            key={tag.id}
            size="medium"
            className={classes.chip}
            label={tag.name + " (" + tag.followers + ")"}
            clickable
            onClick={(_, currentTag = tag.name, id = tag.id) =>
              dispatch({ type: GET_TAG_PAGE, currentTag, id })
            }
          />
        </Link>

        <Switch
          key={tag.name}
          name={tag.name}
          className={classes.switch}
          // Determines if button is switch or not
         //checked={tag.checked}
          // Réalise une action sur changement
          onChange={(_, newValue, name = tag.name, id = tag.id) => {
            let found = tags.find(f => tag.id == f.id)
            if (found) {
          
              tag.checked = newValue
          }
  
            dispatch({ type: HANDLE_SUBSCRIBE, newValue, id });
            
          }}
          color="primary"
          disabled={!isConnected}
        />
      </Container>
    );
  });

  

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h4" gutterBottom className={classes.title}>
        S'abonner à de nouveaux tags
      </Typography>
      {!isConnected && (
        <Typography variant="subtitle2" gutterBottom className={classes.title}>
          Vous devez être inscrit pour suivre nos tags. Néanmoins, rien ne vous
          empêche de cliquer sur le style qui vous intéresse pour y découvrir
          les échos associés.
        </Typography>
      )}

      <Divider light />

      <Container className={`${classes.content}`}>{chips}</Container>
    </Container>
  );
};

export default Tags;
