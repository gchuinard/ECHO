import axios from 'axios';
import Cookies from 'universal-cookie';
import jwt from 'jwt-decode';

import { ALL_TAGS, HANDLE_USER_CONNEXION, HANDLE_USER_REGISTER, GET_ALL_TAGS, LOAD_ECHOS, GET_ALL_ECHOS, CREATE_USER_SESSION, COOKIES_CHECK, CHECK_USER_CONNEXION, HANDLE_DECONNEXION, SWITCH_REDIRECT, CATCH_REGISTER_ERRORS, CATCH_CONNEXION_ERRORS, REDIRECT, HANDLE_SUBMIT_CONTACT_FORM, SEND_CONFIRMATION_MESSAGE, HANDLE_ERRORS_ON_CONTACT, GET_USER_INFO, DISPLAY_USER_INFO, DISPLAY_ECHO, GET_ECHO_ID, GENERATE_ECHO, HANDLE_ECHO_CREATION_INPUT, LOCALIZE_USER, CONFIRM_ECHO_CREATION, CATCH_ECHO_CREATION_ERROR, LOAD_NOTIFICATIONS, GET_ALL_NOTIFICATIONS, SHOW_NOTIFS, REMOVE_ECHOS, DISPLAY_NOTIFICATIONS, HIDE_NOTIFICATIONS, HANDLE_STATUS_CHANGE, HIDE_ECHOS, DISPLAY_ECHOS_BY_DATE, DISPLAY_ECHOS_BY_LIKES, HANDLE_CLICK_ON_VOTE, ACTUALIZE_VOTE_STATUS, GET_TAG_PAGE, GET_ECHOS_BY_TAGS, HANDLE_SUBSCRIBE} from 'src/store/actions';


import Geocode from "react-geocode";
import { object } from 'prop-types';
const urlApi = 'http://127.0.0.1:8001/api'
Geocode.setApiKey(`${process.env.GOOGLE_MAPS_API_KEY}`);
const cookies = new Cookies();
const token = cookies.get("token");


