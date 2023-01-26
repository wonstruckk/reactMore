import ChildPage from "./02-child";

// 1. 컴포넌트는 그냥 함수에 불과하다,
// 2. 따라서, props도 매개변수에 불과하기 때문에 내 맘대로 이름 변경 가능하다.
export default function ParentPage() {
  return (
    <div>
      <ChildPage count={3} />
      {/* {ChildPage({ count: 3 })} */}
    </div>
  );
}
