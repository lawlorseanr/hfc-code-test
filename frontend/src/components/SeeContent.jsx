import React from "react";
import { useDispatch } from "react-redux";
import { DashboardActions } from "../redux/action-types/dashboard-action-types";
import styled from "styled-components";

export const SeeContent = ({ id }) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch({
            type: DashboardActions.SHOW_CONTENT_FOR,
            payload: id
        })
    }

    return (
        <Button onClick={onClick}>SEE CONTENT</Button>
    );
}

const Button = styled.div`
    display: flex;
    width: 80px;
    padding: 5px;
    background-color: #1C33EE;
    color: white;
    font-size: 10px;
    justify-content: center;
    border-radius: 20px;
`