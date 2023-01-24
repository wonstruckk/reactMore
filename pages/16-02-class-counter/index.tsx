import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  qqq() {}

  onClickCountUp = () => {
    this.setState({
      count: 1,
    });
  };

  // Component클래스의 method.
  render() {
    return (
      <>
        {/* this가 생략되어 있어서 this라고 적어주어야 한다. */}
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기</button>
      </>
    );
  }
}
