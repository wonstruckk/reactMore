import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    # 변수의 타입적는곳.
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      #실제 전달할 변수적는곳.
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myFunction] = useMutation(CREATE_PRODUCT);

  const graphQlHandler = async () => {
    //스코프 체인이 일어나서 writer state를 활용이 가능해 진다.
    const result = await myFunction({
      variables: {
        // $역할을 하고 있다.
        seller: "hongE",
        createProductInput: {
          name: "mouse",
          detail: "good",
          price: 10000,
        },
      },
    });
    console.log(result);
    alert(result.data.createProduct.message);
  };

  return (
    <>
      <button onClick={graphQlHandler}>GraphQl API 요청 해보기.(동기)</button>
    </>
  );
}
