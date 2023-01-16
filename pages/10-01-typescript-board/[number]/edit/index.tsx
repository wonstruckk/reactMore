import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container";

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
//수정페이지
const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });
  console.log(data);

  return <BoardWrite isEdit={true} data={data} />;

  // <>
  // {BoardWrite({ isEdit:true, data:data})}
  // </>
}
