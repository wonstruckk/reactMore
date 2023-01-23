import { useState } from "react";

export default function Child1() {
  // 2번
  const onClick = () => {
    props.setCount((prev) => prev + 1);
  };
  return (
    <div>
      <div>자식1 카운트 : {props.count}</div>
      <button onClick={onClick}>카운트 올리기.</button>
    </div>
  );
}
