import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";
// 상세
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
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
      boardId: router.query.id,
    },
  });
  console.log(data);

  const moveEdit = () => {
    router.push(`/09-01-boards/${router.query.number}/edit`);
  };

  return (
    <>
      <div>{router.query.number}번 페이지 이동 완료.</div>
      <div>작성자:{data ? data.fetchBoard.writer : "로딩중입니다"}</div>
      <div>제목:{data?.fetchBoard.title}</div>
      {/* <div>내용:{data?.fetchBoard.contents}</div> */}
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      )}
    </>
  );
}
