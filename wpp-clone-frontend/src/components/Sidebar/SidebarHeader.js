import React from "react";
import styled from "styled-components";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar } from "@material-ui/core";

const SidebarHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding:20px;
  border:1px solid lightgray;

  .container-right{
      display:flex;
      align-items:center;
      justify-content:space-between;
      min-width:10vw;

      .MuiSvgIcon-root{
        margin:0 1vw;
          font-size:24px !important;
      }
  }
`;

const SidebarHeader = () => {
  return (
    <SidebarHeaderStyled>
      <div className="container-left">
          <Avatar src="https://thispersondoesnotexist.com/image" />
      </div>
      <div className="container-right">
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
        <MoreVertIcon />
        </IconButton>
      </div>
    </SidebarHeaderStyled>
  );
};

export default SidebarHeader;
