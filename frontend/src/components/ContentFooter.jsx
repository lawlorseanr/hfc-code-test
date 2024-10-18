import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateContent } from "../services/content.service";
import { DashboardActions } from "../redux/action-types/dashboard-action-types";

export const ContentFooter = ({ content }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.dashboard.users);
    const [isLoading, setIsLoading] = useState(false);

    const handleUpdate = async (status) => {
        setIsLoading(true);
        try {
            const response = await updateContent({
                contentId: content.id,
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
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    const Reject = ({ full } = { full: false }) => {
        const onClick = () => isLoading ? null : handleUpdate("rejected");
        return (
            <Action
                variant="secondary"
                full={full}
                isLoading={isLoading}
                onClick={onClick}
            >
                REJECT
            </Action>)
    }

    const Approve = ({ full } = { full: false }) => {
        const onClick = () => isLoading ? null : handleUpdate("approved");
        return (
            <Action
                variant="primary"
                full={full}
                isLoading={isLoading}
                onClick={onClick}
            >
                APPROVE
            </Action>
        )
    }
    
    if (content.status === "approved") {
        return (
            <FooterContainer>
                <Reject full/>
            </FooterContainer>
        )
    }

    if (content.status === "rejected") {
        return (
            <FooterContainer>
                <Approve full/>
            </FooterContainer>
        )
    }

    return (
        <FooterContainer>
            <Reject/>
            <Approve/>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 10px 0;
`

const Action = styled.div`
    display: flex;
    justify-content: center;
    margin: auto 10px;
    padding: 10px 0;
    width: ${(props) => props.full ? "100%": "50%"};
    border-radius: 20px;
    font-size: 12px;
    cursor: ${(props) => props.isLoading ? "not-allowed" : "pointer"};
    opacity: ${(props) => props.isLoading ? "50%" : "100%"};
    background-color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "#1C33EE"
            case "secondary":
                return "#E9EDF7"
            default:
                return "#1C33EE"
        }
    }};
    color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "white"
            case "secondary":
                return "black"
            default:
                return "white"
        }
    }};
`;