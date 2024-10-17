import { DashboardActions } from "../action-types/dashboard-action-types";

const dashboardInitialState = {
  users: [],
  loading: false,
  showContentFor: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = dashboardInitialState, action) => {
  switch (action.type) {
    case DashboardActions.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case DashboardActions.SET_LOADING_USERS:
      return {
        ...state,
        loading: action.payload,
      };
    case DashboardActions.SHOW_CONTENT_FOR:
      return {
        ...state,
        showContentFor: [
          ...state.showContentFor,
          action.payload
        ]
      };
    case DashboardActions.HIDE_CONTENT_FOR:
      return {
        ...state,
        showContentFor: state.showContentFor
          .filter((u) => u !== action.payload)
      };
    case DashboardActions.RESET_STATE:
      return dashboardInitialState;
    default:
      return state;
  }
};
