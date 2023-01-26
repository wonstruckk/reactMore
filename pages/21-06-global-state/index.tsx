import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";
import BoardWrite from "../../src/components/units/21-global-state/BoardWrite.presenter";

export default function GlobalStatePage() {
  // atom의 상태변화를 구독/사용함.
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  // 이페이지 랜더링 시 useEffect로 전역리코일상태를 변경시켜서
  // 하위 컴포넌트에도 영향을 끼치게 만듬.
  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <BoardWrite isEdit={true} />;
}
