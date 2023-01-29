import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";
import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function BoardList() {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickMoveToBoardNew = () => {
    void router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  return (
    <BoardListUI
      data={data}
      // onClickMoveToBoardNew={onClickMoveToBoardNew}
      // onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToPage={onClickMoveToPage}
    />
  );
}
