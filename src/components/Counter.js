import React, { Component } from "react";
import ReactDom from "react-dom";

class Counter extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
    };
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentWillUnmount() {
    console.log("component Will Unmount");
    console.log("------------------");
  }
  componentDidMount() {
    console.log("component Did Mount");
    console.log("------------------");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps);
    // console.log(prevState);
    // if (prevProps  prevState) {
    //   console.log("don't do any thing ");
    // }
    console.log("component Did update");
    console.log("------------------");
  }

  componentWillMount(prevProps, prevState, snapshot) {
    console.log(" component Will Mount");
    console.log("------------------");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.ignorProp);
    console.log(this.props.ignorProp);
    console.log(nextProps.ignorProp);
    console.log(
      nextProps.ignorProp && this.props.ignorProp !== nextProps.ignorProp
    );

    if (nextProps.ignorProp && this.props.ignorProp !== nextProps.ignorProp) {
      console.log("should Component Update -Do not Render");
      return false;
    }
    console.log(" should component update - render ");
    return true;
  }

  render() {
    console.log("Render");

    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default Counter;
