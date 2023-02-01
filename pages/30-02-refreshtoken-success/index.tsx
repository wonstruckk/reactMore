import { gql, useApolloClient, useLazyQuery, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  // 1.페이지 접속하면 자동으로 data받고, 리랜더링됨.
  // const { data } =
  // useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // 2.버튼 클릭시 직접 실행하면 data에 받아지고, 자동으로? 리랜더링됨.
  // 자동으로 {data}에 담기기 떄문에 axios처럼 result로 못받아온다.
  // const [myquery, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);

  // 3. axios와 동일.
  // const client = useApolloClient();

  const client = useApolloClient();

  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickButton}>클릭하세요</button>
    </>
  );

  //   {data?.fetchUserLoggedIn.name}님 welcome
}
