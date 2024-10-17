import React from "react";
import { useSelector } from "react-redux";
import { SeeContent } from "./SeeContent";
import styled from "styled-components";
import { ContentFooter } from "./ContentFooter";
import { ContentBody } from "./ContentBody";

export const UserContent = ({user}) => {
    const { showContentFor } = useSelector((state) => state.dashboard);

    if (!showContentFor.includes(user.id)) {
        return <SeeContent id={user.id} />
    }

    user.contents.forEach((c) => {
        const rando = Math.random();
        if (rando < 0.333) {
            c.status = "approved";
        } else if (rando < 0.666) {
            c.status = "rejected";
        } else {
            c.status = "pending";
        }

    })

    return (
        <ContentsContainer>
            {user.contents.map((content => 
                <ContentContainer>
                    <ContentBody content={content}/>
                    <Divider />
                    <ContentFooter content={content}/>
                </ContentContainer>
            ))}
        </ContentsContainer>
    )
}

const ContentsContainer = styled.div`
    display: flex;
    gap: 12px;
`;

const Divider = styled.div`
    border-bottom: 1px #C0C6FD solid;
    display: flex;
    margin: 0 10px;
    margin-top: 5px;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
    padding: 5px;
`;