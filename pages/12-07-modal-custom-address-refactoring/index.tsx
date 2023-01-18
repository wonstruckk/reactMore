import { Modal } from "antd";
import { useState } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleOk = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleCancel = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handle;

  return (
    <>
      <button onClick={showModal}>모달창 열기</button>
      <Modal
        title="제목"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      비밀번호입력 : <input type="password" />
    </>
  );
}
