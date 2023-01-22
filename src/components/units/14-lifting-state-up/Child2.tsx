import { useState } from "react";

export default function Child2(props: any) {
  return (
    <div>
      <div>자식2 카운트 {props.count}</div>
      <button onClick={props.onClickCountUp}>카운트 올리기.</button>
    </div>
  );
}
