import React from "react";
import styled from "styled-components";

export const ContentFooter = ({ content }) => {
    
    if (content.status === "approved") {
        return (
            <FooterContainer>
                <Reject full>REJECT</Reject>
            </FooterContainer>
        )
    }

    if (content.status === "rejected") {
        return (
            <FooterContainer>
                <Approve full>APPROVE</Approve>
            </FooterContainer>
        )
    }

    return (
        <FooterContainer>
            <Reject>REJECT</Reject>
            <Approve>APPROVE</Approve>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 10px 0;
`

const Approve = styled.div`
    display: flex;
    justify-content: center;
    background-color: #1C33EE;
    color: white;
    padding: 10px 0;
    margin: auto 10px;
    border-radius: 20px;
    width: ${(props) => props.full ? "100%": "50%"};
    font-size: 12px;
    opacity: 50%;
    cursor: not-allowed;
`
const Reject = styled.div`
    display: flex;
    justify-content: center;
    background-color: #E9EDF7;
    padding: 10px 0;
    margin: auto 10px;
    border-radius: 20px;
    width: ${(props) => props.full ? "100%": "50%"};
    font-size: 12px;
    opacity: 50%;
    cursor: not-allowed;
`