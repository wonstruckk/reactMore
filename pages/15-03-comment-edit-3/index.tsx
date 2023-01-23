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
  const [myIndex, setMyIndex] = useState([
    false, // index 0
    false, // index 1
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // 배열을 얕은복사를 하지 않으면, 주소만 참조하기 때문에 랜더링을 일으키지 않게 된다.
  // 리액트는 상태가 변경되어야 리랜더링을 한다(주소값은 랜더링이 아님)
  // 그러니까 새로운 객체/배열을 만드는 전개연산자를 활용해주기 바란다.

  // 프로젝트 규모가 커지면 전개연산자 활용하지 않을시 원본이 변할 수 있기 때문에
  // 어지간 하면 전개연산자로 복사/수정을 해서 활용해주기 바란다.
  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    const qwer = [...myIndex];
    qwer[Number(event.currentTarget.id)] = true;
    setMyIndex(qwer);
  };

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  return (
    <>
      {data?.fetchBoards.map((el, i) => (
        <div key={el._id}>
          {myIndex[i] === false && (
            <Row>
              <Column style={{ margin: "10px" }}>{el.writer}</Column>
              <Column style={{ margin: "10px" }}>{el.title}</Column>
              <button id={String(i)} onClick={onClickEdit}>
                수정하기
              </button>
            </Row>
          )}
          {myIndex[i] === true && (
            <div>
              수정할 내용 : <input type="text" />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
