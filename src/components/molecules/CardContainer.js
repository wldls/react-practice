import React from "react";
import styled from "styled-components";
import Cards from "components/atoms/Cards";

const Wrap = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  background: #e2e4e6;
  box-sizing: border-box;
`;

const Title = styled.div`
  position: relative;
  margin-bottom: 20px;

  p {
    font-weight: bold;
  }
`;
const Content = styled.div``;
const CardWrap = styled.div``;
const BtnRemove = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  vertical-align: top;
`;
const BtnAddCard = styled.button`
  display: block;
  width: 100%;
  color: #8c8c8c;
  text-align: left;
`;

const CardContainer = () => {
  return (
    <Wrap>
      <Title>
        <p>card title</p>
        <BtnRemove type="button">x</BtnRemove>
      </Title>
      <Content>
        <CardWrap>
          <Cards>cont</Cards>
        </CardWrap>
        <BtnAddCard>+ Add a Card...</BtnAddCard>
      </Content>
    </Wrap>
  );
};

export default CardContainer;
