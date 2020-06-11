import React from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";

const Wrap = styled.div`
  position: relative;
  margin-bottom: 10px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 1px 0 #ccc;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  a {
    display: block;
    padding: 10px 8px;
  }
`;

const BtnRemove = styled.button`
  position: absolute;
  top: 6px;
  right: 8px;
`;

const Cards = ({ children }) => {
  let match = useRouteMatch();

  return (
    <Wrap>
      <Link to={`${match.url}/c/1`}>{children}</Link>
      <BtnRemove type="button">x</BtnRemove>
    </Wrap>
  );
};

export default Cards;
