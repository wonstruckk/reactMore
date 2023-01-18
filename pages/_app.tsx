import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/commons/layout";

export default function App({ Component }: AppProps) {
  const client = new ApolloClient({
    uri: " http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component />
      </Layout>
    </ApolloProvider>
  );
}
