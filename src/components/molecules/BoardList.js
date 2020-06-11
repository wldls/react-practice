import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 272px;
  margin-right: 10px;
`;

const BoardList = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default BoardList;
