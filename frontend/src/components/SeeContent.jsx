import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { handleSeeContent } from "../redux/actions/dashboard-actions";

export const SeeContent = ({ id }) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(handleSeeContent({ id }))
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
    cursor: pointer;
`