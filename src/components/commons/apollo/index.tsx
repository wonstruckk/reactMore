import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";

interface IApolloSettingProps {
  children: JSX.Element;
}

import { createUploadLink } from "apollo-upload-client";

export default function ApolloSetting(props: IApolloSettingProps) {
  const uploadLink = createUploadLink({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  // prettier-ignore
  return (<ApolloProvider client={client}>
            {props.children}
            </ApolloProvider>
    )
}
