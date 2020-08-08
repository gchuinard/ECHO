// import actions 
import { REDIRECT, SWITCH_REDIRECT } from 'src/store/actions';

// InitialState of our reducer
const initialState = {
  redirect: false
};

// Switch to call for each type of actions needed to refresh the state
export default (state = initialState, action) => {
  switch (action.type) {

    case REDIRECT: {
    return {
      ...state,
      redirect: true
    };
  }
  case SWITCH_REDIRECT: {
    return {
      ...state,
      redirect: false
    };
  }

    default: {
      return state;
    }
    
  }
};
