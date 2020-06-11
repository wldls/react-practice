import React from "react";
import styled from "styled-components";
import Layout from "components/layout/Layout";
import BoardList from "components/molecules/BoardList";
import CardContainer from "components/molecules/CardContainer";

const Wrap = styled.div`
  display: flex;
  margin-top: 10px;
`;

const BtnAdd = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.1);
  color: #ddd;
  text-align: left;
  box-sizing: border-box;
  transition: all 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const BoardView = () => {
  return (
    <Layout title="board" theme="blue">
      <Wrap>
        <BoardList>
          <CardContainer />
        </BoardList>
        <BoardList>
          <BtnAdd type="button">+ Add another list</BtnAdd>
        </BoardList>
      </Wrap>
    </Layout>
  );
};

export default BoardView;
