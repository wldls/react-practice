import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.15);
  height: 32px;
  padding: 4px;
`;

const LinkHome = styled(Link)`
  display: inline-block;
  color: rgba(255, 255, 255, 0.5);
  font-size: 24px;
  font-weight: bold;
  &:hover {
    color: #fff;
  }
`;

const LinkLogin = styled(Link)`
  position: absolute;
  top: 6px;
  right: 15px;
  padding: 5px 8px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.5);
  color: #fff;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Navbar = ({ theme }) => {
  return (
    <Header>
      <LinkHome to="/">Home</LinkHome>
      <LinkLogin to="/login">Login</LinkLogin>
    </Header>
  );
};

export default Navbar;
