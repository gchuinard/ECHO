import {HANDLE_REGISTER_USER_INPUT, CATCH_REGISTER_ERRORS} from 'src/store/actions';

const initialState = {
  usernameValue: '',
  emailValue: '',
  passwordCheckValue: '',
  passwordValue: '',
  errors: ''
};

// Switch to call for each type of actions needed to refresh the state
export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_REGISTER_USER_INPUT: {
      const name = action.name;
      return {
        ...state,
        [name]: action.value
      };
    }

    case CATCH_REGISTER_ERRORS:{

      if(typeof action.errors === 'object'){
        return {
          ...state,
          errors: {...action.errors}
        };
      }
      else {
        return {
          ...state,
          errors: {
            error403: action.errors
          }
      }
    }}
    
    default: {
      return state;
    }
  }
};
