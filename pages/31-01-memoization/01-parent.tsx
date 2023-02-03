import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./02-child";

export default function MemoizationParentPage() {
  console.log("부모가랜더링됨.");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. useMemo사용.
  // 변수같은 것들은 메모리에 휘발성으로 저장이 되는데,
  // 무한하지 않고 일정수준이상 변수가 만들어지고 차게되면 안쓰이는 변수를 지우게 된다.
  // 최적화가 안되어있으면 계속해서 메모리를 브라우저가 지우게되고(가비지컬렉션) 당연히 ux적으로 좋지않다.
  const aaa = useMemo(() => Math.random(), [countState]);

  // 2. useCallback으로 함수저장.
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // 3. useCallback 주의사항
  // 문제는 state를 저장한다. state는 여러번일어나도 마지막상태변경을 저장하기도한다.
  // 그래서 state를 사용하지 않고 , prev를 사용하도록 하자.
  const onClickCountState = useCallback(() => {
    // setCountState(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  // 4. 응용, useMemo로 나만의 useCallback만들기
  // dependency array가 너무 많아지면 그냥 쓰지말고 냅두자. 유지보수가 더 힘들어진다.
  // const onClickCountState = useMemo((() => {
    // setCountState(countState + 1);
    // setCountState((prev) => prev + 1);
  // }) => {
  // }, []);

  return (
    <>
      <div>===================</div>

      <h1>저는 부모 컴포넌트 입니다.</h1>

      {/* letCOunt는 document.getElementById로 지정을 해주어야 상태변경을 할 수 있다. */}
      {/* state올리고 리랜더링되면서 계속해서 초기화되는 문제도있다. */}
      <div>Count(let) : {countLet}</div>
      <button onClick={onClickCountLet}>count(let) plus one</button>

      <div>Count(state) : {countState}</div> */}
      <button onClick={onClickCountState}>count(state) plus one</button>


      {/*       
      <div>Count(state) : {countState}</div>
      <button onClick={() => {
    // setCountState(countState + 1);
      setCountState((prev) => prev + 1);
      }}>count(state) plus one</button> */}

      <div>===================</div>
      <MemoizationChildPage countState={countState}/>
    </>
  );
}
