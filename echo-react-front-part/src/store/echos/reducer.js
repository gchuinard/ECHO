import {
  GET_ALL_ECHOS,
  DISPLAY_ECHOS_BY_DATE,
  HIDE_ECHOS
} from "src/store/actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case GET_ALL_ECHOS: {
      const state = {
        echos: [...action.echos],
        display: true
      };
      return state;
    }

    case HIDE_ECHOS: {
      state = {
        ...state,
        display: false
      };

      return state;
    }

    case DISPLAY_ECHOS_BY_DATE: {
      state = {
        ...state,
        display: true
      };
      return state;
    }

    default: {
      return state;
    }
  }
};
