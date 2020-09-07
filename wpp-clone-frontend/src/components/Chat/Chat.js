import React from 'react'
import styled from 'styled-components'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'
const ChatStyled = styled.div`
flex:.65;
display:flex;
flex-direction:column;


`

const Chat = ({messages}) => {
    return (
        <ChatStyled>
           <ChatHeader />
           <ChatBody messages={messages}/>
           <ChatFooter/>
        </ChatStyled>
    )
}

export default Chat
