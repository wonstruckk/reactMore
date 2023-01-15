import { RedInput, BlueButton } from "./BoardWrite.styles";

export default function BoardWriteUi(props) {
  //presenter부분.UI부분.
  return (
    <>
      작성자 : <RedInput type="text" onChange={props.writerHandler} />
      <br />
      제목 : <input type="text" onChange={props.titleHandler} />
      <br />
      내용 : <input type="text" onChange={props.contentsHandler} />
      <br />
      <BlueButton onClick={props.graphQlHandler}>
        GraphQl API 요청 해보기.(동기)
      </BlueButton>
    </>
  );
}
