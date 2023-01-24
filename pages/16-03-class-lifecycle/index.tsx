import { Component } from "react";
import Router from "next/router";

// 이거나, {count:number}나 다를바 없다.
interface IPrevState {
  count: number;
}

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("그려지고 나서 실행");
  }

  componentDidUpdate() {
    console.log("변경되고 나서 실행");
  }

  componentWillUnmount() {
    console.log("사라질때 실행.");
  }

  qqq() {}

  onClickCountUp = () => {
    this.setState((prev: { count: number }) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove() {
    void Router.push("/");
  }

  // Component클래스의 method.
  render() {
    return (
      <>
        {/* this가 생략되어 있어서 this라고 적어주어야 한다. */}
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기</button>
        <button onClick={this.onClickMove}>페이지나가기</button>
      </>
    );
  }
}
