import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "hong", title: "title", contents: "contents!!!") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myFunction] = useMutation(CREATE_BOARD);

  const graphQlHandler = async () => {
    const result = await myFunction();
    console.log(result.data.createBoard.message);
    alert(result.data.createBoard.message);
  };

  return (
    <button onClick={graphQlHandler}>GraphQl API 요청 해보기.(동기)</button>
  );
}
