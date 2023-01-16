import { RedInput, BlueButton } from "./BoardWrite.styles";

import { IBoardWriteUiProps } from "./BoardWrite.types";

export default function BoardWriteUi(props: IBoardWriteUiProps) {
  //presenter부분.UI부분.
  return (
    <>
      작성자 :{" "}
      <RedInput
        type="text"
        onChange={props.writerHandler}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목 :{" "}
      <input
        type="text"
        onChange={props.titleHandler}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용 :{" "}
      <input
        type="text"
        onChange={props.contentsHandler}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <BlueButton
        aaa="15px"
        color="green"
        ccc={props.myColor}
        onClick={props.isEdit ? props.onClickUpdate : props.graphQlHandler}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </BlueButton>
    </>
  );
}
