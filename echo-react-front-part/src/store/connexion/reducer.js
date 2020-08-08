// import actions 
import { HANDLE_CONNEXION_USER_INPUT, CREATE_USER_SESSION, CHECK_USER_CONNEXION, REDIRECT, CATCH_CONNEXION_ERRORS } from 'src/store/actions';

// InitialState of our reducer
const initialState = {
  usernameValue: '',
  passwordValue: '',
  isConnected: false,
  errors: ''
};

// Switch to call for each type of actions needed to refresh the state
export default (state = initialState, action) => {
  switch (action.type) {

    case HANDLE_CONNEXION_USER_INPUT: {
      const name = action.name;
      return {
        ...state, [name]: action.value
      };
    }

    case CREATE_USER_SESSION: {
 
      return {
        
        ...state, 
        usernameValue: action.user.username,
        isConnected: true,
        role: action.user.roles[0]
      };
    }

    case CHECK_USER_CONNEXION: {
      
      return {
      ...state, 
      isConnected: false,
      role: ''
    };
  }
    case CATCH_CONNEXION_ERRORS:{

        return {
          ...state,
          errors: {
            error: action.errors.message
          }
      
    }

    }
    
    default: {
      return state;
    }

    
    
  }
};
