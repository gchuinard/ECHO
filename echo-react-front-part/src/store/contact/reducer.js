// import actions 
import {HANDLE_CONTACT_FORM_INPUT, HANDLE_ERRORS_ON_CONTACT, SEND_CONFIRMATION_MESSAGE} from 'src/store/actions';

// InitialState of our reducer
const initialState = {
  usernameValue: '',
  emailValue:'',
  message:'',
  errors:'',
  confirmationMessage:''
};

// Switch to call for each type of actions needed to refresh the state
export default (state = initialState, action) => {
  switch (action.type) {

    case HANDLE_CONTACT_FORM_INPUT: {
        const name = action.name;
        return {
          ...state,
          [name]: action.value
        };
      }

    case HANDLE_ERRORS_ON_CONTACT:{

        const errorMessage = action.message

        return {
            ...state,
            errors: errorMessage
          };
    }
    case SEND_CONFIRMATION_MESSAGE:{

        const confirmMessage = action.message

        return {
            ...state,
            errors: '',
            confirmationMessage: confirmMessage
          };

    }
    default: {
      return state;
    }
  }
};
