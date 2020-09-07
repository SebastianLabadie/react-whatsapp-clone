import React from 'react'
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

const SidebarChatIndividualStyled = styled.div`
display:flex;
cursor:pointer;
border-bottom:1px solid #f6f6f6;
padding: 20px;

&:hover{
    background:#ebebeb;
}
.info-container{
    margin-left: 15px;
    h2{
        font-size:16px;
        margin-bottom: 8px;
    }
}
`

const SidebarChatIndividual = () => {
    return (
        <SidebarChatIndividualStyled>
            <Avatar />
            <div className="info-container">
                <h2>RoomName</h2>
                <p>Last message</p>
            </div>
        </SidebarChatIndividualStyled>
    )
}

export default SidebarChatIndividual
