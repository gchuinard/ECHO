import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Import MUI

import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Face from '@material-ui/icons/Face';
import ExploreIcon from '@material-ui/icons/Explore';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import {
  GET_TAG_PAGE,
  GET_ECHO_ID,
  SHOW_NOTIFS,
  DISPLAY_ECHOS_BY_DATE,
  HANDLE_STATUS_CHANGE,
  DISPLAY_ECHOS_BY_LIKES
} from 'src/store/actions';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import LinearProgress from '@material-ui/core/LinearProgress';

// Redux & styles
import styles from './homeStyles.js';
import { Link } from 'react-router-dom';
import Map from 'src/components/GoogleApi';

const useStyles = styles;

const Home = () => {
  // Style + Utils
  const classes = useStyles();
  const dispatch = useDispatch();
  // List of echos + status
  const echoList = useSelector(state => state.echos.echos);
  const showEchos = useSelector(state => state.echos.display);
  // List of notifications + status
  const news = useSelector(state => state.notifications.news);
  const notifications = useSelector(state => state.notifications.notifications);
  let showNotifs = useSelector(state => state.notifications.display);
  // Connexion status
  const isConnected = useSelector(state => state.connexion.isConnected);

  // Notifications definition
  let notifs = '';

  if (notifications === undefined) {
    notifs = <LinearProgress color="primary" />;
  } else {
    notifs = notifications.map(notification => {
      return (
        <Container key={`notification-${notification.id}`}>
          <Card
            key={notification.id}
            className={classes.card}
            onClick={(
              _,
              notifId = notification.id,
              id = notification.echoPost.id
            ) => dispatch({ type: HANDLE_STATUS_CHANGE, notifId, id })}
          >
            <Link to={`/echo/${notification.echoPost.id}`}>
              <CardHeader
                avatar={
                  !notification.isValidated && (
                    <Badge
                      className={classes.badge}
                      badgeContent="new"
                      color="secondary"
                    />
                  )
                }
                title={notification.echoPost.title}
                subheader={`posté par ${notification.echoPost.user.username}`}
              />
            </Link>
          </Card>
        </Container>
      );
    });
  }

  // Echos Definition

  let allEchos = <Container>Echos en chargement</Container>;

  if (echoList !== undefined) {
    allEchos = echoList.map(echo => {

      const long = Number(echo.longitude)
      const lat = Number(echo.latitude);


      const mapProps = {
        options: {
          center: (new google.maps.LatLng(lat, long)),
          zoom: 15,
        },
      }
      // Tags map inside a given echo
      const tagList = echo.tags;

      const AlltagList = tagList.map(tag => {
        return (
          <Link to={`/tag/${tag.id}`} key={`tag-${tag.id}`}>
            <Chip
              key={tag.id}
              className={classes.tags}
              size="small"
              label={tag.name}
              clickable
              onClick={(_, currentTag = tag.name, id = tag.id) => dispatch({ type: GET_TAG_PAGE, currentTag, id })}
            />
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
                <Face aria-label="user" className={classes.userAvatar} />
              }
              title={echo.title}
              subheader={`${echo.user.username} le ${echo.createdAt}`}
            />
          </Link>

          <Container>{AlltagList}</Container>

          {
            // Location for future <CardMedia/> -> v1.5
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
            //Localization panel
          }

          <ExpansionPanel className={classes.locationPanel}>
            <ExpansionPanelSummary
              expandIcon={<ExploreIcon color="inherit" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{echo.adress}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.panelMap}>
              <Map {...mapProps}></Map>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          {
            // action panel for vote + comments
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
      <Container className={classes.userPanel}>
        <Container className={classes.filters}>
          <Tooltip title="Echos les plus récents">
            <IconButton
              onClick={() => dispatch({ type: DISPLAY_ECHOS_BY_DATE })}
            >
              <CalendarTodayIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Echos les plus aimés">
            <IconButton
              onClick={() => dispatch({ type: DISPLAY_ECHOS_BY_LIKES })}
            >
              <FavoriteIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
        </Container>
        {isConnected && (
          <Container className={classes.add}>
            <Tooltip title="Mes notifications">
              <IconButton>
                <Badge badgeContent={news} color="secondary">
                  <BookmarkBorderIcon
                    onClick={() => dispatch({ type: SHOW_NOTIFS })}
                    className={classes.icon}
                  />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Publier votre echo">
              <Link to="/create-echo">
                <IconButton>
                  <AddCircleOutlineIcon className={classes.icon} />
                </IconButton>
              </Link>
            </Tooltip>
          </Container>
        )}
      </Container>
      <Divider className={classes.divider} />
      {showNotifs && <Container>{notifs}</Container>}
      {showEchos && allEchos}
    </Container>
  );
};
export default Home;