export default store => next => action => {

  function redirect() {
    store.dispatch({ type: REDIRECT });
  }
  
  // eslint-disable-next-line default-case
  switch (action.type) {
    case HANDLE_USER_CONNEXION: {
      if (action.newUser === false) {
        const state = store.getState();
        var username = state.connexion.usernameValue;
        var password = state.connexion.passwordValue;
      } else {
        var { username, password } = action.newUser;
      }

      const connexionRequest = axios.post(`${urlApi}/login`, {
        username: username,
        password: password
      });

      connexionRequest.then(response => {
        // Partie 1 : organise le dispatch de la donnée décodée
        const token = response.data.token;
        (token);
        const tokenDecoded = jwt(token);
        const user = tokenDecoded;
        store.dispatch({ type: CREATE_USER_SESSION, user });
        store.dispatch({type: GET_USER_INFO});

        // Partie 2 : on stocke le JWT pas décodé dans un cookiiie
        const cookies = new Cookies();
        cookies.set("token", token, { path: "/" });
        store.dispatch({ type: REDIRECT });
        store.dispatch({ type: SWITCH_REDIRECT });
      });

      connexionRequest.catch(error => {
        const errors = error.response.data;
        store.dispatch({ type: CATCH_CONNEXION_ERRORS, errors });
      });

      break;
    }

    case HANDLE_USER_REGISTER: {
      const state = store.getState();

      const username = state.register.usernameValue;
      const password = state.register.passwordValue;
      const passwordCheck = state.register.passwordCheckValue;
      const email = state.register.emailValue;

      const registerRequest = axios.post(`${urlApi}/registration`, {
        username: username,
        email: email,
        password: password,
        confirmPassword: passwordCheck
      });

      registerRequest.then(response => {
        const newUser = {
          username: username,
          password: password
        };

        store.dispatch({ type: HANDLE_USER_CONNEXION, newUser });
      });

      registerRequest.catch(error => {
        if (error.response.status === 401) {
          //Catch errors
          const errors = error.response.data;
          store.dispatch({ type: CATCH_REGISTER_ERRORS, errors });
        }
        if (error.response.status === 403) {
          const errors = error.response.data.message;
          store.dispatch({ type: CATCH_REGISTER_ERRORS, errors });
        }
      });

      break;
    }

    case HANDLE_SUBMIT_CONTACT_FORM: {
      const state = store.getState();

      const name = state.contact.usernameValue;
      const email = state.contact.emailValue;
      const message = state.contact.message;

      const contactRequest = axios.post(`${urlApi}/user/contact`, {
        name: name,
        email: email,
        message: message
      });

      contactRequest.then(response => {
        const message = response.data;
        store.dispatch({ type: SEND_CONFIRMATION_MESSAGE, message });
        setTimeout(redirect, 3000);
      });

      contactRequest.catch(error => {
        const message = error.response.data;
        store.dispatch({ type: HANDLE_ERRORS_ON_CONTACT, message });
      });
      break;
    }

    case GET_ALL_TAGS: {
      axios.get(`${urlApi}/tag/list`).then(response => {
        const tags = response.data.tags;
        store.dispatch({ type: ALL_TAGS, tags });
      });
      break;
    }

    case LOAD_ECHOS: {
      axios.get(`${urlApi}/echo/list`).then(response => {
        const echos = response.data.echos;
        store.dispatch({ type: GET_ALL_ECHOS, echos });
        store.dispatch({ type: HIDE_NOTIFICATIONS });
      });

      break;
    }

    case COOKIES_CHECK: {
      const cookies = new Cookies();
      const token = cookies.get("token");

      if (token === undefined) {
        store.dispatch({ type: CHECK_USER_CONNEXION });
      } else {
        const tokenDecoded = jwt(token);
        const user = tokenDecoded;

        store.dispatch({ type: CREATE_USER_SESSION, user });
        store.dispatch({ type: GET_USER_INFO});
        store.dispatch({ type: LOAD_NOTIFICATIONS });
        store.dispatch({type: LOAD_ECHOS});
      }
      break;
    }

    case HANDLE_DECONNEXION: {
      axios.get(`${urlApi}/logout`).then(response => {
        if (response.status == "200") {
          const cookies = new Cookies();
          cookies.remove("token");
          store.dispatch({ type: CHECK_USER_CONNEXION });
          store.dispatch({ type: REDIRECT });
          store.dispatch({ type: SWITCH_REDIRECT });
        }
      });
      break;
    }

    case GET_USER_INFO: {
      // Get cookies associated to the connexion
      const cookies = new Cookies();
      const token = cookies.get("token");
      // First request to get the profile
      const userRequest = axios.get(`${urlApi}/user/myprofile`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      userRequest.then(response => {
        // If OK -> do a second request to get echo associated to that user
        const user = response.data;
        const id = user.id;

        const echoRequest = axios.get(`${urlApi}/user/${id}/echo/list`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        echoRequest.then(response => {
          const echos = response.data;
          // Display both info to user reducer
          store.dispatch({ type: DISPLAY_USER_INFO, user, echos });
        });

        // echoRequest.catch(error => {
        //   (error.response);
        //   //TODO
        // });
      });

      // userRequest.catch(error => {
    
      //   //TODO
      // });
      break;
    }

    case GET_ECHO_ID: {
      const echoToReceive = action.id;

      axios.get(`${urlApi}/echo/${echoToReceive}/show`).then(response => {
        const echo = response.data.echo;

        axios
        .get(`${urlApi}/echo/${action.id}/vote/check`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
          const isVoted = response.data;
        store.dispatch({ type: DISPLAY_ECHO, echo, isVoted });
        
        }).catch((error => error.response ));
        
        store.dispatch({ type: DISPLAY_ECHO, echo});
      });
      break;
    }

    case GENERATE_ECHO: {
      const state = store.getState();
  
      const cookies = new Cookies();
      const token = cookies.get("token");

      axios
        .post(
          `${urlApi}/echo/add`,
          {
            echoNew: {
              title: state.create.title,
              content: state.create.content,
              image: state.create.image,
              adress: state.create.adress,
              latitude: state.create.latitude,
              longitude: state.create.longitude,
              tags: state.create.tags
            }
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )

        .then(response => {
          store.dispatch({ type: CONFIRM_ECHO_CREATION });
          store.dispatch({type: LOAD_ECHOS});
          setTimeout(redirect, 3000);
          store.dispatch({ type: SWITCH_REDIRECT });
        })

        .catch(error => {
          let message = error.response.data;
          if (typeof message !== "string")
          {
            if (typeof message === "object" && Object.values(message).length > 0)
            {
              message = Object.values(message)[0];
            }
            else
            {
              message = message.toString();
            }
          }
            store.dispatch({ type: CATCH_ECHO_CREATION_ERROR, message });
        });

      break;
    }

    case LOAD_NOTIFICATIONS: {
      axios
        .get(`${urlApi}/user/notification/all`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
          const notifications = response.data.notifications;
          store.dispatch({ type: GET_ALL_NOTIFICATIONS, notifications });
        })
    }

    case SHOW_NOTIFS: {
      store.dispatch({ type: DISPLAY_NOTIFICATIONS });
      store.dispatch({ type: HIDE_ECHOS });
      break;
    }

    case DISPLAY_ECHOS_BY_DATE: {
      store.dispatch({type: LOAD_ECHOS});
      store.dispatch({ type: HIDE_NOTIFICATIONS });
      break;
    }

    case DISPLAY_ECHOS_BY_LIKES:{
      axios({
        method: 'post', url: `${urlApi}/echo/list`, data: {
          'filter': "vote",
          'order': "DESC"
        }
      }).then(response => {
        const echos = response.data.echos;
        store.dispatch({ type: GET_ALL_ECHOS, echos });
      })
      break;
  }

    case HANDLE_STATUS_CHANGE: {
      const id = action.notifId;
      axios.get(`${urlApi}/user/notification/${action.notifId}/viewed`).then((response) =>
      store.dispatch({type: LOAD_NOTIFICATIONS}))
      break;
     
    }

       case HANDLE_CLICK_ON_VOTE: {
      const isVoted = store.getState().showEcho.isVoted;
      const id = action.id;
  
        axios.post(`${urlApi}/echo/${id}/vote`, 
        {vote: !isVoted}, 
        {headers: { Authorization: `Bearer ${token}` }}).then((response) => {
          const vote = response.data;
          const regex = `(compte)$`;
          const test = vote.search(regex)
       
            store.dispatch({type: ACTUALIZE_VOTE_STATUS, test})
            store.dispatch({type: GET_ECHO_ID, id })
            store.dispatch({type: LOAD_ECHOS})

      });
      break;
  }

    case LOCALIZE_USER: {
      function showPosition(position) {

        Geocode.fromLatLng(
          position.coords.latitude,
          position.coords.longitude
        ).then(
          response => {
            const name = "autoloc";
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const adress = response.results[0].formatted_address;

            store.dispatch({
              type: HANDLE_ECHO_CREATION_INPUT,
              name,
              lat,
              lng,
              adress
            });
          })
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        const message = "Nous n'avons pas pu vous géolocaliser";
        store.dispatch({ type: HANDLE_ERRORS_ON_CONTACT, message });
      }
      break;
    }

    case GET_TAG_PAGE :{
      const id = action.id;
      axios
        .get(`${urlApi}/tag/${id}/echo/list`)
        .then(
          (response => {
            const echos = response.data.echos
            const title = response.data.tag.name
            store.dispatch({type: GET_ECHOS_BY_TAGS, echos, title})
          }))
          break;
    }

    case HANDLE_SUBSCRIBE : {
      const id = action.id

      if(action.newValue){
        axios
        .post(`${urlApi}/user/tag/${id}/subscribe`, {data: ''}, {headers: { Authorization: `Bearer ${token}`}})
          break;
        
      }else{

        axios
        .post(`${urlApi}/user/tag/${id}/unsubscribe`, {data: ''}, {headers: { Authorization: `Bearer ${token}`}})
        .then(
          (response => {
          (response.data)
          }))
          break;


      }
    }


  }
  next(action);
};
