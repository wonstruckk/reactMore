// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Modal from "antd/es/modal/Modal";
import { useForm } from "react-hook-form";

// 웹페이지 성능 최적화 가능, 리액트와 가장 큰 차이점같은데이게.
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage() {
  // mode onChange로 제어컴포넌트로 수정하고 각각 추적해서 실시간으로 검증관리.
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  // 그리고 reactQuill의 onChange는 라이브러리의 onchage라서 event객체 들어오지 않는다.
  const onChangeContents = (value: string) => {
    // register로 등록하지 않고 강제로 값을 넣음.
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // onChange되었다고 react-hook-form에 강제로 알려주는기능
    trigger("contents");
  };

  const onClickSumbit = () => {
    // const qqq = dynamic(async () => awiat import('antd'),{ssr:false}) // 코드 스플리팅
    // Modal.success({ content: "등록성공" });
  };

  return (
    <div>
      작성자 : <input type="text" {...register("writer")} />
      <br />
      비밀번호 : <input type="text" {...register("password")} />
      <br />
      제목 : <input type="text" {...register("title")} />
      <br />
      {/* onChange={(값)=>setValue(값)} => onChnage={setValue}} 이거랑 같다 */}
      {/* 최적화 / 눈에보이는 코드가 좋지않아서 이렇게는 안쓰는게 좋다. */}
      내용 : <ReactQuill onChange={onChangeContents} />
      <br />
      <button onClick={onClickSumbit}>등록하기</button>
    </div>
  );
}
