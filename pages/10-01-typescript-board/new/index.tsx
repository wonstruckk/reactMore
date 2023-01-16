import BoardWrite from "../../../src/components/units/board/10-write/BoardWrite.container";

export default function GraphqlMutationPage() {
  return <BoardWrite isEdit={false} />;
  //함수형 컴포넌트는 그냥 함수넣어준거랑 똑같다. pros가 함수다.
  // <>
  //    {BoardWrite({isEdit:false})}
  // </>
}
