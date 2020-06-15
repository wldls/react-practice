import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: rgba(0, 0, 0, 0.15);
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

const LinkLogin = styled.button`
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

const Navbar = ({ history, theme }) => {
  const auth = localStorage.getItem("trelloToken");
  const onLogin = () => {
    history.push("/login");
  };

  const onLogout = () => {
    localStorage.removeItem("trelloToken");
    history.push("/");
  };

  return (
    <Header style={theme === "home" ? { background: "#026AA7" } : null}>
      <LinkHome to="/">Home</LinkHome>
      {!auth ? (
        <LinkLogin onClick={onLogin}>Login</LinkLogin>
      ) : (
        <LinkLogin onClick={onLogout}>Logout</LinkLogin>
      )}
    </Header>
  );
};

export default withRouter(Navbar);
