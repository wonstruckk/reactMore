import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  const onClickMoveToPage = (path: string) => {
    setVisitedPage(path);
    void router.push(path);
  };

  return {
    // visitedPage 필요한경우에 뽑아서 쓰도록 하자.
    onClickMoveToPage,
  };
}
