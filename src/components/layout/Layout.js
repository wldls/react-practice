import React, { useReducer } from "react";
import styled from "styled-components";
import colorCode from "utils/colorCode";
import Navbar from "components/layout/Navbar";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
`;

const Container = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const Layout = ({ title, children }) => {
  // style={theme && { background: colorCode[theme] }}
  return (
    <Wrap>
      <Navbar />
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </Wrap>
  );
};

export default Layout;
