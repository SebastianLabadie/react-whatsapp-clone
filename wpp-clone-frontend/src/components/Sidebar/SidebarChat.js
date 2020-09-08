import React from "react";
import styled from "styled-components";
import SidebarChatIndividual from './SidebarChatIndividual'

const SidebarChatStyled = styled.div`
   background:#fff;
   flex:1;
   overflow:scroll;
   
`


const SidebarChat = () => {
    return (
        
        <SidebarChatStyled>
                <SidebarChatIndividual />
                <SidebarChatIndividual />
                <SidebarChatIndividual />

            
        </SidebarChatStyled>
    )
}

export default SidebarChat
