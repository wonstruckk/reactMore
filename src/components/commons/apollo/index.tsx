import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { useEffect } from "react";

import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { GraphQLClient } from "graphql-request";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1. 프리 랜더링 예제 - process.borwser방법
  if (process.browser) {
    console.log("지금 브라우저다");
    const result = localStorage.getItem("accessToken");
    console.log(result);
    if (result) setAccessToken(result);
  } else {
    console.log("지금 yarn dev로 실행시킨 fe서버다");
    const result = localStorage.getItem("accessToken");
    console.log(result);
    if (result) setAccessToken(result);
  }

  // 2. 프리랜더링 예제 - typeof window 방법
  if (typeof window !== "undefined") {
    // console.log("지금 브라우저다");
    // const result = localStorage.getItem("accessToken");
    // console.log(result);
    // if (result) setAccessToken(result);
  } else {
    // console.log("지금 yarn dev로 실행시킨 fe서버다");
    // const result = localStorage.getItem("accessToken");
    // console.log(result);
    // if (result) setAccessToken(result);
  }

  // 3. useEffect 방법, 프리랜더링 무시
  useEffect(() => {
    // // 1. 기존방식(refresh이전)
    // console.log("지금 브라우저다");
    // const result = localStorage.getItem("accessToken");
    // console.log(result);
    // if (result) setAccessToken(result);

    // 2. refreshToken방식
    void getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // useQuery,mutation의 에러만 컨트롤한다.
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러캐치.
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2-1. refreshToken으로 accessToken재발급받기.
            getAccessToken().then((newAccessToken) => {
              // 2-2. 재발급받은 accessToken저장.
              setAccessToken(newAccessToken);
              if (typeof newAccessToken !== "string") return;
              // 3-1. 재발급받은 accessToken으로 방금 실패한 쿼리 정보 수정하기
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // 만료된 토큰이 추가되어 있는 상태.
                  Authorization: `Bearer ${newAccessToken ?? ""}`, // 토큰만 새걸로 바꿔치기.
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-2. 방금 수정한 쿼리 재요청하기
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
    // cache: new InMemoryCache(), 페이지 전환(app_tsx리랜더 되어도) 캐시 유지
  });

  // prettier-ignore
  return (<ApolloProvider client={client}>
            {props.children}
            </ApolloProvider>
    )
}
