import React from 'react'
import styled from 'styled-components'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'
const ChatStyled = styled.div`
display:flex;
flex-direction:column;


`

const Chat = () => {
    return (
        <ChatStyled>
           <ChatHeader />
           <ChatBody />
           <ChatFooter/>
        </ChatStyled>
    )
}

export default Chat
