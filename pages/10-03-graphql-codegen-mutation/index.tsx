import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

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
  //첫번째는 result의 타입, 두번째는 variables의 타입을 넣어야 되는데 무슨원리야이거?
  const [myFunction] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [writer, setWriter] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const writerHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const titleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const contentsHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
    console.log(result);
    alert(result.data?.createBoard?.message);
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
