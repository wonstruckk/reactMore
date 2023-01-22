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
  const [startPage, setStartPage] = useState(1);

  // useQuery의 꺽쇄 왼쪽이 data에 들어가는 parameter, 오른쪽이 FETCH_BAORDS에 들어가는 parameter(Variables)
  // mutation없이?조건없이? 그냥 refetch받을때 구조분해할당으로 Refetch빼옴.
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

  const onClickPrevPage = (e: MouseEvent<HTMLSpanElement>) => {
    setStartPage((prev) => prev - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (e: MouseEvent<HTMLSpanElement>) => {
    setStartPage((prev) => prev + 10);
    void refetch({ page: startPage + 10 });
  };

  return (
    <>
      {data?.fetchBoards.map((el, i) => (
        <Row key={i}>
          <Column style={{ margin: "10px" }}>{el.writer}</Column>
          <Column style={{ margin: "10px" }}>{el.title}</Column>
        </Row>
      ))}

      <span onClick={onClickPrevPage}>이전페이지</span>

      {new Array(10).fill(1).map((_, i) => (
        <span
          key={i + startPage}
          id={String(i + startPage)}
          onClick={onClickpage}
        >
          {i + 1}
        </span>
      ))}

      <span onClick={onClickNextPage}>다음페이지</span>

      {/* 사용하지 안흘때 언더바를 사용한다. */}
      {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        <span key={i + 1} id={String(i + 1)} onClick={onClickpage}>
          {i + 1}
        </span>
      ))} */}

      {/* 코드의 중복 제거 */}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span key={el} id={String(el)} onClick={onClickpage}>
          {el}
        </span>
      ))} */}

      {/* <span id="1" onClick={onClickpage}>
        1
      </span>
      <span id="2" onClick={onClickpage}>
        2
      </span>
      <span id="3" onClick={onClickpage}>
        3
      </span> */}
    </>
  );
}
