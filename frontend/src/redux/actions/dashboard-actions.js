import { getUsers } from "../../services/user.service";
import { DashboardActions } from "../action-types/dashboard-action-types";

export const onLoadDashboardUsers = () => async (dispatch) => {
  try {
    dispatch({ type: DashboardActions.SET_LOADING_USERS, payload: true });
    const response = await getUsers();
    dispatch({ type: DashboardActions.SET_USERS, payload: response.data });
  } catch (error) {
    console.error(error);
  } finally {
    dispatch({ type: DashboardActions.SET_LOADING_USERS, payload: false });
  }
};