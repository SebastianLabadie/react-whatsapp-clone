import React from "react";
import styled from "styled-components";
import SidebarChatIndividual from './SidebarChatIndividual'
const SidebarChatStyled = styled.div`
   background:#fff;
   padding:20px;
   flex:1;
   overflow:scroll;
`


const SidebarChat = () => {
    return (
        <SidebarChatStyled>
            <h1>Add New Chat</h1>
            <SidebarChatIndividual />
            <SidebarChatIndividual />
            <SidebarChatIndividual />
        </SidebarChatStyled>
    )
}

export default SidebarChat
