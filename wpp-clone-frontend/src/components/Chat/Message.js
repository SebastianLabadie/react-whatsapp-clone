import React from 'react'
import styled from "styled-components";

const MessageStyled = styled.div`

    position:relative;
    background-color:#fff;
    font-size:16px;
    padding:10px;
    width:fit-content;
    border-radius:10px;
    margin: 20px 0; 
    .name{
        position:absolute;
        top:-17px;
        font-weight:700;
        font-size:12px;
    }
    .timestamp{
        margin-left:10px;
        font-size:xx-small;
    }

    ${({reciver})=>reciver ? "margin-left:auto; background-color:#dcf8c6;" : null};
    
`

const Message = ({name,message,timestamp,reciver = false}) => {
    return (
        <MessageStyled reciver={reciver}>
            <p className="message">
                <span className="name">{name}</span>
                {message}
                <span className="timestamp">{new Date().toUTCString()}</span>
            </p>
        </MessageStyled>
    )
}

export default Message
