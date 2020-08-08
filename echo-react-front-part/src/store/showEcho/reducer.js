import { DISPLAY_ECHO, ACTUALIZE_VOTE_STATUS } from "src/store/actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ECHO: {
      state = { echo: { ...action.echo }, isVoted: action.isVoted };
      return state;
    }

    case ACTUALIZE_VOTE_STATUS: {
      if (action.test === 27) {
        state = {
          ...state,
          isVoted: true
        };
      } else {
        state = { ...state, isVoted: false };
      }

      return state;
    }

    default: {
      return state;
    }
  }
};
