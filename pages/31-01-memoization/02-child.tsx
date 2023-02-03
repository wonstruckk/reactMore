import { memo } from "react";

function MemoizationChildPage() {
  console.log("자식이랜더링됨.");
  return (
    <>
      <div>===================</div>
      <h1>저는 자식 컴포넌트 입니다.</h1>
      <div>===================</div>
    </>
  );
}

// react에서 제공해주는 HOC와 같다고 할수 있다.
// props로 denpendency array의 같은역할을 한다.
export default memo(MemoizationChildPage);

// react-dev-tools -> setting highlight updates when components rredner..

// 그렇다면 전부 memo붙이면 효율적인게 아닐까 ??
// 그거는 좋지 않다, 왜 그렇냐.
// memo사용시에 어딘가에 useMemo처럼 기록이 된다.
// 애초에 랜더가 되지않는 곳에 memo를 걸면 사용하지도 안흔 컴포넌트를 memo기록해놓기 때문에
// 데이터를 두배로 저장하는 셈이 된다. 매우 비효율적으로 변함.
// 그래서 효율적으로 사용하기 위해서는 꼭 필요한곳에만 적용을 해 주도록 하자.

// 가비지컬렉션에 관해서.
// 언매니지드 언어 = C,C++ -> 내가 일일이 가비지컬렉션해줘야됨. / 효율적임.
// 매니지드 언어 = JAVA,Python,JS -> 알아서 해준다. 편리하다.  / 효율적이라고 할수는 없다.
