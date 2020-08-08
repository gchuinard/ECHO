import { ALL_TAGS } from 'src/store/actions';


const initialState = [];

export default (state = initialState, action) => {

  switch (action.type) {

    case ALL_TAGS : {
      const state = [ ...action.tags];
      return state;
    }

    default: {
      return state;
    }
  }
};
