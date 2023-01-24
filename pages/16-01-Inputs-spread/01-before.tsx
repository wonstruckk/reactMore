import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

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
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const writerHandler = (event) => {
    setWriter(event.target.value);
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentsHandler = (event) => {
    setContents(event.target.value);
  };

  const graphQlHandler = async () => {
    //스코프 체인이 일어나서 writer state를 활용이 가능해 진다.
    const result = await myFunction({
      variables: {
        // $역할을 하고 있다.
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result.data.createBoard.message);
    alert(result.data.createBoard.message);
  };

  return (
    <>
      작성자 : <input type="text" onChange={writerHandler} />
      <br />
      제목 : <input type="text" onChange={titleHandler} />
      <br />
      내용 : <input type="text" onChange={contentsHandler} />
      <br />
      <button onClick={graphQlHandler}>GraphQl API 요청 해보기.(동기)</button>
    </>
  );
}
