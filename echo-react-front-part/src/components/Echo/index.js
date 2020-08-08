import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Import MUI
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Face from '@material-ui/icons/Face';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import { GET_TAG_PAGE, HANDLE_CLICK_ON_VOTE } from 'src/store/actions';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Map from 'src/components/GoogleApi';

// Redux & styles
import styles from './echoStyles.js';

const useStyles = styles;

const Echo = () => {
  const echoSimple = useSelector((state) => state.showEcho.echo);
  const classes = useStyles();
  const dispatch = useDispatch();
  const isVoted = useSelector((state) => state.showEcho.isVoted);

  if (echoSimple === undefined) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  const long = Number(echoSimple.longitude);
  const lat = Number(echoSimple.latitude);

  const mapProps = {
    options: {
      center: (new google.maps.LatLng(lat, long)),
      zoom: 15,
    },
  };

  const commentaries = echoSimple.commentaries;

  const tags = echoSimple.tags;
  const user = echoSimple.user;

  const comments = commentaries.map(com => {
    return (
      <Container className={classes.commentsStyles}>
        <CardHeader
          avatar={<Face aria-label="user" className={classes.userAvatar} />}
          subheader={`${com.user.username} le ${com.createdAt}`}
        />
        <Container>
          <CardContent>
            <Typography
              className={classes.icon}
              variant="body2"
              component="p"
            >
              {com.content}
            </Typography>
          </CardContent>
        </Container>
      </Container>
    );
  });

  return (
    <Container maxWidth="sm" className={classes.main}>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Face aria-label="" className={classes.userAvatar} />}
          title={echoSimple.title}
          subheader={user.username}
        />

        {tags.map((tag) => (
          <Link key={`echoLink-${echoSimple.id}`} to={`/tag/${tag.id}`}>
            <Chip
              key={tag.id}
              className={classes.tags}
              size="small"
              label={tag.name}
              clickable
              onClick={(_, currentTag = tag.name, id = tag.id) => dispatch({ type: GET_TAG_PAGE, currentTag, id })}
            />
          </Link>
        ))}

        <Container>
          <CardContent>
            <Typography
              className={classes.icon}
              variant="body2"
              component="p"
            >
              {echoSimple.content}
            </Typography>
          </CardContent>
        </Container>
        <Divider className={classes.divider} />
        {
          // Localization panel
        }
        <Typography className={classes.adress} variant="subtitle2">
          {echoSimple.adress}
        </Typography>
        <Divider className={classes.divider} />
        <Container className={classes.mapcontainer}>
          <Map {...mapProps} />
        </Container>
        <Divider className={classes.divider} />
        <IconButton
          aria-label="comments"
          disabled={true}
          className={classes.flipFeature}
        >
          <ChatBubbleOutlineIcon className={classes.icon} />
          <Typography className={classes.icon}>
            {echoSimple.comments}
          </Typography>
        </IconButton>
        <Divider className={classes.flipFeature} />
        {comments}
        <Divider className={classes.divider} />
        <Tooltip title="Cet echo vous a plu ? Votez pour lui">
          {isVoted ? (
            <IconButton
              aria-label="comments"
              onClick={(_, id = echoSimple.id) => dispatch({ type: HANDLE_CLICK_ON_VOTE, id })}
            >
              <FavoriteIcon className={classes.icon} />
              <Typography className={classes.icon}>
                {echoSimple.vote}
              </Typography>
            </IconButton>
          ) : (
            <IconButton
              aria-label="comments"
              onClick={(_, id = echoSimple.id) => dispatch({ type: HANDLE_CLICK_ON_VOTE, id })}
            >
              <FavoriteBorderIcon className={classes.icon} />
              <Typography className={classes.icon}>
                {echoSimple.vote}
              </Typography>
            </IconButton>
          )}
        </Tooltip>
      </Card>
    </Container>
  );
};

export default Echo;
