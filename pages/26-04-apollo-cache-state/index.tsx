import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { MouseEvent } from "react";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => () => {
    void deleteBoard({
      variables: {
        boardId,
      },
      // refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        cache.modify({
          fields: {
            // prev안에는 객체가 하나하나 들어가있지 않고 주소가 들어가있다.
            // docs를 읽어보면 readFieild를 써서 객체의 키값읽도록해야한다. 여기서만 사용한다.
            fetchBoards: (prev, { readField }) => {
              const deleteId = data.deleteBoard; // 삭제가 된 id
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deleteId // el._id가 되지 않아서 readField사용해서 꺼내온다
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  // refetch의 경우 간편하고 좋지만, 사용자가 많으면 백앤드 부하가 걸리니까
  // cache를 직접 수정하도록 하자.
  // 로직 자체가 삭제/추가가 되면서 캐시에 남아있는 부분이 제대로 동작하지 않기 때문에 생기는 이유라서?
  const onClickCreate = () => {
    void createBoard({
      variables: {
        createBoardInput: {
          wirter: "1234",
          password: "12345",
          title: "제목",
          contents: "내용",
        },
      },
      // refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el, i) => (
        <Row key={i}>
          <Column style={{ margin: "10px" }}>{el.writer}</Column>
          <Column style={{ margin: "10px" }}>{el.title}</Column>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </Row>
      ))}
      <button onClick={onClickCreate}>등록하기</button>
    </>
  );
}
