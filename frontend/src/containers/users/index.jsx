import React from "react";

import { useSelector } from "react-redux";
import { UserContainer, UsersListContainer } from "./styles";
import { Loading } from "../../components/Loading";
import { UserContent } from "../../components/UserContent";

export const Users = () => {
    const users = useSelector((state) => state.dashboard.users);
    return (
        <UsersListContainer>
            <Loading>
                {users.length ? users.map((user) => (
                    <UserContainer key={`user-${user.id}`}>
                        <h3>{user.name}</h3>
                        <UserContent user={user} />
                    </UserContainer>
                )) : <div>No users found.</div>}
            </Loading>
        </UsersListContainer>
    );
};