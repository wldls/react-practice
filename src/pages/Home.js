import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Layout from "components/layout/Layout";
import BoardContainer from "components/molecules/BoardContainer";

const BoardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <Layout title="board">
      <BoardWrap>
        <BoardContainer />
      </BoardWrap>
    </Layout>
  );
};

export default withRouter(Home);
