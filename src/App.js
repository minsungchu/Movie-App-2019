import React from "react";

// React Componenets > Mounting, Updating, Unmounting
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("This is constructor");
  }
  state = {
    count: 0,
  };
  plus = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("This is componentDidMount");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("This is componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("This is componentWillUnmount");
  }

  render() {
    console.log("This is render function");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
