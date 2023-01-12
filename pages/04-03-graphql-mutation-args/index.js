import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # 변수의 타입적는곳.
    createBoard(writer: $writer, title: $title, contents: $contents) {
      #실제 전달할 변수적는곳.
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myFunction] = useMutation(CREATE_BOARD);

  const graphQlHandler = async () => {
    const result = await myFunction({
      variables: {
        // $역할을 하고 있다.
        writer: "honge",
        title: "hello,hi",
        contents: "nice 2 meet you",
      },
    });
    console.log(result.data.createBoard.message);
    alert(result.data.createBoard.message);
  };

  return (
    <button onClick={graphQlHandler}>GraphQl API 요청 해보기.(동기)</button>
  );
}
