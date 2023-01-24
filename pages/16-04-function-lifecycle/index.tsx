import { Component, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

// 이거나, {count:number}나 다를바 없다.
// interface IPrevState {
//   count: number;
// }

export default function ClassCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  // state = {
  //   count: 0,
  // };

  // componentDidMount() {
  //   console.log("그려지고 나서 실행");
  // }
  useEffect(() => {
    //  첫 랜더링도 변경으로 본다, 처음시작하자마자 동작.
    console.log("그려지고 나서 실행");
  });

  // componentDidUpdate() {
  //   console.log("변경되고 나서 실행");
  // }

  useEffect(() => {
    //  첫 랜더링도 변경으로 본다, 처음시작하자마자 동작.
    console.log("변경되고 나서 실행");
  }, []);

  // componentWillUnmount() {
  //   console.log("사라질때 실행.");
  // }

  useEffect(() => {
    return () => {
      console.log("사라질때 실행");
    };
  }, []);

  // 요약.
  // 1. 하나로 합치기 가능.
  // useEffect(() => {
  //   console.log("그려지고 나서 실행");
  //   return () => {
  //     console.log("사라질때 실행");
  //   };
  // }, []);

  // 2. 잘못된 사용 예제
  // -> 무한루프,추가랜더링 조심해야됨.
  // useEffect(() => {
  // setCount((prev) => prev + 1);
  // }, []);

  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    void Router.push("/");
  };

  return (
    <>
      {/* this가 생략되어 있어서 this라고 적어주어야 한다. */}
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickMove}>페이지나가기</button>
    </>
  );
}
