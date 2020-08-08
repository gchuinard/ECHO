import {
  GET_ALL_NOTIFICATIONS,
  HIDE_NOTIFICATIONS,
  DISPLAY_NOTIFICATIONS
} from "src/store/actions";

const initialState = [];

// Switch to call for each type of actions needed to refresh the state
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTIFICATIONS: {
      const notifications = action.notifications;
      const newNotifs = notifications.filter(
        notification => notification.isValidated === false
      );

      state = {
        notifications: [...action.notifications],
        news: newNotifs.length,
        display: false
      };
      return state;
    }

    case DISPLAY_NOTIFICATIONS: {
      state = { ...state, display: true };
      return state;
    }

    case HIDE_NOTIFICATIONS: {
      state = { ...state, display: false };
      return state;
    }

    default: {
      return state;
    }
  }
};
