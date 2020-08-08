import React from "react";
import { useSelector, useDispatch } from "react-redux";
// Import MUI

import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Face from "@material-ui/icons/Face";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import {
  GET_TAG_PAGE,
  GET_ECHO_ID,
} from "src/store/actions";
import Tooltip from "@material-ui/core/Tooltip";
import LinearProgress from "@material-ui/core/LinearProgress";

// Redux & styles
import styles from "./TagPageStyle";
import { Link } from "react-router-dom";

const useStyles = styles;

const Tagpage = () => {


  //Style + Utils
  const classes = useStyles();
  const dispatch = useDispatch();
  // List of echos + status
  const echoList = useSelector(state => state.echosByTag.echos);
  const title = useSelector(state => state.echosByTag.title);

  // Echos Definition
 

  if (echoList === undefined) {
    return <LinearProgress></LinearProgress>
  }

  let allEchos = <Container></Container>


  if (echoList !== undefined) {

    allEchos = echoList.map(echo => {
      // Tags map inside a given echo
      const tagList = echo.tags;

      const AlltagList = tagList.map(tag => {
        return (
          <Link to={`/tag/${tag.id}`}>
            <Chip
              key={tag.id}
              className={classes.tags}
              size="small"
              label={tag.name}
              clickable
              onClick={(_, currentTag = tag.name, id = tag.id) =>
                dispatch({ type: GET_TAG_PAGE, currentTag, id })
              }
            ></Chip>
          </Link>
        );
      });

      // Generate a card for each echo
      return (
        <Card
          key={echo.id}
          onClick={(event, id = echo.id) => dispatch({ type: GET_ECHO_ID, id })}
          className={classes.card}
        >
          <Link to={`/echo/${echo.id}`}>
            <CardHeader
              avatar={
                <Face aria-label="user" className={classes.userAvatar}></Face>
              }
              title={echo.title}
              subheader={'Posté par ' + echo.user.username + ", le " + echo.createdAt}
            />
          </Link>

          <Container>{AlltagList}</Container>

          {
            //Location for future <CardMedia/> -> v1.5
          }

          {echo.content && (
            <Container>
              <Divider className={classes.divider}></Divider>
              <CardContent>
                <Typography
                  className={classes.icon}
                  variant="body2"
                  component="p"
                >
                  {echo.content}
                </Typography>
              </CardContent>
            </Container>
          )}

          <Divider className={classes.divider}></Divider>


          {
            //action panel for vote + comments
          }
          <div>
            <CardActions className={classes.actions}>
              <IconButton disabled={true} aria-label="add to favorites">
                <FavoriteIcon className={classes.icon} />
                <Typography className={classes.icon}>{echo.vote}</Typography>
              </IconButton>

              <IconButton className={classes.flipFeature} aria-label="comments">
                <ChatBubbleOutlineIcon className={classes.icon} />
                <Typography className={classes.icon}>
                  {echo.comments}
                </Typography>
              </IconButton>
            </CardActions>
          </div>
        </Card>
      );
    });
  }

  // Component
  return (
    <Container maxWidth="sm" className={classes.main}>
      <Typography className={classes.title} variant='h5'>{`Echos pour ${title}`}</Typography>
      {allEchos}
    </Container>
  );
};

export default Tagpage;
