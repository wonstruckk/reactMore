import BoardWriteUi from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { CREATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { EDIT_BOARD } from "./BoardWrite.queries";

import { IBoardWriteProps } from "./BoardWrite.types";
import { IMyVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  //container부분.
  const [myFunction] = useMutation(CREATE_BOARD);
  const [myEdit] = useMutation(EDIT_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [myColor, setMyColor] = useState(false);

  const writerHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) {
      setMyColor(true);
    }
  };

  const titleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setMyColor(true);
    }
    if (event.target.value == "") return setMyColor(false);
  };

  const contentsHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setMyColor(true);
    }
  };

  //아래함수에 router.query.number의 시점을 잘 생각해봐야한다.
  //컴포넌트가 합쳐져서 화면에 보이게 되는데.
  //등록페이지는 08-05-boards안의 new이고.
  //그페이지에는 번호가 없기 때문이다, import해서 사용할때 생각을 한번쯤은 하고 써야한다.
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
    alert(result.data.createBoard.message);
    router.push(`/10-01-typescript-board/${result.data?.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const myVariable: IMyVariables = {
      number: Number(router.query.number),
    };
    if (writer) myVariable.writer = writer;
    if (title) myVariable.writer = writer;
    if (contents) myVariable.writer = writer;

    //edit mutation
    const result = await myEdit({
      variables: myVariable,
    });

    //상세페이지로 router.push
    alert(result.data?.updateBoard.message);
    router.push(`/10-01-typescript-board/${result.data?.updateBoard.number}`);
  };

  return (
    <BoardWriteUi
      graphQlHandler={graphQlHandler}
      onClickUpdate={onClickUpdate}
      writerHandler={writerHandler}
      titleHandler={titleHandler}
      contentsHandler={contentsHandler}
      myColor={myColor}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
