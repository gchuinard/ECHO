import {DISPLAY_USER_INFO} from 'src/store/actions';

const initialState = {
  username: '',
  role: '',
  avater:'',
  adress: '',
  tags: [], 
  echos: []
};

// Switch to call for each type of actions needed to refresh the state
export default (state = initialState, action) => {
  switch (action.type) {

    case DISPLAY_USER_INFO:{
        // map on echos
        const echos = action.echos.echos;
        const echoList = echos.map((echo) => echo);
        // TODO treatment on tags 
        const tags = action.user.tags
        const tagList = tags.map((tag) => tag);
        // TODO treatment on role
        const roles = action.user.role
        const getRole = roles.map((role) => role);
        const userRole = getRole.toString().slice(5); 

        const state = {
            username: action.user.username,
            role: userRole,
            avatar: action.user.avatar,
            adress: action.user.adress,
            tags: [...tagList],
            echos: [...echoList],
        }

        return state;
    }
    default: {
      return state;
    }
  }
};
