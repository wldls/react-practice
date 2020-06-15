import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import BoardView from "pages/BoardView";
import CardView from "pages/CardView";
import Login from "pages/Login";
import GridView from "pages/GridView";
import UseClass from "UseClass";
import UseHook from "UseHook";
import "style/style.css";
import Core from "components/Core";
import AuthRoute from "components/AuthRoute";

const App = () => {
  return (
    <>
      <Core />
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <AuthRoute path="/" exact>
          <Home />
        </AuthRoute>
        <AuthRoute path="/b/:bid" exact>
          <BoardView />
        </AuthRoute>
        {/* <Route path="/" exact>
          <Home />
        </Route> */}
        {/* <Route path="/b/:bid" exact>
          <BoardView />
        </Route> */}
        <Route path={`/b/:bid/c/:cid`} exact>
          <CardView />
        </Route>
        <Route path="/grid" exact>
          <GridView />
        </Route>
        <Route path="/useClass" exact>
          <UseClass />
        </Route>
        <Route path="/useHook" exact>
          <UseHook />
        </Route>
        <Route
          // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </>
  );
};

export default App;
