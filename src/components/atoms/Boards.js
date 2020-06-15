import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import colorCode from "utils/colorCode";

const BoardItem = styled.div`
  width: 23%;
  height: 100px;
  margin: 0 2% 20px 0;
  border-radius: 3px;
  background: #ddd;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 10px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    box-sizing: border-box;
  }
`;

const Create = styled.span`
  display: block;
  margin-top: 30px;
  text-align: center;
  color: #888;
`;

const Boards = ({ name, theme, bid }) => {
  const changeTheme = name => {
    localStorage.setItem("layoutTheme", name);
  };

  if (name === "create") {
    return (
      <BoardItem>
        <Link to="/create">
          <Create>Create New Board...</Create>
        </Link>
      </BoardItem>
    );
  }
  return (
    <BoardItem
      style={
        theme && theme.indexOf("rgba")
          ? { background: theme }
          : { background: colorCode[theme] }
      }
    >
      <Link
        to={`/b/${bid}`}
        onClick={() => {
          changeTheme(theme);
        }}
      >
        {name}
      </Link>
    </BoardItem>
  );
};

export default Boards;
