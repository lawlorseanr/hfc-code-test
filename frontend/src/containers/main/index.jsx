import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, UserContainer, UsersListContainer } from "./styles";
import { onLoadDashboardUsers } from "../../redux/actions/dashboard-actions";
import { Loading } from "../../components/Loading";
import { UserContent } from "../../components/UserContent";

export const MainContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.dashboard.users);

  useEffect(() => {
    dispatch(onLoadDashboardUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <h1>Users</h1>

      <UsersListContainer>
        <Loading>
          {users.map((user) => (
            <UserContainer key={`user-${user.id}`}>
              <h3>{user.name}</h3>
              <UserContent user={user} />
            </UserContainer>
          ))}
        </Loading>
      </UsersListContainer>
    </Container>
  );
};
