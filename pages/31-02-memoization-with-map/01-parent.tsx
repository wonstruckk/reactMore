import { useCallback, useMemo, useState } from "react";
import WordChild from "./02-child";
import { v4 as uuidv4 } from "uuid";

export default function MemoizationParentPage() {
  const [data, setData] = useState("eating delicious chullSoo");

  const onClickChange = () => {
    setData("eating 맛잇게 영희");
  };

  return (
    <>
      {data.split(" ").map((el, i) => (
        // uuid는 계속해서 바뀌기 때문에 memo를 사용한 의미가 없을수 있다.(랜더링계속되니까)
        // key자체가 프롭스로 넘어가서 dependency array역할을 하기 때문이다.
        <WordChild key={uuidv4} el={el} /> // memo시 key 또는 el이 변경된 부분만 리랜더링됨.
      ))}
      <button onClick={onClickChange}>바꾸가</button>
    </>
  );
}
