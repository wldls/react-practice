import React from "react";
import styled from "styled-components";
import Layout from "components/layout/Layout";

const onLogin = e => {
  e.preventDefault();
  console.log("submit");
};

const Login = () => {
  return (
    <Layout title="login to Trello">
      <form onSubmit={onLogin}>
        <div>
          <span>email</span>
          <input type="text" placeholder="e.g. test@test.com" />
        </div>
        <div>
          <span>password</span>
          <input type="text" placeholder="123132" />
        </div>
        <button type="submit">Login</button>
      </form>
    </Layout>
  );
};

export default Login;
