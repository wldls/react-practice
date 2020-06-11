import React from "react";
import styled from "styled-components";
import Layout from "components/layout/Layout";
import Boards from "components/atoms/Boards";

const BoardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <Layout title="board">
      <BoardWrap>
        <Boards name="new Board" bid="1" theme="orange" />
        <Boards name="create" />
      </BoardWrap>
    </Layout>
  );
};

export default Home;
