import React from "react";

import { useSelector } from "react-redux";
import { UserContainer, UsersListContainer } from "./styles";
import { Loading } from "../../components/Loading";
import { UserContent } from "../../components/UserContent";
import styled from "styled-components";

export const Users = () => {
    const users = useSelector((state) => state.dashboard.users);
    return (
        <UsersListContainer>
            <Loading>
                <BodyContainer>
                    {
                        users.length 
                            ? users.map((user) => (
                                <UserContainer key={`user-${user.id}`}>
                                    <h3>{user.name}</h3>
                                    <UserContent user={user} />
                                </UserContainer>
                            )) 
                            : <div>No users found.</div>
                    }
                </BodyContainer>
            </Loading>
        </UsersListContainer>
    );
};

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 680px;
    margin: 0 auto;
    justify-content: flex-start;
`;