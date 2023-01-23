import { useState } from "react";
import { IBoard } from "../../../commons/types/generated/types";

interface IProps {
  el: IBoard;
}

export default function BoardCommentItme(props: IProps) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };
  return (
    <div>
      {isEdit === false && (
        <Row>
          <Column style={{ margin: "10px" }}>{props.el.writer}</Column>
          <Column style={{ margin: "10px" }}>{props.el.title}</Column>
          <button onClick={onClickEdit}>수정하기</button>
        </Row>
      )}
      {isEdit === true && (
        <div>
          수정할 내용 : <input type="text" />
        </div>
      )}
    </div>
  );
}
