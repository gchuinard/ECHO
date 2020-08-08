// Toutes les actions disponibles dans l'application, centralisées.

// TAGS
export const ALL_TAGS = 'actions/ALL_TAGS';
export const GET_ALL_TAGS = 'actions/GET_ALL_TAGS';
export const GET_TAG_PAGE = 'actions/GET_TAG_PAGE';
export const GET_ECHOS_BY_TAGS='actions/GET_ECHOS_BY_TAGS';

// CONNEXION
export const HANDLE_CONNEXION_USER_INPUT = 'actions/HANDLE_CONNEXION_USER_INPUT';
export const HANDLE_USER_CONNEXION = 'actions/HANDLE_USER_CONNEXION';
export const CREATE_USER_SESSION = 'actions/CREATE_USER_SESSION';
export const CHECK_USER_CONNEXION = 'actions/CHECK_USER_CONNEXION'
export const CATCH_CONNEXION_ERRORS = 'actions/CATCH_CONNEXION_ERRORS'

//DISCONNEXION
export const HANDLE_DECONNEXION = 'actions/HANDLE_DECONNEXION';

// REGISTER
export const HANDLE_USER_REGISTER = 'actions/HANDLE_USER_REGISTER';
export const HANDLE_REGISTER_USER_INPUT = 'actions/HANDLE_REGISTER_USER_INPUT';
export const CATCH_REGISTER_ERRORS = 'actions/CATCH_REGISTER_ERRORS';

// REDIRECT
export const REDIRECT = 'actions/REDIRECT';
export const SWITCH_REDIRECT = 'actions/SWITCH_REDIRECT';

// ECHOS
export const GET_ALL_ECHOS = 'actions/GET_ALL_ECHOS';
export const LOAD_ECHOS = 'actions/LOAD_ECHOS';
export const REMOVE_ECHOS = 'actions/REMOVE_ECHOS'

export const SHOW_AN_ECHO = 'actions/SHOW_AN_ECHO';
export const DISPLAY_ECHO = 'actions/DISPLAY_ECHO';
export const GET_ECHO_ID = 'actions/GET_ECHO_ID';
export const HIDE_ECHOS = 'actions/HIDE_ECHOES';

// ECHOS FILTER
export const DISPLAY_ECHOS_BY_DATE = 'actions/DISPLAY_ECHOS_BY_DATE';
export const DISPLAY_ECHOS_BY_LIKES = 'actions/DISPLAY_ECHOS_BY_LIKES'

//* ECHOS CREATION
export const HANDLE_ECHO_CREATION_INPUT = 'actions/HANDLE_ECHO_CREATION_INPUT';
export const GENERATE_ECHO = 'actions/GENERATE_ECHO';
export const CATCH_ECHO_CREATION_ERROR = 'actions/CATCH_ECHO_CREATION_ERROR';
export const CONFIRM_ECHO_CREATION = 'actions/CONFIRM_ECHO_CREATION'


// LOCATION
export const LOCALIZE_USER = 'actions/LOCALIZE_USER';

//COOKIES
export const COOKIES_CHECK = 'actions/COOKIES_CHECK';

//SUBSCRIBE 
export const HANDLE_SUBSCRIBE = 'actions/HANDLE_SUBSCRIBE';

// CONTACT FORM 
export const HANDLE_CONTACT_FORM_INPUT = 'actions/HANDLE_CONTACT_FORM_INPUT';
export const HANDLE_SUBMIT_CONTACT_FORM = 'actions/HANDLE_SUBMIT_CONTACT_FORM';
export const HANDLE_ERRORS_ON_CONTACT = 'actions/HANDLE_ERRORS_ON_CONTACT';
export const SEND_CONFIRMATION_MESSAGE = 'actions/SEND_CONFIRMATION_MESSAGE';

//VOTE 
export const HANDLE_CLICK_ON_VOTE = 'actions/HANDLE_CLICK_ON_VOTE';
export const ACTUALIZE_VOTE_STATUS= 'actions/ACTUALIZE_VOTE_STATUS';
// PROFILE
export const GET_USER_INFO = 'actions/GET_USER_INFO';
export const DISPLAY_USER_INFO = 'actions/DISPLAY_USER_INFO';

// NOTIFICATIONS 
export const LOAD_NOTIFICATIONS='actions/LOAD_NOTIFICATIONS';
export const GET_ALL_NOTIFICATIONS = 'actions/GET_ALL_NOTIFICATIONS';
export const SHOW_NOTIFS = 'actions/SHOW_NOTIFS';
export const DISPLAY_NOTIFICATIONS = 'actions/DISPLAY_NOTIFICATIONS';
export const HIDE_NOTIFICATIONS = 'actions/HIDE_NOTIFICATIONS';
export const HANDLE_STATUS_CHANGE='actions/HANDLE_STATUS_CHANGE';


// ACTIONS CREATORS 
export const changeInput = (event, name, type) => {
  return { type : type , value: event.target.value, name }
}
