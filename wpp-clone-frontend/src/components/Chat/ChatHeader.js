import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";

const ChatHeaderStyled = styled.div`
display:flex;
align-items:center;
padding:20px;
border-bottom:1px solid lightgray;
    .chat-center-info{
        flex:1;
        padding-left: 20px;
        h3{
            font-weight: 500;
            margin-bottom: 3px;
        }
        p{
            color:gray;
        }
    }
`;

const ChatHeader = () => {
  return (
    <ChatHeaderStyled>
      <Avatar />
      <div className="chat-center-info">
        <h3>Room Name</h3>
        <p>last seen at...</p>
      </div>
      <div className="chat-right-utils">
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </ChatHeaderStyled>
  );
};

export default ChatHeader;
