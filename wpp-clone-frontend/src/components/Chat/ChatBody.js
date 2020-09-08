import React from "react";
import styled from "styled-components";
import Message from "./Message";
import ScrollToBottom from 'react-scroll-to-bottom'


const ChatBodyStyled = styled.div`
  flex:1;
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
  background-repeat: repeat;
  background-position: center;
  overflow: auto;
  padding: 30px;
  max-height:90vh;
  display:flex;
  .messages{
    overflow: auto;
    flex: auto;
   }
 
`;

const ChatBody = ({ messages,name }) => {
  const renderMessages = messages.map((message,i) => {
    return (
      <Message
        name={message.name}
        message={message.message}
        timestamp={message.timestamp}
        reciver={message.name === name ? true : false}
        key={i}
      />
    );
  });
  return <ChatBodyStyled>
            <ScrollToBottom className="messages">

    {renderMessages}
</ScrollToBottom>
    </ChatBodyStyled>;
};

export default ChatBody;
