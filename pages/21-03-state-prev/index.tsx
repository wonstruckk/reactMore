import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0); // let count = 0

  function onClickPlus() {
    // 1. 화살표 함수
    setCount((prev) => prev + 1); // count = count + 1

    // 2. 함수 선언식
    setCount(function (prev) {
      return prev + 1;
    });

    // 3. 함수안에 로직 넣기.
    setCount((prev) => {
      // if, for 등등 최종은 리턴에
      return prev + 1;
    });

    // 4. 매개변수 바꿔보기
    setCount((aksdjfas) => aksdjfas + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickPlus}>카운트 올리기</button>
      <button onClick={onClickMinus}>카운트 내리기</button>
    </>
  );
}
