import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

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

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickBasket = (basket: IBoard) => () => {
    console.log(basket);

    // 1. 기존 장바구니 가져오기
    const baskets: Pick<IBoard, "contents" | "title" | "_id" | "writer">[] =
      // 문자열이니까 parse활용해준다.
      JSON.parse(localStorage.getItem("baskets") ?? "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!!!");
      return;
    }

    // 3. 해당 장바구니에 담기
    baskets.push(basket);
    // 배열이나 객체가 로컬스토리지에는 들어갈 수 없다, 그래서 stringify로 문자열로 변환해서 저장해준다.
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </div>
      ))}
    </>
  );
}
