import React, { Component } from "react";
import "./App.css";

class Nav extends Component {
  render() {
    const { list } = this.props;
    return (
      <nav>
        <ul>
          {list.map((v) => (
            <li key={v.id}>
              <a
                href={v.id}
                onClick={(e) => {
                  e.preventDefault();
                  this.props.onClick(v.id);
                }}
              >
                {v.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

class Article extends Component {
  render() {
    const { title, desc } = this.props;
    return (
      <article>
        <h2>{title}</h2>
        {desc}
      </article>
    );
  }
}

class NowLoading extends Component {
  render() {
    return <div>Now Loading....</div>;
  }
}

class App extends Component {
  state = {
    list: {
      items: [],
      isLoading: false,
    },
    article: {
      item: { title: "Welcome", desc: "Hello, react & Ajax" },
      isLoading: false,
    },
  };

  componentDidMount() {
    this.setState({
      list: { ...this.state.list, isLoading: true },
    });

    fetch("list.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          list: {
            items: json,
            isLoading: false,
          },
        });
      });
  }

  loadList(id) {
    this.setState({
      article: { ...this.state.article, isLoading: true },
    });

    fetch(`${id}.json`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          article: {
            item: json,
            isLoading: false,
          },
        });
      });
  }

  render() {
    const { title, desc } = this.state.article.item;
    const { items, isLoading } = this.state.list;
    return (
      <div className="App">
        <h1>Web</h1>
        {isLoading ? (
          <NowLoading />
        ) : (
          <Nav
            list={items}
            onClick={(id) => {
              this.loadList(id);
            }}
          ></Nav>
        )}
        {this.state.article.isLoading ? (
          <NowLoading />
        ) : (
          <Article title={title} desc={desc} />
        )}
      </div>
    );
  }
}

export default App;
