import { updateContent } from "../../services/content.service";
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

export const handleUpdateContent = ({users, contentId, status, setIsLoading}) => async (dispatch) => {
  try {
    setIsLoading(true);
    const response = await updateContent({
      contentId,
      status
    });
    const newContent = response.data;
    const updatedUsers = users.map((u) => {
      const contents = u.contents
        .map((c) => c.id === newContent.id
          ? newContent
          : c
      );
      return {
        ...u,
        contents
      };
    })
    dispatch({
      type: DashboardActions.SET_USERS,
      payload: updatedUsers
    });
  } catch (e) {
    alert("Unable to update content!")
    console.error(e);
  } finally {
    setIsLoading(false);
  }
};

export const handleSeeContent = ({ id }) => (dispatch) => {
  try {
    dispatch({
      type: DashboardActions.SHOW_CONTENT_FOR,
      payload: id
    })
  } catch (e) {
    alert("Unable to view user content!");
    console.error(e);
  }
}