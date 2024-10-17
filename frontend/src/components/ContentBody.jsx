import React from "react";
import styled from "styled-components";

export const ContentBody = ({ content }) => {
    return (
        <Container backgroundUrl={content.url}>
            <StatusContainer>
                <Status status={content.status}>
                    {content.status.toUpperCase()}
                </Status>
            </StatusContainer>
            <TitleContainer>
                <Title>
                    {content.title ?? "Untitled"}
                </Title>
            </TitleContainer>
        </Container>)
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    height: 250px;
    background-image: url(${(props) => props.backgroundUrl});
    background-size: cover;
    background-position: center;
    margin: 5px;
    border-radius: 20px;
`;

const StatusContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px;
`;

const Status = styled.div`
    background-color: ${((props) => {
        switch (props.status?.toLowerCase()) {
            case "approved":
                return "#D6F559";
            case "pending":
                return "#FFF186";
            case "rejected":
                return "#FF8686";
            default:
                return "#FFF186";
        }
    })};
    border-radius: 20px;
    padding: 5px 10px;
    font-size: 12px;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 10px;`;

const Title = styled.div`
    padding: 1px 5px;
    color: white;
    font-size: 12px;
`;