// import actions 
import {GET_ECHOS_BY_TAGS} from 'src/store/actions';

// InitialState of our reducer
const initialState = {};

// Switch to call for each type of actions needed to refresh the state
export default (state = initialState, action) => {
  switch (action.type) {

    case GET_ECHOS_BY_TAGS :{


        state = {
            echos: [...action.echos],
            title: action.title
        }
        return state
    }


    default: {
      return state;
    }
  }
};
