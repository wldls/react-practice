import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { login } from "api/index";
import Layout from "components/layout/Layout";

const Table = styled.div`
  display: table;
`;
const Row = styled.div`
  display: table-row;
`;

const Cell = styled.p`
  display: table-cell;
  padding: 5px 8px;
`;

const ErrorFields = styled.span`
  margin-left: 10px;
  color: #ff0000;
`;

const BtnLogin = styled.button`
  display: block;
  margin-top: 20px;
  background: #5aac44;
  padding: 10px 15px;
  border-radius: 3px;
  color: #fff;

  &:hover {
    background: #4d9639;
  }

  &.disabled {
    background: #ccc;
  }
`;

const Login = ({ history }) => {
  const [loginErr, setLoginErr] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const onLogin = async data => {
    try {
      const res = await login(data);
      const token = res.data.accessToken;
      localStorage.setItem("trelloToken", token);
      history.push("/");
    } catch (err) {
      setLoginErr(err.response.data.error);
    }
  };

  return (
    <Layout title="login to Trello">
      <form onSubmit={handleSubmit(onLogin)}>
        <Table>
          <Row>
            <Cell>email</Cell>
            <Cell>
              <input
                type="text"
                name="email"
                placeholder="e.g. test@test.com"
                ref={register({
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                })}
              />
              {errors.email?.type === "required" && (
                <ErrorFields>아이디를 입력해주세요</ErrorFields>
              )}
              {errors.email?.type === "pattern" && (
                <ErrorFields>올바르지 않은 이메일 주소입니다.</ErrorFields>
              )}
            </Cell>
          </Row>
          <Row>
            <Cell>password</Cell>
            <Cell>
              <input
                type="text"
                name="password"
                placeholder="123123"
                ref={register({ required: true })}
              />
              {errors.password && (
                <ErrorFields>비밀번호를 입력해주세요</ErrorFields>
              )}
            </Cell>
          </Row>
          {loginErr && <ErrorFields>{loginErr}</ErrorFields>}
          <BtnLogin className={errors.types ? "disabled" : null} type="submit">
            Login
          </BtnLogin>
        </Table>
      </form>
    </Layout>
  );
};

export default withRouter(Login);
