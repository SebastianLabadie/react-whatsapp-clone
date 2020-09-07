import React from 'react'
import styled from "styled-components";

const MessageReciverStyled = styled.div`

    position:relative;
    background-color:#fff;
    font-size:16px;
    padding:10px;
    width:fit-content;
    border-radius:10px;
    margin-bottom: 30px;
    .name{
        position:absolute;
        top:-15px;
        font-weight:800;
        font-size:xx-small;
    }
    .timestamp{
        margin-left:10px;
        font-size:xx-small;
    }


`

const MessageReciver = () => {
    return (
        <MessageReciverStyled>
            <p className="message">
        <span className="name">Sonny</span>
        this is a message
        <span className="timestamp">{new Date().toUTCString()}</span>
      </p>
        </MessageReciverStyled>
    )
}

export default MessageReciver
