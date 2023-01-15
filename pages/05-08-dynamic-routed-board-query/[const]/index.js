import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.const),
    },
  });
  console.log(data);

  return (
    <>
      <div>{router.query.const}번 페이지 이동 완료.</div>
      <div>작성자:{data ? data.fetchBoard.writer : "로딩중입니다"}</div>
      <div>제목:{data && data.fetchBoard.title}</div>
      <div>내용:{data?.fetchBoard.contents}</div>
    </>
  );
}

//useQuery문은 페이지에 들어오자마자 요청이 바로 들어간다, 특정행동안하더라도.
//쿼리를 요청할때는 fetchBoard가 없기 때문에 undefined가 발생하게 된다.
//data를 받아오는 와중인데 비동기처리를 해서 return부의화면이 나오지만, 데이터는 못받아옴.
//useQuery는 async await사용 불가.
