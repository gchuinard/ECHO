import React from "react";

// Import MUI

import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Chip from "@material-ui/core/Chip";
import Face from "@material-ui/icons/Face";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import Button from "@material-ui/core/Button";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import LinearProgress from "@material-ui/core/LinearProgress";

// Utils
import { Redirect } from "react-router-dom";
import styles from "./profileStyle.js";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  const useStyles = styles;
  const classes = useStyles();

  const redirection = useSelector(state => state.redirect.redirect);
  const user = useSelector(state => state.user);
  // Map to get tags associated to the user
  const tags = user.tags.map(tag => (
    <Chip key={`tag-${tag.id}`} className={classes.tags} size="small" label={tag.name} />
  ));
  // Map to get echos associated to the user

  const echos = user.echos.map(echo => {
    return (
      <Card key={echo.id} className={`${classes.card} ${classes.echo}`}>
        <CardHeader
          title={echo.title}
          subheader={`Posté le ${echo.createdAt}`}
        />
        <CardContent className={classes.echoContent}>
          <FavoriteIcon className={classes.icon} />
          <Typography variant="body2" component="p">
            {echo.vote}
          </Typography>

          <ChatBubbleOutlineIcon className={classes.flipFeature} />
          <Typography className={classes.flipFeature} variant="body2" component="p">
            {echo.comments}
          </Typography>
        </CardContent>
      </Card>
    );
  });

  if (user.username === "") {
    return (
      <Container>
        <LinearProgress color="primary" />
        <Typography className={classes.loader} variant="subtitle2" component="h6">Profil en cours de chargement</Typography>
      </Container>
    );
  } else {
    return (
      <Container className={classes.main}>
        {/* {redirection && <Redirect to="/" />} */}
        {/* User container */}
        <Container className={classes.profile}>
          <Card className={`${classes.card} ${classes.profileCard}`}>
            <CardHeader
              avatar={
                user.avatar === null ? (
                  <Face aria-label="user" className={classes.userAvatar} />
                ) : (
                  user.avatar
                )
              }
              title={user.username}
              subheader={user.role}
            />


            <CardContent className={classes.description}>
              <Typography className={classes.flipFeature} variant="body2" component="p">
                Mon adresse : {user.adress}
              </Typography>
              <Button className={classes.flipFeature}  disabled>
                Modifier mes infos
              </Button>
            </CardContent>
          </Card>
        </Container>

        {/* End User container */}
        {/* Tags container */}
        <Container className={classes.userTags}>
          <Card className={`${classes.card} ${classes.profileCard}`}>
            <CardHeader
              avatar={<FavoriteIcon aria-label="followed-tags" />}
              title="Mes tags"
            />

            <CardContent className={classes.description}>
              <Typography variant="body2" component="p">
                Vous suivez actuellement :
              </Typography>
              <Container className={classes.tagbox}>{tags}</Container>
            </CardContent>
          </Card>
        </Container>
        {/* End Tags container */}
        {/* Echo container */}
        <Container className={classes.userEcho}>
          <Card className={`${classes.card} ${classes.echoCard}`}>
            <CardHeader
              avatar={<RecordVoiceOverIcon aria-label="user-echos" />}
              title="Mes echos"
            />

            <CardContent className={classes.description}>
              <Typography variant="body2" component="p">
                Précédemment postés :
              </Typography>
              {/* Echos posted by user */}
              {echos}
              {/* End Echos posted by user */}
            </CardContent>
          </Card>
        </Container>
        {/* End echo container */}
      </Container>
    );
  }
};

export default Profile;
