import BoardWriteUi from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  //container부분.
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
    <BoardWriteUi
      graphQlHandler={graphQlHandler}
      writerHandler={writerHandler}
      titleHandler={titleHandler}
      contentsHandler={contentsHandler}
    />
  );
}
