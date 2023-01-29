import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { IQuery } from "../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

function LoginSuccessPage() {
  // const router = useRouter();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("login first");
  //     void router.push("/23-03-login-check");
  //   }
  // }, []);

  return <>{data?.fetchUserLoggedIn.name}님 welcome</>;
}

export default withAuth(LoginSuccessPage);
