import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello World</h1>
      <input
        type="button"
        value="removeFunc"
        onClick={() => {
          setFuncShow(false);
        }}
      ></input>
      <input
        type="button"
        value="removeClass"
        onClick={() => {
          setClassShow(false);
        }}
      ></input>
      {funcShow && <FuncComp initNumber="2"></FuncComp>}
      {classShow && <ClassComp initNumber="2"></ClassComp>}
    </div>
  );
}

function setRandom() {
  return Math.floor(Math.random() * 10) + 1;
}

const funcStyle = "color: skyblue";
let funcId = 0;
function FuncComp(props) {
  const [count, setCount] = useState(props.initNumber);
  const [_date, setDate] = useState(new Date().toString());

  useEffect(() => {
    console.log(
      "%cfunc => effect (componentDidMount & componentDidUpdate)" + ++funcId,
      funcStyle
    );
    document.title = `${count}`;
    return function () {
      console.log(
        "%cfunc => effect (componentWillUnMount)" + ++funcId,
        funcStyle
      );
    };
  }, [count]);
  // couont 값이 변경되었을 때만 호출하도록 한다.
  // 빈 배열을 두 번째 인자에 넣을 경우 componentDidMount 효과만 생긴다. (1회이상 실행되지 않음)

  console.log("%cfunc => render" + ++funcId, funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>{count}</p>
      <p>{_date}</p>
      <input
        type="button"
        value="random"
        onClick={() => {
          setCount(setRandom());
        }}
      />
      <input
        type="button"
        value="date"
        onClick={() => {
          setDate(new Date().toString());
        }}
      />
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };

  // componentDidMount() {
  //   console.log("mount");
  // }

  render() {
    // console.log("render");
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>{this.state.number}</p>
        <p>date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={() => {
            this.setState({ number: setRandom() });
          }}
        />
        <input
          type="button"
          value="date"
          onClick={() => {
            this.setState({ date: new Date().toString() });
          }}
        ></input>
      </div>
    );
  }
}

export default App;
