import { Modal } from "antd";

const success = () => {
  Modal.success({
    content: "게시글 등록 성공.",
  });
};

const error = () => {
  Modal.error({
    content: "비밀번호 잘못 눌렸습니다.",
  });
};

export default function App() {
  return (
    <>
      <button onClick={success}>success</button>
      <button onClick={error}>error</button>
    </>
  );
}
