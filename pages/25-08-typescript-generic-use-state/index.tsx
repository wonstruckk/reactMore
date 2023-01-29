export function useMyState<S>(aaa: S): [S, () => void] {
  const myState = aaa; //state의 초기값 aaa를 사용해서 설정.

  const mySetState = (bbb) => {
    // 1. bbb를 사용해서 myState변경하기.
    console.log(`${myState}에서 ${bbb}로 myState변경합니다`);
    // 2. 해당 컴포넌트를 리랜더링 시키기(랜더함수)
    console.log(`변경된 ${bbb}로 컴포넌트를 리랜더링 할겁니다.`);
  };
  return [myState, mySetState];
}

// 시용자
const [count, setCount] = useMyState<number>(10);
