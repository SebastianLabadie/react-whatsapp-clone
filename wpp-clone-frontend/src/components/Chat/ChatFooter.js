import React, { useState } from "react";
import styled from "styled-components";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from 'axios'

const ChatFooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 62px;
  border-top: 1px solid lightgray;

  .MuiSvgIcon-root {
    margin: 0 10px;
    color: gray;
  }
  form {
    flex: 1;
    display: flex;
    input {
      flex: 1;
      padding: 10px;
      border-radius: 30px;
      border: none;
      outline: none;
    }
    button {
      display: none;
    }
  }
`;
const ChatFooter = ({name}) => {
    const [message,setMessage] = useState('')
    const today = new Date();

  const handleSumbit =  (e) => {
    e.preventDefault();
    const ENDPOINT = "https://wpp-clone.herokuapp.com"
    axios.post(ENDPOINT+'/messages/new',{
        message:message,
        name:name,
        timestamp:today.getHours()+ ":"+today.getMinutes(),
        received:true,
    })
    setMessage('')
  };
  const handleChange = (e) => {
    setMessage(e.target.value)
  };

  return (
    <ChatFooterStyled>
      <InsertEmoticonIcon />
      <form onSubmit={handleSumbit}>
        <input 
        type="text" 
        placeholder="Type a message" 
        value={message}
        onChange={handleChange}
        />
        <button type="submit">Send Message</button>
      </form>
      <MicIcon />
    </ChatFooterStyled>
  );
};

export default ChatFooter;
