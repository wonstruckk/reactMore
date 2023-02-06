import { useMutation, useQuery } from "@apollo/client";
import { gql } from "graphql-request";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($bordId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUiPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: "TBD" },
    }
  );

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onClickLike = () => {
    void likeBoard({
      // 1. refetch로 하는 비효율적인 백엔드와의 통신.
      // variables: { boardId: "TBD" },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "" },
      //   },
      // ],

      // 2. 캐시로 수정해서 적용 / optimisticUI
      optimisticResponse : {
        likeBoard : (data?.fetchBoard.likeCount ?? 0 )+ 1
      }

      // cache를 사용하겟다, data기반으로 수정.
      update(cache, { data }) {
        // 기존에 없던값도 추가할 수 있는 캐시설정 modify는 기존에있는값만수정가능.
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "TBD" },
          data: {
            fetchBoard: {
              _id: "TBD",
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
        //  처리절차 : optimistic으로 UI선 수정 후, data Response값을 이 후에 받아와서 데이터작업을 진행함.
      },
    });
  };

  return (
    <>
      <div>현재좋아요 카운트</div>
      <button onClick={onClickLike}>좋아요</button>
    </>
  );
}
