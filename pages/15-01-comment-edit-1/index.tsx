import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { MouseEvent, useState } from "react";

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

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function StaticRoutedPage() {
  const [myIndex, setMyIndex] = useState(5);
  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    setMyIndex(Number(event.currentTarget.id));
  };

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  return (
    <>
      {data?.fetchBoards.map((el, i) => (
        <div key={el._id}>
          {i !== myIndex && (
            <Row>
              <Column style={{ margin: "10px" }}>{el.writer}</Column>
              <Column style={{ margin: "10px" }}>{el.title}</Column>
              <button id={String(i)} onClick={onClickEdit}>
                수정하기
              </button>
            </Row>
          )}
          {i === myIndex && (
            <div>
              수정할 내용 : <input type="text" />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
