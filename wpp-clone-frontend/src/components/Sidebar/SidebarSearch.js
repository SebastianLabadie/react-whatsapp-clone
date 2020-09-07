import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const SidebarSearchStyled = styled.div`
  display: flex;
  align-items: center;
  background: #f6f6f6;
  height: 39px;
  padding: 10px;

  .search-container {
    display: flex;
    align-items: center;
    background: #fff;
    width: 100%;
    height: 35px;
    border-radius: 20px;
    input {
      border: none;
      outline: none;
      margin-left: 10px;
    }
    .MuiSvgIcon-root {
      color: gray;
      margin-left: 10px;
    }
  }
`;

const SidebarSearch = () => {
  return (
    <SidebarSearchStyled>
      <div className="search-container">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search or start a new chat" />
      </div>
    </SidebarSearchStyled>
  );
};

export default SidebarSearch;
