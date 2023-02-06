import { gql, useApolloClient, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { MouseEvent } from "react";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARD = gql`
  query fetchBoards($boardId: ID!) {
    fetchBoards(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function StaticRoutedPage() {
  const router = useRouter();
  const client = useApolloClient();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // async await안하면 void로 붙인다. 이거그냥 Eslint룰임.(비동기안한다는뜻)
  const onClickpage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  // mutation이후 refetch 요청하는 경우.
  // const onClickDelete = async (event) => {
  // await deleteBoard({
  // variables:{number : Number(event.target.id)},
  // refetechQueries:[{query:FETCH_BOARDS}]
  // })
  // }

  const prefetchBoard = (boardId: string) => async () => {
    // usequery
    // useLazyQuery
    // useApolloClient, apollocache는 글로벌스테이트라서 거기에 저장이됨.
    // 미리패칭이되어있어서 빠르다.
    await client.query({
      query: FETCH_BOARD,
      variables: { boardId },
    });
  };

  const onClickMove = () => {
    void router.push("");
  };

  return (
    <>
      {data?.fetchBoards.map((el, i) => (
        <Row key={i}>
          <Column style={{ margin: "10px" }}>{el.writer}</Column>
          <Column
            style={{ margin: "10px" }}
            onMouseOver={prefetchBoard(el._id)}
          >
            {el.title}
          </Column>
        </Row>
      ))}

      {/* {new Array(10).fill(1).map((_, i) => (
        <span key={i + 1} id={String(i + 1)} onClick={onClickpage}>
          {i + 1}
        </span>
      ))} */}
    </>
  );
}
