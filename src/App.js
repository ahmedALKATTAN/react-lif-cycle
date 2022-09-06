import Users from "./components/Users";
import React, { Component } from "react";
import ReactDom from "react-dom";
import Counter from "./components/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mount: true, ignorProp: 0, seed: 40 };
    this.mountCounter = () => this.setState({ mount: true });
    this.unMounteCounter = () => this.setState({ mount: false });
    this.ignorProp = () => this.setState({ ignorProp: Math.random() });
    this.seedGenrator = () =>
      this.setState({ seed: Number.parseInt(Math.random() * 100) });
  }

  render() {
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          mount Counter
        </button>
        <button onClick={this.unMounteCounter} disabled={!this.state.mount}>
          un Mounte Counter
        </button>
        <button onClick={this.ignorProp}>ignorProp</button>
        <button onClick={this.seedGenrator}>generatseed</button>

        <h1>{this.state.counter}</h1>
        {this.state.mount ? (
          <Counter ignorProp={this.state.ignorProp} seed={this.state.seed} />
        ) : null}
      </div>
    );
  }
}
export default App;
