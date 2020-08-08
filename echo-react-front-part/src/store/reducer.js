import { combineReducers } from 'redux';

// import off all reducers used in the app
import connexionReducer from 'src/store/connexion/reducer';
import registerReducer from 'src/store/register/reducer';
import tagsReducer from 'src/store/handletags/reducer';
import echoReducer from 'src/store/echos/reducer';
import showEchoReducer from 'src/store/showEcho/reducer';
import redirectionReducer from 'src/store/redirection/reducer';
import contactFormReducer from 'src/store/contact/reducer';
import userReducer from 'src/store/user/reducer';
import creationReducer from 'src/store/create/reducer';
import notificationReducer from 'src/store/notification/reducer';
import echosByTagReducer from 'src/store/echosByTags/reducer';


// Associating all reducers with their given keys

export default combineReducers({
  connexion: connexionReducer,
  register: registerReducer,
  tags: tagsReducer,
  echos: echoReducer,
  showEcho: showEchoReducer,
  redirect: redirectionReducer,
  contact: contactFormReducer,
  user: userReducer,
  create: creationReducer,
  notifications: notificationReducer,
  echosByTag: echosByTagReducer
});
