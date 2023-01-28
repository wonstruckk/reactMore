import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { useEffect } from "react";

import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

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
    console.log("지금 브라우저다");
    const result = localStorage.getItem("accessToken");
    console.log(result);
    if (result) setAccessToken(result);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
    // cache: new InMemoryCache(), 페이지 전환(app_tsx리랜더 되어도) 캐시 유지
  });

  // prettier-ignore
  return (<ApolloProvider client={client}>
            {props.children}
            </ApolloProvider>
    )
}
